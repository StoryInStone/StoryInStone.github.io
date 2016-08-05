from sqlalchemy.ext.automap import automap_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# From database
BaseFrom = automap_base()
engineFrom = create_engine('mysql+mysqldb://root:123456@localhost/spider_raw_ddz')
BaseFrom.prepare(engineFrom, reflect=True)
BuildingFrom = BaseFrom.classes.building
SpaceFrom = BaseFrom.classes.space
BuildingOperatorFrom = BaseFrom.classes.building_operator
BuildingDeveloperFrom = BaseFrom.classes.building_developer
CompanyFrom = BaseFrom.classes.company
SessionFrom = sessionmaker(engineFrom)

# To database
BaseTo = automap_base()
engineTo = create_engine('mysql+mysqldb://root:123456@localhost/spider_ddz')
BaseTo.prepare(engineTo, reflect=True)
BuildingTo = BaseTo.classes.building
SpaceTo = BaseTo.classes.space
BuildingOperatorTo = BaseTo.classes.building_operator
BuildingDeveloperTo = BaseTo.classes.building_developer
CompanyTo = BaseTo.classes.company
SessionTo = sessionmaker(engineTo)

sessionFrom = SessionFrom()
for buildingFrom in sessionFrom.query(BuildingFrom):
    sessionTo = SessionTo()
    try:
        # deal with building and insert into true database
        buildingTo = BuildingTo()
        buildingTo.id = buildingFrom.id
        sessionTo.add(buildingTo)

        # deal with operator and insert into true database
        buildingOperatorFrom = sessionFrom.query(BuildingOperatorFrom).filter(BuildingOperatorFrom.building_id==buildingFrom.id).first()
        operator_id = buildingOperatorFrom.company_id
        operatorFrom = sessionFrom.query(CompanyFrom).filter(CompanyFrom.id==operator_id).first()
        operatorTo = CompanyTo()
        operatorTo.id = operatorFrom.id 
        operatorTo.building_id = operatorFrom.id 
        operatorTo.name = operatorFrom.name
        sessionTo.add(operatorTo)

        # deal with developer and insert into true database
        buildingDeveloperFrom = sessionFrom.query(BuildingDeveloperFrom).filter(BuildingDeveloperFrom.building_id==buildingFrom.id).first()
        developer_id = buildingDeveloperFrom.company_id
        developerFrom = sessionFrom.query(CompanyFrom).filter(CompanyFrom.id==developer_id).first()
        developerTo = CompanyTo()
        developerTo.id = developerFrom.id 
        developerTo.building_id = developerFrom.id 
        developerTo.name = developerFrom.name
        sessionTo.add(developerTo)
        for spaceFrom in sessionFrom.query(SpaceFrom).filter(SpaceFrom.building_id==buildingFrom.id):
            # deal with space and insert into true database
            spaceTo = SpaceTo()
            spaceTo.id = spaceFrom.id
            spaceTo.building_id = spaceFrom.building_id
            sessionTo.add(spaceTo)
        sessionTo.commit()
    except Exception, e:
        print e 
        sessionTo.rollback()

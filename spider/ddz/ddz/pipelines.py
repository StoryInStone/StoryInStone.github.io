# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html
from sqlalchemy.ext.automap import automap_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

class DdzPipeline(object):

    def process_item(self, item, spider):
        BaseFrom = automap_base()
        engineFrom = create_engine('mysql+mysqldb://root:123456@localhost/spider_raw_ddz')
        BaseFrom.prepare(engineFrom, reflect=True)
        BuildingFrom = BaseFrom.classes.building
        SpaceFrom = BaseFrom.classes.space
        BuildingOperatorFrom = BaseFrom.classes.building_operator
        BuildingDeveloperFrom = BaseFrom.classes.building_developer
        CompanyFrom = BaseFrom.classes.company
        SessionFrom = sessionmaker(engineFrom)
		sessionFrom = SessionFrom()
		try:
			buildingFrom = BuildingFrom()
			buildingFrom.id = item["id"]
			sessionFrom.commit()
		except Exception, e:
	        print e 
	        sessionFrom.rollback()
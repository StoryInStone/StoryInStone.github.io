# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class DdzItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    pass

class BuildingItem(scrapy.Item):
	id = scrapy.Field()							# id, primary_key
    ukey = scrapy.Field()                       # 每个building唯一标示，必须与版本配合才能作为主键'
    building_grade_id = scrapy.Field()          # 楼盘等级
    keyword_tag = scrapy.Field()                # 楼盘关键字
    submarket_id = scrapy.Field()               # 商圈id
    building_type = scrapy.Field()              # 建筑类型
    building_name_cn = scrapy.Field()           # 建筑中文名
    latitude = scrapy.Field()                   # 纬度
    longitude = scrapy.Field()                  # 经度
    address_cn = scrapy.Field()                 # 地址中文名
    building_area = scrapy.Field()              # 建筑面积
    building_clear_height = scrapy.Field()      # 层高
    building_clear_height_net = scrapy.Field()  # 净层高
    building_green_ratio = scrapy.Field()       # 楼盘绿化率
    floor_count = scrapy.Field()                # 总楼层
    elevator_count = scrapy.Field()             # 电梯数
    elevator_desc = scrapy.Field()              # 电梯描述
    major_tenants = scrapy.Field()              # 主要租户
    phone = scrapy.Field()                      # 楼盘联系电话
    efficiency_rate = scrapy.Field()            # 得房率
    handover_standard = scrapy.Field()          # 交付标准x
    building_ac_desc = scrapy.Field()           # 空调描述
    parking_number = scrapy.Field()             # 车位
    opex = scrapy.Field()                       # 物业费
    building_operator = scrapy.Field()          # 物业
    creator = scrapy.Field()                    # 开发商

class SpaceItem(scrapy.Item):
    id = scrapy.Field()                     # id, primary_key
    asset_id = scrapy.Field()               # 资产id
    space_type_id = scrapy.Field()          # 房源类型id
    building_id = scrapy.Field()            # 房源id
    floor = scrapy.Field()                  # 楼层
    unit = scrapy.Field()                   # 单元号
    size = scrapy.Field()                   # 大小/建筑面积
    available_size = scrapy.Field()         # 可用面积= size * 使用率
    rate = scrapy.Field()                   # 每平米租金
    handover_standard = scrapy.Field()      # 交付标准
    is_occupied = scrapy.Field()            # 是否空置
    budget = scrapy.Field()                 # 租金预算
    is_divisible = scrapy.Field()           # 是否可分割
    date_available = scrapy.Field()         # 房屋可用时间/最早可租日期
    space_clear_height = scrapy.Field()     # 净层高
    shortest_lease_term = scrapy.Field()    # 最短租期
    grace_lease_term = scrapy.Field()       # 免租期
    date_listed = scrapy.Field()            # on_market时间/更新时间
    description = scrapy.Field()            # 描述/标签
    building_operator = scrapy.Field()      # 物业
    creator = scrapy.Field()                # 开发商

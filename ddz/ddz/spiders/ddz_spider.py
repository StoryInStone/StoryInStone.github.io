# -*- coding: utf-8 -*-
import scrapy

from ddz.items import DdzItem, SpaceItem

import sys

reload(sys)
sys.setdefaultencoding('utf-8')


class DdzSpiderSpider(scrapy.Spider):
    name = "ddz_spider"
    allowed_domains = ["diandianzu.com"]
    cities = ['bj', 'sh', 'gz', 'sz', 'hz', 'xa']
    start_urls = [
        "http://" + city + ".diandianzu.com/listing/" for city in cities
        ]

    def parse(self, response):
        for href in response.css(".listing-list > .item > a::attr('href')"):
            url = response.urljoin(href.extract())
            yield scrapy.Request(url, self.parse_contents)
        nextPage = response.css("div.page > div > a.next::attr('href')")
        if nextPage:
            nextUrl = response.urljoin(nextPage[0].extract())
            yield scrapy.Request(nextUrl, callback=self.parse)

    def parse_contents(self, response):
        building = DdzItem()
        building['building_name_cn'] = response.css("div.buildingName > h1::text").extract()[0]
        building['address_cn'] = response.css("div.baseInfo > span.regionName::text").extract()[0]
        building['keyword_tag'] = response.css("div.baseInfo > span.areaRange::text").extract()[0]
        building['floor_count'] = response.css("ul.feature-list > li.li-item > span.f-con::text").extract()[1]
        building['building_clear_height'] = response.css("ul.feature-list > li.li-item > span.f-con::text").extract()[2]
        building['parking_number'] = response.css("ul.feature-list > li.li-item > span.f-con::text").extract()[3]
        building['elevator_count'] = response.css("ul.feature-list > li.li-item > span.f-con::text").extract()[5]
        building['elevator_desc'] = response.css("ul.feature-list > li.li-item > span.f-con::text").extract()[5]
        building['building_ac_desc'] = response.css("ul.feature-list > li.li-item > span.f-con::text").extract()[6]
        building['major_tenants'] = response.css("ul.feature-list > li.li-item > span.f-con::text").extract()[7]
        building['longitude'] = response.css("div.map-data > input#longitude::attr('value')").extract()[0]
        building['latitude'] = response.css("div.map-data > input#latitude::attr('value')").extract()[0]

        for data in response.css("div.house-dialog > div.house-info"):
            space = SpaceItem()
            space['budget'] = data.css("div.house-price > i::text").extract()
            space['size'] = data.css("li.fl > i::text").extract()[0]
            space['rate'] = data.css("li.fl > i::text").extract()[1]
            space['available_size'] = data.css("li.fl > i::text").extract()[2]
            space['description'] = data.css("li.fl::text").extract()[3]
            space['floor'] = data.css("li.fl::text").extract()[4]
            space['shortest_lease_term'] = data.css("li.fl::text").extract()[5]

        return building



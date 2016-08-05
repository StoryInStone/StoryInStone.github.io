-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.7.11-log - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出  表 nfchina3.building 结构
CREATE TABLE IF NOT EXISTS `building` (
  `id` char(36) NOT NULL COMMENT 'consider uuid',
  `code` varchar(45) DEFAULT NULL COMMENT '楼盘代码',
  `ukey` varchar(45) DEFAULT NULL COMMENT '每个building唯一标示，必须与版本配合才能作为主键',
  `ver` int(11) DEFAULT NULL COMMENT '版本',
  `keyword_tag` varchar(127) DEFAULT NULL COMMENT '楼盘关键字',
  `description` text,
  `asset_id` int(11) DEFAULT NULL COMMENT '资产id',
  `building_grade_id` int(11) DEFAULT NULL COMMENT '楼盘等级id',
  `market_id` int(11) DEFAULT NULL,
  `submarket_id` int(11) DEFAULT NULL COMMENT '商圈id\n',
  `creator` int(11) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  `admin` int(11) DEFAULT NULL COMMENT '资产管理员',
  `building_type` int(11) DEFAULT NULL COMMENT '建筑类型',
  `building_name_cn` varchar(127) DEFAULT NULL COMMENT '建筑中文名',
  `building_name_en` varchar(127) DEFAULT NULL COMMENT '建筑英文名',
  `building_name_other` varchar(127) DEFAULT NULL,
  `latitude` double DEFAULT NULL COMMENT '纬度',
  `longitude` double DEFAULT NULL COMMENT '经度',
  `address_cn` varchar(128) DEFAULT NULL COMMENT '地址中文名',
  `vacancy_rate` double DEFAULT NULL COMMENT '住房率%',
  `building_area` decimal(14,4) DEFAULT NULL COMMENT '建筑面积，total GFA',
  `rentable_area` decimal(14,4) DEFAULT NULL COMMENT '可租用面积',
  `available_area` decimal(14,4) DEFAULT NULL COMMENT '可用面积',
  `parking_ratio` varchar(45) DEFAULT NULL COMMENT '车位密度\n4:1000',
  `parking_type` enum('reserved','unreserved','none') DEFAULT NULL COMMENT '车位类型\n',
  `parking_rate` decimal(14,4) DEFAULT NULL COMMENT '停车费',
  `parking_number` int(11) DEFAULT NULL COMMENT '停车数',
  `parking_reserved_number` int(11) DEFAULT NULL COMMENT '已预订停车位',
  `parking_area` decimal(14,4) DEFAULT NULL COMMENT '停车面积',
  `building_clear_height` decimal(14,4) DEFAULT NULL COMMENT '层高',
  `building_clear_height_net` decimal(14,4) DEFAULT NULL COMMENT '净层高',
  `building_year` datetime DEFAULT NULL COMMENT '建筑年份',
  `building_completion_date` datetime DEFAULT NULL COMMENT '竣工时间',
  `building_sprinkler` varchar(128) DEFAULT NULL COMMENT '灭火设施',
  `building_green_ratio` double DEFAULT NULL COMMENT '楼盘绿化率\n',
  `floor_count` int(11) DEFAULT NULL COMMENT '总层数',
  `estimated_area` decimal(14,4) DEFAULT NULL COMMENT '估计面积',
  `actual_area` decimal(14,4) DEFAULT NULL COMMENT '实际面积',
  `min_floor_size` decimal(14,4) DEFAULT NULL COMMENT '最小层面积',
  `max_floor_size` decimal(14,4) DEFAULT NULL COMMENT '最大层面积',
  `typical_floor_area` decimal(14,4) DEFAULT NULL COMMENT '整层面积',
  `lot_size` decimal(14,4) DEFAULT NULL COMMENT '总占地面积',
  `building_ac_type` varchar(45) DEFAULT NULL COMMENT '空调类型\ncentral\nindenpendent\nunknown',
  `building_ac_desc` varchar(128) DEFAULT NULL COMMENT '空调描述',
  `freshness_date` datetime DEFAULT NULL COMMENT '建筑上市时间',
  `signage` varchar(128) DEFAULT NULL,
  `tenancy` varchar(45) DEFAULT NULL COMMENT '单租户或多租户\nsingle\nmultiple',
  `elevator_count` varchar(64) DEFAULT NULL COMMENT '电梯数',
  `elevator_desc` varchar(128) DEFAULT NULL COMMENT '电梯描述',
  `major_tenants` text COMMENT '主要租户',
  `phone` varchar(2048) DEFAULT NULL COMMENT '楼盘联系电话',
  `efficiency_rate` double DEFAULT NULL COMMENT '得房率',
  `handover_standard` enum('whitebox','pre_built','raw/shell','as-built','2nd-generation','under_construction') DEFAULT NULL COMMENT '交付标准',
  `floor_loading` varchar(45) DEFAULT NULL COMMENT '楼板承重',
  `opex` decimal(14,4) DEFAULT NULL,
  `current_opex_total` varchar(45) DEFAULT NULL COMMENT '当年管理费',
  `opex_type` enum('gross','net') DEFAULT NULL COMMENT '物业费类型',
  `img_name` varchar(45) DEFAULT NULL COMMENT '用于传送文件名，无实际意义',
  `img_type` varchar(45) DEFAULT NULL COMMENT '用于传送文件名，无实际意义',
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  nfchina3.building 的数据：~0 rows (大约)
DELETE FROM `building`;
/*!40000 ALTER TABLE `building` DISABLE KEYS */;
/*!40000 ALTER TABLE `building` ENABLE KEYS */;


-- 导出  表 nfchina3.space 结构
CREATE TABLE IF NOT EXISTS `space` (
  `id` char(36) NOT NULL,
  `ukey` varchar(45) DEFAULT NULL COMMENT '每个space唯一标示，必须与版本配合才能作为主键',
  `ver` int(11) DEFAULT NULL COMMENT '版本(0表示最新版，其余顺序递增)',
  `asset_id` int(11) DEFAULT NULL COMMENT '资产id，同一space的不同版本共享同一asset',
  `space_type_id` int(11) DEFAULT NULL COMMENT '房源类型id',
  `building_id` char(36) DEFAULT NULL COMMENT '楼盘id，同一space的不同版本共享同一building',
  `contiguous_id` int(11) DEFAULT NULL COMMENT '连续空间id',
  `creator` char(36) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  `admin` int(11) DEFAULT NULL COMMENT '资产管理员',
  `floor` int(11) DEFAULT NULL COMMENT '楼层',
  `unit` varchar(15) DEFAULT NULL COMMENT '单元号',
  `min_divisible` decimal(10,4) DEFAULT NULL COMMENT '最小分隔面积',
  `size` decimal(10,4) DEFAULT NULL COMMENT '空间大小',
  `available_size` decimal(10,4) DEFAULT NULL COMMENT '可用面积',
  `current_size` decimal(10,4) DEFAULT NULL COMMENT '预测面积',
  `target_size` decimal(10,4) DEFAULT NULL COMMENT '实测面积',
  `rate` decimal(14,4) DEFAULT NULL COMMENT '每平米租金',
  `handover_standard` varchar(50) DEFAULT NULL COMMENT '交付标准',
  `is_occupied` tinyint(1) DEFAULT NULL COMMENT '是否空置',
  `budget` decimal(14,4) DEFAULT NULL COMMENT '租金预算',
  `is_contiguous` tinyint(1) DEFAULT NULL COMMENT '是否连续',
  `is_divisible` tinyint(1) DEFAULT NULL COMMENT '是否可分割',
  `LCD` datetime DEFAULT NULL COMMENT '合同起租日期',
  `LED` datetime DEFAULT NULL COMMENT '合同到期时间\nLease Term:（转租：自动确定＝LED-LCD; 非转租＝最大可租期限）',
  `date_vacant` datetime DEFAULT NULL COMMENT '租户离开日期',
  `date_available` datetime DEFAULT NULL COMMENT '房屋可用时间',
  `lease_type` enum('lease','sublease','unknown') DEFAULT NULL COMMENT '是否转租\nlease\nsublease\nunknown',
  `space_clear_height` int(11) DEFAULT NULL COMMENT '净层高',
  `name` varchar(45) DEFAULT NULL COMMENT '房源标题',
  `opex` decimal(14,4) DEFAULT NULL COMMENT '房源物业费',
  `sell_rate` decimal(14,4) DEFAULT NULL COMMENT '出售价格',
  `shortest_lease_term` int(11) DEFAULT NULL COMMENT '最短租期，按月',
  `longest_lease_term` int(11) DEFAULT NULL COMMENT '最长租期，按月',
  `grace_lease_term` int(11) DEFAULT NULL COMMENT '免租期',
  `management_status` varchar(45) DEFAULT NULL COMMENT '状态，运营管理状态',
  `system_status` varchar(45) DEFAULT NULL COMMENT '系统状态，枚举NORMAL, FROZEN, ON_MARKET, OFF_MARKET, ARCHIVED, REMOVED',
  `market_status` varchar(45) DEFAULT NULL,
  `date_listed` datetime DEFAULT NULL COMMENT 'on_market时间',
  `description` text COMMENT '描述',
  `memo` text COMMENT '备忘',
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  `date_archived` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  nfchina3.space 的数据：~0 rows (大约)
DELETE FROM `space`;
/*!40000 ALTER TABLE `space` DISABLE KEYS */;
/*!40000 ALTER TABLE `space` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

CREATE TABLE IF NOT EXISTS `building_operator` (
`id` char(36) NOT NULL,
`building_id` char(36) NULL DEFAULT NULL COMMENT 'building_id',
`company_id` char(36) NULL DEFAULT NULL COMMENT 'company_id',
PRIMARY KEY (`id`)
) COLLATE='utf8_general_ci' ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `company` (
`id` char(36) NOT NULL,
`name` VARCHAR(127) NULL DEFAULT NULL COMMENT '公司名',
`type` VARCHAR(45) NULL DEFAULT NULL COMMENT '公司类型\\n中介\\n开发商\\n租户\\n业主\\n物业公司\\n租赁代理',
`logo` VARCHAR(255) NULL DEFAULT NULL,
`website` VARCHAR(255) NULL DEFAULT NULL COMMENT '公司网址',
`telephone` VARCHAR(45) NULL DEFAULT NULL COMMENT '公司电话',
PRIMARY KEY (`id`)
) COLLATE='utf8_general_ci' ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `building_developer` (
`id` char(36) NOT NULL,
`building_id` char(36) NULL DEFAULT NULL COMMENT 'building_id\\n',
`company_id` char(36) NULL DEFAULT NULL COMMENT 'company_id\\n',
PRIMARY KEY (`id`)
) COLLATE='utf8_general_ci' ENGINE=InnoDB;

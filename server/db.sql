CREATE DATABASE  IF NOT EXISTS `organick_store` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `organick_store`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: organick_store
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Vegetable'),(2,'Fresh'),(3,'Millets'),(4,'Health'),(5,'Nuts');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `message` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `img_url` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `discount` int NOT NULL DEFAULT '0',
  `rate` decimal(3,2) DEFAULT NULL,
  `short_description` text NOT NULL,
  `long_description` text NOT NULL,
  `additional_info` text NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Calabrese Broccoli','https://organick-store.s3.eu-central-1.amazonaws.com/products/calabrese-broccoli.png',20.00,35,5.00,'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.','A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.','Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',1),(2,'Fresh Banana Fruites','https://organick-store.s3.eu-central-1.amazonaws.com/products/fresh-banana-fruites.png',20.00,30,4.00,'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.','A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.','Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',2),(3,'White Nuts','https://organick-store.s3.eu-central-1.amazonaws.com/products/white-nuts.png',20.00,25,5.00,'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.','A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.','Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',3),(4,'Vegan Red Tomato','https://organick-store.s3.eu-central-1.amazonaws.com/products/vegan-red-tomato.png',20.00,15,5.00,'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.','A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.','Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',1),(5,'Mung Bean','https://organick-store.s3.eu-central-1.amazonaws.com/products/mung-bean.png',20.00,45,5.00,'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.','A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.','Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',4),(6,'Brown Hazelnut','https://organick-store.s3.eu-central-1.amazonaws.com/products/brown-hazelnut.png',20.00,40,3.50,'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.','A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.','Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',5),(7,'Eggs','https://organick-store.s3.eu-central-1.amazonaws.com/products/eggs.png',20.00,15,5.00,'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.','A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.','Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',2),(8,'Zelco Suji Elaichi Rusk','https://organick-store.s3.eu-central-1.amazonaws.com/products/zelco-suji-elaichi-rusk.png',20.00,25,5.00,'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.','A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.','Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',2),(9,'Mung Bean','https://organick-store.s3.eu-central-1.amazonaws.com/products/mung-bean-1.png',20.00,45,5.00,'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.','A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.','Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',4),(10,'White Hazelnut','https://organick-store.s3.eu-central-1.amazonaws.com/products/white-hazelnut.png',20.00,40,5.00,'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.','A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.','Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',5),(11,'Fresh Corn','https://organick-store.s3.eu-central-1.amazonaws.com/products/fresh-corn.png',20.00,15,5.00,'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.','A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.','Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',2),(12,'Organic Almonds','https://organick-store.s3.eu-central-1.amazonaws.com/products/organic-almonds.png',15.00,0,5.00,'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.','A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.','Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',2),(13,'Mung Bean','https://organick-store.s3.eu-central-1.amazonaws.com/products/mung-bean-2.png',11.00,0,5.00,'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.','A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.','Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',1),(14,'Brown Hazelnut','https://organick-store.s3.eu-central-1.amazonaws.com/products/brown-hazelnut-1.png',12.00,0,5.00,'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.','A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.','Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',1),(15,'Onion','https://organick-store.s3.eu-central-1.amazonaws.com/products/onion.png',17.00,0,5.00,'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.','A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.','Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',1),(16,'Cabbage','https://organick-store.s3.eu-central-1.amazonaws.com/products/cabbage.png',17.00,0,5.00,'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.','A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.','Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-26 21:12:16

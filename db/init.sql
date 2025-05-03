CREATE DATABASE IF NOT EXISTS edacy;

USE edacy;

CREATE TABLE IF NOT EXISTS 'livres' (
  'id' int NOT NULL AUTO_INCREMENT,
  'title' varchar(255) NOT NULL,
  'description' text,
  'author' varchar(255) NOT NULL,
  'createdAt' datetime NOT NULL,
  'updatedAt' datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

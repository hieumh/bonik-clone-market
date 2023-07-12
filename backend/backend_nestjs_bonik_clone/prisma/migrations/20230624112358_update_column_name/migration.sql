/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_id` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `category_name` on the `Category` table. All the data in the column will be lost.
  - The primary key for the `FlashDeal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `deal_id` on the `FlashDeal` table. All the data in the column will be lost.
  - You are about to drop the column `deal_name` on the `FlashDeal` table. All the data in the column will be lost.
  - You are about to drop the column `deal_price` on the `FlashDeal` table. All the data in the column will be lost.
  - You are about to drop the column `end_date` on the `FlashDeal` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `FlashDeal` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `FlashDeal` table. All the data in the column will be lost.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_id` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_name` on the `Product` table. All the data in the column will be lost.
  - The primary key for the `TopCategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_id` on the `TopCategory` table. All the data in the column will be lost.
  - The primary key for the `TopRating` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `product_id` on the `TopRating` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productId]` on the table `FlashDeal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoryId` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryName` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dealId` to the `FlashDeal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dealName` to the `FlashDeal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dealPrice` to the `FlashDeal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `FlashDeal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `FlashDeal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `FlashDeal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productName` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `TopCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `TopRating` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `FlashDeal` DROP FOREIGN KEY `FlashDeal_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `TopCategory` DROP FOREIGN KEY `TopCategory_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `TopRating` DROP FOREIGN KEY `TopRating_product_id_fkey`;

-- AlterTable
ALTER TABLE `Category` DROP PRIMARY KEY,
    DROP COLUMN `category_id`,
    DROP COLUMN `category_name`,
    ADD COLUMN `categoryId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `categoryName` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`categoryId`);

-- AlterTable
ALTER TABLE `FlashDeal` DROP PRIMARY KEY,
    DROP COLUMN `deal_id`,
    DROP COLUMN `deal_name`,
    DROP COLUMN `deal_price`,
    DROP COLUMN `end_date`,
    DROP COLUMN `product_id`,
    DROP COLUMN `start_date`,
    ADD COLUMN `dealId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `dealName` VARCHAR(191) NOT NULL,
    ADD COLUMN `dealPrice` DOUBLE NOT NULL,
    ADD COLUMN `endDate` DATETIME(3) NOT NULL,
    ADD COLUMN `productId` INTEGER NOT NULL,
    ADD COLUMN `startDate` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`dealId`);

-- AlterTable
ALTER TABLE `Product` DROP PRIMARY KEY,
    DROP COLUMN `category_id`,
    DROP COLUMN `product_id`,
    DROP COLUMN `product_name`,
    ADD COLUMN `categoryId` INTEGER NOT NULL,
    ADD COLUMN `productId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `productName` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`productId`);

-- AlterTable
ALTER TABLE `TopCategory` DROP PRIMARY KEY,
    DROP COLUMN `category_id`,
    ADD COLUMN `categoryId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`categoryId`);

-- AlterTable
ALTER TABLE `TopRating` DROP PRIMARY KEY,
    DROP COLUMN `product_id`,
    ADD COLUMN `productId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`productId`);

-- CreateIndex
CREATE UNIQUE INDEX `FlashDeal_productId_key` ON `FlashDeal`(`productId`);

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`categoryId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FlashDeal` ADD CONSTRAINT `FlashDeal_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`productId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TopCategory` ADD CONSTRAINT `TopCategory_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`categoryId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TopRating` ADD CONSTRAINT `TopRating_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`productId`) ON DELETE RESTRICT ON UPDATE CASCADE;

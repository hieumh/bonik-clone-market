/*
  Warnings:

  - You are about to drop the `IBrand` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_brandId_fkey`;

-- DropTable
DROP TABLE `IBrand`;

-- CreateTable
CREATE TABLE `Brand` (
    `brandId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`brandId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `Brand`(`brandId`) ON DELETE RESTRICT ON UPDATE CASCADE;

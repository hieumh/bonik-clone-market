/*
  Warnings:

  - You are about to drop the `ICartProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ICartProduct` DROP FOREIGN KEY `ICartProduct_cartId_fkey`;

-- DropForeignKey
ALTER TABLE `ICartProduct` DROP FOREIGN KEY `ICartProduct_productId_fkey`;

-- DropTable
DROP TABLE `ICartProduct`;

-- CreateTable
CREATE TABLE `CartProduct` (
    `cartProductId` INTEGER NOT NULL AUTO_INCREMENT,
    `cartId` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`cartProductId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CartProduct` ADD CONSTRAINT `CartProduct_cartId_fkey` FOREIGN KEY (`cartId`) REFERENCES `ShoppingCart`(`cartId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartProduct` ADD CONSTRAINT `CartProduct_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`productId`) ON DELETE RESTRICT ON UPDATE CASCADE;

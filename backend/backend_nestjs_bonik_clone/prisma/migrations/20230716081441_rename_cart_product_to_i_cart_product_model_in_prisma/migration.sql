/*
  Warnings:

  - You are about to drop the `CartProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `CartProduct` DROP FOREIGN KEY `CartProduct_cartId_fkey`;

-- DropForeignKey
ALTER TABLE `CartProduct` DROP FOREIGN KEY `CartProduct_productId_fkey`;

-- DropTable
DROP TABLE `CartProduct`;

-- CreateTable
CREATE TABLE `ICartProduct` (
    `cartProductId` INTEGER NOT NULL,
    `cartId` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,

    PRIMARY KEY (`cartId`, `productId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ICartProduct` ADD CONSTRAINT `ICartProduct_cartId_fkey` FOREIGN KEY (`cartId`) REFERENCES `ShoppingCart`(`cartId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ICartProduct` ADD CONSTRAINT `ICartProduct_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`productId`) ON DELETE RESTRICT ON UPDATE CASCADE;

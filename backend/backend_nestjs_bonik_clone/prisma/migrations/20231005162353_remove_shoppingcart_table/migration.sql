/*
  Warnings:

  - You are about to drop the `ShoppingCart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `CartProduct` DROP FOREIGN KEY `CartProduct_cartId_fkey`;

-- DropTable
DROP TABLE `ShoppingCart`;

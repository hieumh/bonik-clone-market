/*
  Warnings:

  - You are about to drop the column `cartId` on the `CartProduct` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `CartProduct_cartId_fkey` ON `CartProduct`;

-- AlterTable
ALTER TABLE `CartProduct` DROP COLUMN `cartId`;

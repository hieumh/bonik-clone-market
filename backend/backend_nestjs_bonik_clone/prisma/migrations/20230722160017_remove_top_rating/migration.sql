/*
  Warnings:

  - You are about to drop the `TopRating` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `TopRating` DROP FOREIGN KEY `TopRating_productId_fkey`;

-- AlterTable
ALTER TABLE `Product` MODIFY `rating` INTEGER NOT NULL;

-- DropTable
DROP TABLE `TopRating`;

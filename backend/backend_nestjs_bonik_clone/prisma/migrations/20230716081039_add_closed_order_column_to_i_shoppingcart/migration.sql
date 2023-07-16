/*
  Warnings:

  - Added the required column `closedOrder` to the `ShoppingCart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ShoppingCart` ADD COLUMN `closedOrder` BOOLEAN NOT NULL;

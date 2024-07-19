/*
  Warnings:

  - You are about to drop the column `destination` on the `Package` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Package` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Package` table. All the data in the column will be lost.
  - You are about to drop the column `total_freight` on the `Package` table. All the data in the column will be lost.
  - Added the required column `current_location` to the `Package` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Package" DROP COLUMN "destination",
DROP COLUMN "location",
DROP COLUMN "status",
DROP COLUMN "total_freight",
ADD COLUMN     "current_location" TEXT NOT NULL,
ADD COLUMN     "total_cost" TEXT;

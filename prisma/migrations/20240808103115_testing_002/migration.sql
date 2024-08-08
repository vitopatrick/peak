/*
  Warnings:

  - Changed the type of `posting_date` on the `Package` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `pickup_date` on the `Package` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Package" DROP COLUMN "posting_date",
ADD COLUMN     "posting_date" TIMESTAMP(3) NOT NULL,
DROP COLUMN "pickup_date",
ADD COLUMN     "pickup_date" TIMESTAMP(3) NOT NULL;

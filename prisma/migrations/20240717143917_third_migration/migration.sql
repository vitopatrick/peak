-- AlterTable
ALTER TABLE "Package" ALTER COLUMN "tracking_number" DROP NOT NULL,
ALTER COLUMN "invoice_no" DROP NOT NULL,
ALTER COLUMN "book_status" DROP NOT NULL;

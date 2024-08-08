-- CreateTable
CREATE TABLE "Package" (
    "id" SERIAL NOT NULL,
    "sender_name" TEXT NOT NULL,
    "sender_phone" TEXT NOT NULL,
    "sender_address" TEXT NOT NULL,
    "receiver_name" TEXT NOT NULL,
    "receiver_phone" TEXT NOT NULL,
    "receiver_address" TEXT NOT NULL,
    "tracking_number" TEXT,
    "posting_date" TEXT NOT NULL,
    "description" TEXT,
    "weight" TEXT NOT NULL,
    "invoice_no" TEXT,
    "book_status" TEXT,
    "total_cost" TEXT,
    "pickup_date" TEXT NOT NULL,
    "lat" DOUBLE PRECISION DEFAULT 46.4702,
    "long" DOUBLE PRECISION DEFAULT 30.7306,
    "current_location" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Package_pkey" PRIMARY KEY ("id")
);

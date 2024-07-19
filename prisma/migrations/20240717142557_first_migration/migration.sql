-- CreateTable
CREATE TABLE "Package" (
    "id" SERIAL NOT NULL,
    "sender_name" TEXT NOT NULL,
    "sender_phone" TEXT NOT NULL,
    "sender_address" TEXT NOT NULL,
    "receiver_name" TEXT NOT NULL,
    "receiver_phone" TEXT NOT NULL,
    "receiver_address" TEXT NOT NULL,
    "tracking_number" TEXT NOT NULL,
    "posting_date" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "invoice_no" TEXT NOT NULL,
    "book_status" TEXT NOT NULL,
    "total_freight" TEXT,
    "mode" TEXT,
    "pickup_date" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "lat" TEXT NOT NULL,
    "long" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Package_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Beer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "abv" DOUBLE PRECISION NOT NULL,
    "brewery" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Beer_pkey" PRIMARY KEY ("id")
);

/*
  Warnings:

  - You are about to drop the `Beer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Beer";

-- CreateTable
CREATE TABLE "beers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "abv" DOUBLE PRECISION NOT NULL,
    "brewery" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "beers_pkey" PRIMARY KEY ("id")
);

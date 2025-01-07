/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `TravelPhotosDomestic` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `TravelPhotosOverseas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TravelPhotosDomestic" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "TravelPhotosOverseas" DROP COLUMN "updatedAt";

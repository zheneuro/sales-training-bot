/*
  Warnings:

  - A unique constraint covering the columns `[projectId,code]` on the table `Lesson` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[projectId,order]` on the table `Lesson` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[projectId,telegramId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LessonBlockType" AS ENUM ('text', 'image', 'audio', 'video', 'file');

-- DropIndex
DROP INDEX "User_telegramId_key";

-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "projectId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "projectId" TEXT;

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LessonBlock" (
    "id" TEXT NOT NULL,
    "lessonId" TEXT NOT NULL,
    "type" "LessonBlockType" NOT NULL,
    "order" INTEGER NOT NULL,
    "textContent" TEXT,
    "mediaUrl" TEXT,
    "telegramFileId" TEXT,
    "mimeType" TEXT,
    "caption" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LessonBlock_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_code_key" ON "Project"("code");

-- CreateIndex
CREATE INDEX "LessonBlock_lessonId_idx" ON "LessonBlock"("lessonId");

-- CreateIndex
CREATE UNIQUE INDEX "LessonBlock_lessonId_order_key" ON "LessonBlock"("lessonId", "order");

-- CreateIndex
CREATE INDEX "Lesson_projectId_idx" ON "Lesson"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "Lesson_projectId_code_key" ON "Lesson"("projectId", "code");

-- CreateIndex
CREATE UNIQUE INDEX "Lesson_projectId_order_key" ON "Lesson"("projectId", "order");

-- CreateIndex
CREATE INDEX "User_projectId_idx" ON "User"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "User_projectId_telegramId_key" ON "User"("projectId", "telegramId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LessonBlock" ADD CONSTRAINT "LessonBlock_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;

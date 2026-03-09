-- CreateTable
CREATE TABLE "HealthcheckLog" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HealthcheckLog_pkey" PRIMARY KEY ("id")
);

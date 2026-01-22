-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('PENDING', 'REVIEWING', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "CreditApplication" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "identificationType" TEXT NOT NULL DEFAULT 'CC',
    "cedula" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3),
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT,
    "department" TEXT,
    "city" TEXT,
    "company" TEXT,
    "purpose" TEXT,
    "employmentType" TEXT,
    "monthlyIncome" DECIMAL(65,30),
    "amount" DECIMAL(65,30) NOT NULL,
    "term" INTEGER NOT NULL,
    "digitalService" BOOLEAN NOT NULL DEFAULT false,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'PENDING',
    "notes" TEXT,

    CONSTRAINT "CreditApplication_pkey" PRIMARY KEY ("id")
);

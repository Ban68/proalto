-- Add documents column to match existing DB state
ALTER TABLE "CreditApplication" ADD COLUMN "documents" JSONB;

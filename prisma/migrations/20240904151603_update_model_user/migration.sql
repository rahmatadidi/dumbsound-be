-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_transactionsId_fkey";

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "transactionsId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_transactionsId_fkey" FOREIGN KEY ("transactionsId") REFERENCES "transactions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

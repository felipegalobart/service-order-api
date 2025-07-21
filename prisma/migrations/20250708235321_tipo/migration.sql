/*
  Warnings:

  - The `tipo` column on the `Pessoa` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Pessoa" DROP COLUMN "tipo",
ADD COLUMN     "tipo" TEXT;

-- DropEnum
DROP TYPE "TipoPessoa";

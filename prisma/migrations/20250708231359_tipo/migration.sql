/*
  Warnings:

  - The values [CLIENTE,FORNECEDOR] on the enum `TipoPessoa` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TipoPessoa_new" AS ENUM ('cliente', 'fornecedor');
ALTER TABLE "Pessoa" ALTER COLUMN "tipo" DROP DEFAULT;
ALTER TABLE "Pessoa" ALTER COLUMN "tipo" TYPE "TipoPessoa_new" USING ("tipo"::text::"TipoPessoa_new");
ALTER TYPE "TipoPessoa" RENAME TO "TipoPessoa_old";
ALTER TYPE "TipoPessoa_new" RENAME TO "TipoPessoa";
DROP TYPE "TipoPessoa_old";
COMMIT;

-- AlterTable
ALTER TABLE "Pessoa" ALTER COLUMN "tipo" DROP DEFAULT;

/*
  Warnings:

  - Made the column `pessoaId` on table `ContatoPessoa` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ContatoPessoa" DROP CONSTRAINT "ContatoPessoa_pessoaId_fkey";

-- AlterTable
ALTER TABLE "ContatoPessoa" ALTER COLUMN "pessoaId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "ContatoPessoa" ADD CONSTRAINT "ContatoPessoa_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

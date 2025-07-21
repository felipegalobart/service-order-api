/*
  Warnings:

  - The `tipo` column on the `Pessoa` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "TipoPessoa" AS ENUM ('cliente', 'fornecedor');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'tecnico', 'atendente');

-- AlterTable
ALTER TABLE "Pessoa" DROP COLUMN "tipo",
ADD COLUMN     "tipo" "TipoPessoa" NOT NULL DEFAULT 'cliente';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'admin';

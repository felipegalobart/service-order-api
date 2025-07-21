-- CreateEnum
CREATE TYPE "TipoPessoa" AS ENUM ('CLIENTE', 'FORNECEDOR');

-- CreateTable
CREATE TABLE "ContatoPessoa" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "whatsapp" BOOLEAN NOT NULL,
    "email" TEXT,
    "observacao" TEXT,
    "pessoaId" INTEGER,

    CONSTRAINT "ContatoPessoa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pessoa" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "razaoSocial" TEXT,
    "tipo" "TipoPessoa" NOT NULL DEFAULT 'CLIENTE',
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "cpf" TEXT,
    "cnpj" TEXT,
    "inscricaoEstadual" TEXT,
    "email" TEXT,
    "logradouro" TEXT,
    "numero" TEXT,
    "bairro" TEXT,
    "cidade" TEXT,
    "estado" TEXT,
    "cep" TEXT,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ContatoPessoa" ADD CONSTRAINT "ContatoPessoa_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "AssetType" AS ENUM ('TOKEN', 'NFT', 'OTHER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "password" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "isTwoFactorEnabled" BOOLEAN NOT NULL DEFAULT false,
    "handle" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinkPage" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "image" TEXT,
    "userId" TEXT NOT NULL,
    "template" JSONB,
    "isComplete" BOOLEAN NOT NULL DEFAULT false,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "isTemplate" BOOLEAN NOT NULL DEFAULT false,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isEditing" BOOLEAN NOT NULL DEFAULT false,
    "profile" JSONB,

    CONSTRAINT "LinkPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "profile" JSONB,
    "achievement" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wallet" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "ecosystem" TEXT NOT NULL,
    "chain" TEXT NOT NULL,
    "network" TEXT NOT NULL,
    "walletProvider" TEXT NOT NULL,
    "walletAddress" TEXT NOT NULL,
    "nonce" TEXT,
    "signMessage" TEXT,
    "signature" TEXT,
    "scope" TEXT,
    "expires_at" INTEGER,
    "profile" JSONB,
    "achievement" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PasswordResetToken" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PasswordResetToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoginToken" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LoginToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwoFactorToken" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TwoFactorToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwoFactorConfirmation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "TwoFactorConfirmation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Web3Asset" (
    "id" TEXT NOT NULL,
    "type" "AssetType" NOT NULL DEFAULT 'NFT',
    "chain" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "walletAddress" TEXT NOT NULL,
    "contractAddress" TEXT,
    "tokenId" TEXT,
    "name" TEXT NOT NULL,
    "symbol" TEXT,
    "amount" DOUBLE PRECISION,
    "decimals" INTEGER,
    "metadata" JSONB,
    "imageUrl" TEXT,
    "externalUrl" TEXT,
    "ownerOf" TEXT NOT NULL,
    "lastUpdated" TIMESTAMP(3) NOT NULL,
    "blockNumber" TEXT,
    "verified" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Web3Asset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Web3CryptoAsset" (
    "id" TEXT NOT NULL,
    "type" "AssetType" NOT NULL DEFAULT 'TOKEN',
    "walletAddress" TEXT NOT NULL,
    "contractAddress" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT,
    "decimals" INTEGER NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "balanceFormatted" TEXT,
    "usdPrice" DOUBLE PRECISION,
    "usdValue" DOUBLE PRECISION,
    "usdPrice24hrPercentChange" DOUBLE PRECISION,
    "usdValue24hrUsdChange" DOUBLE PRECISION,
    "possibleSpam" BOOLEAN,
    "verifiedContract" BOOLEAN NOT NULL,
    "nativeToken" BOOLEAN,
    "holders" INTEGER,
    "chainId" TEXT NOT NULL,
    "blockchain" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "network" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Web3CryptoAsset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LinkPageWeb3Assets" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_LinkPageWeb3CryptoAssets" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AccountWeb3Assets" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AccountWeb3CryptoAssets" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_handle_key" ON "User"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "LinkPage_url_key" ON "LinkPage"("url");

-- CreateIndex
CREATE INDEX "LinkPage_userId_idx" ON "LinkPage"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_walletAddress_key" ON "Wallet"("walletAddress");

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_ecosystem_chain_walletAddress_key" ON "Wallet"("ecosystem", "chain", "walletAddress");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_email_token_key" ON "VerificationToken"("email", "token");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordResetToken_token_key" ON "PasswordResetToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordResetToken_email_token_key" ON "PasswordResetToken"("email", "token");

-- CreateIndex
CREATE UNIQUE INDEX "LoginToken_token_key" ON "LoginToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "LoginToken_email_token_key" ON "LoginToken"("email", "token");

-- CreateIndex
CREATE UNIQUE INDEX "TwoFactorToken_token_key" ON "TwoFactorToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "TwoFactorToken_email_token_key" ON "TwoFactorToken"("email", "token");

-- CreateIndex
CREATE UNIQUE INDEX "TwoFactorConfirmation_userId_key" ON "TwoFactorConfirmation"("userId");

-- CreateIndex
CREATE INDEX "Web3Asset_walletAddress_idx" ON "Web3Asset"("walletAddress");

-- CreateIndex
CREATE INDEX "Web3CryptoAsset_walletAddress_idx" ON "Web3CryptoAsset"("walletAddress");

-- CreateIndex
CREATE UNIQUE INDEX "_LinkPageWeb3Assets_AB_unique" ON "_LinkPageWeb3Assets"("A", "B");

-- CreateIndex
CREATE INDEX "_LinkPageWeb3Assets_B_index" ON "_LinkPageWeb3Assets"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LinkPageWeb3CryptoAssets_AB_unique" ON "_LinkPageWeb3CryptoAssets"("A", "B");

-- CreateIndex
CREATE INDEX "_LinkPageWeb3CryptoAssets_B_index" ON "_LinkPageWeb3CryptoAssets"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AccountWeb3Assets_AB_unique" ON "_AccountWeb3Assets"("A", "B");

-- CreateIndex
CREATE INDEX "_AccountWeb3Assets_B_index" ON "_AccountWeb3Assets"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AccountWeb3CryptoAssets_AB_unique" ON "_AccountWeb3CryptoAssets"("A", "B");

-- CreateIndex
CREATE INDEX "_AccountWeb3CryptoAssets_B_index" ON "_AccountWeb3CryptoAssets"("B");

-- AddForeignKey
ALTER TABLE "LinkPage" ADD CONSTRAINT "LinkPage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwoFactorConfirmation" ADD CONSTRAINT "TwoFactorConfirmation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkPageWeb3Assets" ADD CONSTRAINT "_LinkPageWeb3Assets_A_fkey" FOREIGN KEY ("A") REFERENCES "LinkPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkPageWeb3Assets" ADD CONSTRAINT "_LinkPageWeb3Assets_B_fkey" FOREIGN KEY ("B") REFERENCES "Web3Asset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkPageWeb3CryptoAssets" ADD CONSTRAINT "_LinkPageWeb3CryptoAssets_A_fkey" FOREIGN KEY ("A") REFERENCES "LinkPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkPageWeb3CryptoAssets" ADD CONSTRAINT "_LinkPageWeb3CryptoAssets_B_fkey" FOREIGN KEY ("B") REFERENCES "Web3CryptoAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccountWeb3Assets" ADD CONSTRAINT "_AccountWeb3Assets_A_fkey" FOREIGN KEY ("A") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccountWeb3Assets" ADD CONSTRAINT "_AccountWeb3Assets_B_fkey" FOREIGN KEY ("B") REFERENCES "Web3Asset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccountWeb3CryptoAssets" ADD CONSTRAINT "_AccountWeb3CryptoAssets_A_fkey" FOREIGN KEY ("A") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccountWeb3CryptoAssets" ADD CONSTRAINT "_AccountWeb3CryptoAssets_B_fkey" FOREIGN KEY ("B") REFERENCES "Web3CryptoAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

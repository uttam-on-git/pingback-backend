-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrackedEmail" (
    "id" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "recipient" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "TrackedEmail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailOpen" (
    "id" TEXT NOT NULL,
    "userAgent" TEXT,
    "ipAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "emailId" TEXT NOT NULL,

    CONSTRAINT "EmailOpen_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "TrackedEmail" ADD CONSTRAINT "TrackedEmail_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailOpen" ADD CONSTRAINT "EmailOpen_emailId_fkey" FOREIGN KEY ("emailId") REFERENCES "TrackedEmail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

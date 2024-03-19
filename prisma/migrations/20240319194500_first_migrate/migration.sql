-- CreateTable
CREATE TABLE "Img" (
    "id" SERIAL NOT NULL,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Img_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medicine" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT COLLATE NOCASE NOT NULL,
    "type" TEXT NOT NULL,
    "dosage" TEXT NOT NULL,
    "volume" TEXT NOT NULL
);

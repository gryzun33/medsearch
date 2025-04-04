-- CreateTable
CREATE TABLE "Stock" (
    "pharmacyId" TEXT NOT NULL,
    "medicineId" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,

    PRIMARY KEY ("pharmacyId", "medicineId"),
    CONSTRAINT "Stock_pharmacyId_fkey" FOREIGN KEY ("pharmacyId") REFERENCES "Pharmacy" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Stock_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "Medicine" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

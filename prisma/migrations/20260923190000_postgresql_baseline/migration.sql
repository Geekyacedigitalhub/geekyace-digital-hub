-- Create the complete PostgreSQL schema represented by prisma/schema.prisma.

CREATE TABLE "TeamMember" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "location" TEXT,
    "availability" TEXT NOT NULL DEFAULT 'Available',
    "skills" TEXT NOT NULL,
    "expertise" TEXT NOT NULL,
    "platforms" TEXT NOT NULL,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "TeamMember_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "TeamMember_createdAt_idx" ON "TeamMember"("createdAt");

CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "businessName" TEXT,
    "businessType" TEXT,
    "projectType" TEXT,
    "mainGoal" TEXT,
    "features" TEXT,
    "targetUsers" TEXT,
    "timeline" TEXT,
    "budget" TEXT,
    "recommendedService" TEXT,
    "conversationSummary" TEXT,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "aiInteractionId" TEXT,
    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Lead_aiInteractionId_key" ON "Lead"("aiInteractionId");
CREATE INDEX "Lead_createdAt_idx" ON "Lead"("createdAt");
CREATE INDEX "Lead_status_createdAt_idx" ON "Lead"("status", "createdAt");

CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "phone" TEXT,
    "passwordHash" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PLANNING',
    "progress" INTEGER NOT NULL DEFAULT 0,
    "startDate" TIMESTAMP(3),
    "dueDate" TIMESTAMP(3),
    "budget" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clientId" TEXT NOT NULL,
    CONSTRAINT "Project_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "Project_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "ProjectMilestone" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "dueDate" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "ProjectMilestone_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "ProjectMilestone_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "ProjectUpdate" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "ProjectUpdate_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "ProjectUpdate_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

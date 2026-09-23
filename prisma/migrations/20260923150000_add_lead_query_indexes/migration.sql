-- Add indexes used by the admin lead listing.
CREATE INDEX "Lead_createdAt_idx" ON "Lead"("createdAt");
CREATE INDEX "Lead_status_createdAt_idx" ON "Lead"("status", "createdAt");

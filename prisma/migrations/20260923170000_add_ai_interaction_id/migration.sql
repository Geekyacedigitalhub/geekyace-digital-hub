-- Prevent duplicate AI lead capture by tying a lead to the stored Gemini interaction.
ALTER TABLE "Lead" ADD COLUMN "aiInteractionId" TEXT;
CREATE UNIQUE INDEX "Lead_aiInteractionId_key" ON "Lead"("aiInteractionId");
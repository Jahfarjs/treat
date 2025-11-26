import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactFormSchema } from "@shared/schema";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      await sendContactEmail(validatedData);
      
      res.json({
        success: true,
        message: "Contact form submitted successfully",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error,
        });
      }
      
      res.status(500).json({
        success: false,
        message: "Failed to send message. Please try again.",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

// server/index-prod.ts
import fs from "node:fs";
import path from "node:path";
import express2 from "express";

// server/app.ts
import express from "express";

// server/routes.ts
import { createServer } from "http";

// shared/schema.ts
import { z } from "zod";
var contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  eventType: z.enum(["Wedding", "Corporate", "Birthday", "Cultural", "Other"], {
    required_error: "Please select an event type"
  }),
  eventDate: z.string().optional(),
  guestCount: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your event")
});

// server/email.ts
import nodemailer from "nodemailer";
async function sendContactEmail(data) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER || "treatcater@gmail.com",
      pass: process.env.EMAIL_PASSWORD
    }
  });
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #c2621e; margin-bottom: 20px; font-family: Georgia, serif;">New Contact Form Submission</h2>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #333;">Name:</strong>
          <p style="margin: 5px 0; color: #666;">${data.name}</p>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #333;">Email:</strong>
          <p style="margin: 5px 0; color: #666;">${data.email}</p>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #333;">Phone:</strong>
          <p style="margin: 5px 0; color: #666;">${data.phone}</p>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #333;">Event Type:</strong>
          <p style="margin: 5px 0; color: #666;">${data.eventType}</p>
        </div>
        
        ${data.eventDate ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Event Date:</strong>
            <p style="margin: 5px 0; color: #666;">${data.eventDate}</p>
          </div>
        ` : ""}
        
        ${data.guestCount ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Guest Count:</strong>
            <p style="margin: 5px 0; color: #666;">${data.guestCount}</p>
          </div>
        ` : ""}
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #333;">Message:</strong>
          <p style="margin: 5px 0; color: #666; line-height: 1.6;">${data.message}</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        
        <p style="color: #999; font-size: 12px; margin-top: 20px;">
          This email was sent from the Treat Caters & Events website contact form.
        </p>
      </div>
    </div>
  `;
  const mailOptions = {
    from: `"Treat Caters Website" <${process.env.EMAIL_USER || "treatcater@gmail.com"}>`,
    to: "treatcater@gmail.com",
    replyTo: data.email,
    subject: `New ${data.eventType} Event Inquiry from ${data.name}`,
    html: htmlContent,
    text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Event Type: ${data.eventType}
${data.eventDate ? `Event Date: ${data.eventDate}` : ""}
${data.guestCount ? `Guest Count: ${data.guestCount}` : ""}

Message:
${data.message}
    `.trim()
  };
  await transporter.sendMail(mailOptions);
}

// server/routes.ts
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      await sendContactEmail(validatedData);
      res.json({
        success: true,
        message: "Contact form submitted successfully"
      });
    } catch (error) {
      console.error("Contact form error:", error);
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error
        });
      }
      res.status(500).json({
        success: false,
        message: "Failed to send message. Please try again."
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/app.ts
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
var app = express();
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path2 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path2.startsWith("/api")) {
      let logLine = `${req.method} ${path2} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
async function runApp(setup) {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  await setup(app, server);
  const port = parseInt(process.env.PORT || "4001", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
}

// server/index-prod.ts
async function serveStatic(app2, _server) {
  const distPath = path.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express2.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
(async () => {
  await runApp(serveStatic);
})();
export {
  serveStatic
};

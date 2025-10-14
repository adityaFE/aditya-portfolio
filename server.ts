import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import youtubeRouter from "./routes/youtube.js";

dotenv.config();

const app = express();

const allowedOrigins = [
   'http://localhost:3000',
  'https://portfolio-adityafe.netlify.app'
].filter(Boolean);

const corsOptions = {
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn('Origin not allowed by CORS:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/youtube", youtubeRouter);

app.get("/test", (req, res) => {
  console.log("Test route called");
  res.json({ message: "Server works!" });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`✅ YouTube proxy running on port ${PORT}`));
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import youtubeRouter from "./routes/youtube.js";

dotenv.config();

const app = express();

const corsOptions = {
  origin: '*', 
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/youtube", youtubeRouter);

app.get("/test", (req, res) => {
  console.log("Test route called");
  res.json({ message: "Server works!" });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`✅ YouTube proxy running on port ${PORT}`));
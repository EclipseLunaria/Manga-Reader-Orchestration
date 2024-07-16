import express from "express";

import { seriesRouter } from "./routes/seriesInfoRoutes";
import { healthRouter } from "./routes/healthRouter";

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // or specify allowed origins
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
// route for fetcing series info
app.use("/series", seriesRouter);

// route for fetching health status of microservices
app.use("/health", healthRouter);

// basic operation to check if the gateway is working
app.get("/", (req, res) => {
  res.send("api gateway is working");
});

export default app;

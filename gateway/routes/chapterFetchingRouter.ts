import { Router } from "express";
import { chapterFetchController } from "../controllers/chapterFetchController";

const chapterFetchRouter = Router();

chapterFetchRouter.get("/", (req, res) => {
  res.send("Hello Chapter Fetch Router!");
});

chapterFetchRouter.get(
  "/manga/:mangaId/chapter/:chapterId",
  chapterFetchController
);

export default chapterFetchRouter;

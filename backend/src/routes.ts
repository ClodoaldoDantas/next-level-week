import express from "express";
import ProductController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

import multer from "multer";
import multerConfig from "./config/multer";
const upload = multer(multerConfig);

const routes = express.Router();
const pointsController = new ProductController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index);

routes.post("/points", upload.single("image"), pointsController.create);
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

export default routes;

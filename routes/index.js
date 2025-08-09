import express from 'express';
import mainController from '../controllers/mainController.js';

const router = express.Router();

router.get("/", mainController.home);
router.get("/about", mainController.about);
router.get("/contact", mainController.contact);
router.get("/sweatshirt", mainController.bestseller);
router.get("/sneaker", mainController.bestseller);
router.get("/hoodies", mainController.bestseller);
router.get("/jean", mainController.bestseller);
router.get("/bestseller", mainController.bestseller);
router.get("/tshirt", mainController.bestseller);
router.get("/product", mainController.product);

export default router;
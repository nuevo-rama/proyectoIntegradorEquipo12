const express = require("express");
const productsController = require("../controllers/productController");
const productImageUpload = require("../middlewares/productImageMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const router = express.Router();
const productFormValidation = require("../middlewares/productFormMiddleware");

 router.get("/", productsController.list);
 
router.get("/category/shirts", productsController.listCategoryShirts); //REMERAS

router.get("/category/hoodies", productsController.listCategoryHoodies); //BUZOS

router.get("/category/accesories", productsController.listCategoryAccesories); //ACCESORIOS

//router.get("/category/news", productsController.listCategoryNews); //ULTIMOS LANZAMIENTOS

router.get("/reactCustomize", productsController.reactCustomize);

router.get("/customerService", productsController.customerService); //ATENCIÓN AL CLIENTE

router.get("/questions", productsController.questions); //PREGUNTAS FRECUENTES

router.get("/returns", productsController.returns); //RECLAMOS Y DEVOLUCIONES

router.get("/eShipping", productsController.eShipping); //ENVÍOS Y ENTREGAS

router.get("/pymMethod", productsController.pymMethod); //FORMAS DE PAGO

router.get("/search", productsController.search);

router.get("/cart", productsController.shoppingCart);

router.get("/create",  adminMiddleware,  productsController.create);

router.post("/create", productImageUpload.any("image_url"), productFormValidation, productsController.storage);

router.get("/:id", productsController.detail);

router.get("/edit/:id",  adminMiddleware,  productsController.edit);

router.put("/edit/:id", productFormValidation, productsController.update);

router.delete("/:id", productsController.destroy);

router.get("/error404", productsController.error404);


module.exports = router;
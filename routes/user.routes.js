const { Router } = require("express");
const { home, signup, login, index, product } = require("../controller/user.controller");

const router = Router();

router.get("/", home);

router.post("/signup", signup);

router.post("/login", login);

router.get("/index", index);

router.get("/product", product)

module.exports={router}
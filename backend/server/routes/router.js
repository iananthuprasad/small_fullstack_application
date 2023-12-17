const express = require("express");
const router = express.Router();
const render=require('../services/render')
const controller=require('../controller/control')

// // Define your routes here
// router.get("/", render.homeRoutes);   //services folder use cheyth inganemm cheyyamm

// router.get("/add-user", (req, res) => {  //ingane nerittum cheyyamm
//   res.render("add_user");
// });

// router.get("/update-user", (req, res) => {
//   res.render("update_user");
// });


//api
router.post("/api/users",controller.create);   // ivide controller folder usecheythuu allandd router pole ivide thanne post req kodukkammm
router.get("/api/users", controller.find); 
router.put("/api/users/:id", controller.update); 
router.delete("/api/users/:id", controller.delete); 



module.exports = router;

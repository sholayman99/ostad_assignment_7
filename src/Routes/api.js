/**
 * Author: Md Sholayman
 * Date:11-9-2023
 * Description: This file is for the implementation of routes
 */

const express = require('express');
const { readBlog, createBlog, updateBlog, deleteBlog } = require('../Controllers/blogController');
const {readComment,createComment,updateComment,deleteComment} = require("../Controllers/commentController");
const { readMsg, createMsg, updateMsg, deleteMsg } = require('../Controllers/messageController');
const { readPortfolio, createPortfolio, updatePortfolio, deletePortfolio } = require('../Controllers/portfolioController');
const { readProduct, createProduct, updateProduct, deleteProduct } = require('../Controllers/productController');
const router = express.Router();

//blogController routes
router.get("/blog" , readBlog);
router.post("/blog" , createBlog);
router.put("/blog" , updateBlog);
router.delete("/blog" , deleteBlog);


//commentController routes
router.get("/comment" , readComment);
router.post("/comment" , createComment);
router.put("/comment" , updateComment);
router.delete("/comment" , deleteComment);

//messageController routes
router.get("/message" , readMsg);
router.post("/message" , createMsg);
router.put("/message" , updateMsg);
router.delete("/message" , deleteMsg);

//portfolioController routes

router.get("/portfolio" , readPortfolio);
router.post("/portfolio" , createPortfolio);
router.put("/portfolio" , updatePortfolio);
router.delete("/portfolio" , deletePortfolio);

//productController routes
router.get("/product" , readProduct);
router.post("/product" , createProduct);
router.put("/product" , updateProduct);
router.delete("/product" , deleteProduct);



module.exports = router ;

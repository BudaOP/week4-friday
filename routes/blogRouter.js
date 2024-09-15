const express = require("express");
const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogControllers"); // Ensure updateBlog is imported
const router = express.Router();

// GET /blogs - Get all blogs
router.get("/", getAllBlogs);

// POST /blogs - Create a new blog
router.post("/", createBlog);

// GET /blogs/:id - Get a blog by ID
router.get("/:id", getBlogById);

// PUT /blogs/:id - Update a blog by ID
router.put("/:id", updateBlog); // Ensure updateBlog is defined in the controller

// DELETE /blogs/:id - Delete a blog by ID
router.delete("/:id", deleteBlog);

module.exports = router;

import prisma from "../lib/prisma.js";

// Get all posts
export const getPosts = async (req, res) => {
  const query = req.query;
   // Log the query parameters
  
  try {
    const posts = await prisma.post.findMany({
      where:{
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.poperty || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || 0,
          lte : parseInt(query.maxPrice) || 10000000000,
        }
       }
    
    });

   // setTimeout(()=>{
    //console.log("Posts retrieved from the database:", posts);
    res.status(200).json(posts);
   // },3000);
  } catch (error) {
    console.error("Error retrieving posts:", error);
    res.status(500).json({ message: "Failed to get posts" });
  }
};


// Get a single post by ID
export const getPostById = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include:{
        postDetail: true,
        user: {
            select: {
                username:true,
                avatar: true
            }
        },
      },
    });
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get post" });
  }
};

// Add a new post
export const addPost = async (req, res) => {
  const body = req.body;
  console.log("body",body);
  const tokenUserId = req.userId;

  try {
    const newPost = await prisma.post.create({
      data: {
        ...body.postData,
        userId: tokenUserId,
        postDetail:{
            create: body.postDetail,
        }
      },
    });
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to add post" });
  }
};

// Update an existing post
export const updatePost = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const tokenUserId = req.userId;

  try {
    const post = await prisma.post.findUnique({ where: { id } });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.userId !== tokenUserId) {
      return res.status(403).json({ message: "Not Authorized!" });
    }

    const updatedPost = await prisma.post.update({
      where: { id },
      data: { ...body },
    });

    res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update post" });
  }
};

// Delete a post
export const deletePost = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  try {
    const post = await prisma.post.findUnique({ where: { id } });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.userId !== tokenUserId) {
      return res.status(403).json({ message: "Not Authorized!" });
    }

    await prisma.post.delete({ where: { id } });

    res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete post" });
  }
};

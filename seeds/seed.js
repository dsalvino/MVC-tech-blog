const sequelize = require('../config/connection');
const { Author, BlogPost, Comment } = require('../models');

const authorData = require('./authorData.json');
const blogPostData = require('./blogPostData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const authors = await Author.bulkCreate(authorData, {
    individualHooks: true,
    returning: true,
  });

  const blogPosts = await BlogPost.bulkCreate(blogPostData, {
    returning: true,
  });

  const comments = await Comment.bulkCreate(commentData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

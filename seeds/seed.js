const sequelize = require('../config/connection');
const { Author, BlogPost, Comment } = require('../models');

const authorData = require('./authorData.json');
const blogPostData = require('./blogPostData.json');
// const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const authors = await Author.bulkCreate(authorData, {
        individualHooks: true,
        returning: true,
    });

    for (const blog of blogPostData) {
        await BlogPost.create({
            ...blog,
            user_id: authors[Math.floor(Math.random() * authors.length)].id,
        });
    }

    process.exit(0);
};

seedDatabase();

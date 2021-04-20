const Author = require('./Author');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

Author.hasMany(BlogPost, {
  foreignKey: 'author_id',
  onDelete: 'CASCADE'
});

BlogPost.belongsTo(Author, {
  foreignKey: 'author_id'
});


BlogPost.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(BlogPost, {
    foreignKey: 'blog_id'
})


Author.hasMany(Comment, {
  foreignKey: 'author_id'
});

Comment.belongsTo(Author, {
  foreignKey: 'author_id'
});


module.exports = { Author, BlogPost, Comment };
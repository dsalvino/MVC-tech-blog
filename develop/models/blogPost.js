const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model {}

BlogPost.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      blog_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      blog_content: {
        type: DataTypes.STRING,
      },
      date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      author_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'author',
          key: 'id',
        },
      },
    },
    {
    sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'blogpost',
    }
  );
  
  module.exports = BlogPost;
require('dotenv').config();
const mongoose = require('mongoose');

module.exports = {
  create: async (collection, sql, option) => {
    try {
      await mongoose.connect(process.env.DB_HOST);

      const db = require(`./Schemas/${collection}`);
      const result = await db.create(sql, option);

      return result;
    } catch (err) {
      return err;
    } finally {
      await mongoose.disconnect();
    }
  },
  find: async (collection, sql, option) => {
    try {
      await mongoose.connect(process.env.DB_HOST);

      const db = require(`./Schemas/${collection}`);
      const result = await db.find(sql, option);

      return result;
    } catch (err) {
      return err;
    } finally {
      await mongoose.disconnect();
    }
  },
  findOne: async (collection, sql, option) => {
    try {
      await mongoose.connect(process.env.DB_HOST);

      const db = require(`./Schemas/${collection}`);
      const result = await db.findOne(sql, option);

      return result;
    } catch (err) {
      return err;
    } finally {
      await mongoose.disconnect();
    }
  },
  updateOne: async (collection, sql, option) => {
    try {
      await mongoose.connect(process.env.DB_HOST);

      const db = require(`./Schemas/${collection}`);
      const result = await db.updateOne(sql, option);

      return result;
    } catch (err) {
      return err;
    } finally {
      await mongoose.disconnect();
    }
  },
  deleteOne: async (collection, sql, option) => {
    try {
      await mongoose.connect(process.env.DB_HOST);

      const db = require(`./Schemas/${collection}`);
      const result = await db.deleteOne(sql, option);

      return result;
    } catch (err) {
      return err;
    } finally {
      await mongoose.disconnect();
    }
  },
  //Special
  createPostId: async (collection) => {
    try {
      await mongoose.connect(process.env.DB_HOST);

      const db = require(`./Schemas/${collection}`);
      const result = await db.findOne().sort({ postId: 'desc' }).exec();

      return result ? result.postId + 1 : 1;
    } catch (err) {
      return err;
    } finally {
      await mongoose.disconnect();
    }
  },
  createCommentId: async (collection) => {
    try {
      await mongoose.connect(process.env.DB_HOST);

      const db = require(`./Schemas/${collection}`);
      const result = await db.findOne().sort({ commentId: 'desc' }).exec();

      return result ? result.commentId + 1 : 1;
    } catch (err) {
      return err;
    } finally {
      await mongoose.disconnect();
    }
  },
};

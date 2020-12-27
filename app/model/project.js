'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    userName: {
      type: String,
      unique: true,
      required: true,
    },
    "_id" : {
        type: String,
        unique: true,
        required: true,
    },
    "title" : {
        type: String,
        unique: false,
        required: true,
    },
    "proId" : {
        type: String,
        unique: true,
        required: true,
    },
    "description" : {
        type: String,
        unique: false,
        required: true,
    },
    "stars" : {
        type: Number,
        unique: false,
        required: true,
    },
    "avatar" : {
        type: String,
        unique: false,
        required: true,
    },
    "typeId" : {
        type: String,
        unique: true,
        required: true,
    },
    "preViewSrc" : {
        type: String,
        unique: false,
        required: true,
    },
    "remarks" : {
        type: String,
        unique: false,
        required: true,
    },
    "steps" : {
        type: String,
        unique: false,
        required: true,
    },
    "functionFramework" : {
        type: String,
        unique: false,
        required: true,
    },
    "tecFramework" :{
        type: String,
        unique: false,
        required: true,
    }
  });
  return mongoose.model('projects', UserSchema);
};
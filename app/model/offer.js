'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const OfferSchema = new Schema({
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
    "offerId" : {
        type: String,
        unique: true,
        required: true,
    },
    "user": {
        type: String,
        unique: false,
        required: true,
    },
    "description" : {
        type: String,
        unique: false,
        required: true,
    },
    "avatar" : {
        type: String,
        unique: false,
        required: true,
    },
    "preViewSrc" : {
        type: String,
        unique: false,
        required: true,
    },
    "preview" :{
        type: String,
        unique: false,
        required: true,
    },
    "remarks" : {
        type: String,
        unique: false,
        required: true,
    },
    "updateTime": {
        type: Date,
        unique: false,
        required: true,
    },
    "createTime": {
        type: Date,
        unique: false,
        required: true,
    }
  });
  return mongoose.model('offers', OfferSchema);
};
/*jslint node: true */
/*jslin nomen: true */
'use strict';

var mongoose = require('mongoose');
var moment = require('moment');

var instagramPhotoSchema = mongoose.Schema({
    id: { type: String, required: true },
    attribution: { type: String, required: false },
    tags: { type: String, required: false },
    location: { type: String, required: false },
    filter: { type: String, required: true },
    created_time: { type: Date, required: true },
    link: { type: String, required: true },
    images: {
        low_resolution: { 
            url: { type: String },
            width: { type: Number },
            height: { type: Number }
        },
        thumbnail: { 
            url: { type: String },
            width: { type: Number },
            height: { type: Number }
        },
        standard_resolution: {
            url: { type: String },
            width: { type: Number },
            height: { type: Number }
        }
    },
    caption: {
        created_time: { type: Number },
        text: { type: String },
        from: {
            username: { type: String },
            profile_picture: { type: String },
            id: { type: String },
            full_name: { type: String }
        },
        id: { type: String }
    },
    user_has_liked: { type: String },
    user: {
        username: { type: String, required: true },
        website: { type: String },
        profile_picture: { type: String },
        full_name: { type: String },
        bio: { type: String },
        id: { type: String, required: true }
    }
});

instagramPhotoSchema.plugin(require('mongoose-paginate'));

var instagramPhoto = mongoose.model('InstagramPhoto', instagramPhotoSchema);

module.exports = instagramPhoto;
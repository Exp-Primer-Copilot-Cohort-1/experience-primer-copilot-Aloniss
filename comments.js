// Create web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var Post = require('../models/post');
var User = require('../models/user');
var mongoose = require('mongoose');
var config = require('../config/database');
var jwt = require('jsonwebtoken');
var passport = require('passport');

// Add comment
router.post('/addcomment', passport.authenticate('jwt', {session: false}), function(req, res, next){
  var token = getToken(req.headers);
  if(token){
    var newComment = new Comment({
      body: req.body.body,
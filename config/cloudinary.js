const cloudinary = require('cloudinary').v2

cloudinary.config({ 
    cloud_name: 'mid-cloud', 
    api_key: '321781769747178', 
    api_secret: 'cb44Y5qZo0KskjLHAUVUXan88Nw' 
  });

module.exports = cloudinary
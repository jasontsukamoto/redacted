module.exports = function(req, res, next) {

  if (req.method === 'GET') {
    next();
  } else {
    var comment = req.body.comment;
    var edited;
    var blacklistWords = {
      selfie : 'self-portrait',
      yummers : 'delicious',
      outchea : 'are out here',
      bruh : 'wow',
      doge : 'pug',
      cilantro : 'soap',
      bae : 'loved one',
      swag : 'style',
      yolo : 'carpe diem'
    };
    for (var key in blacklistWords) {
      var re = new RegExp(key, 'gi');
      comment = comment.replace(re, blacklistWords[key]);
    }
    res.send(comment);
  }
};


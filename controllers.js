var models = require('./models');


module.exports = {

  names: {
    get: function(req, res) {
      models.names.get(function(err, results){
        if (err) {
          console.log('controllers names get: ', err);
          throw err;
        }
        res.json(results);
      })
    },
    post: function(req, res) {
      var tempParam;
      req.on('data', function(data) {
        tempParam = JSON.parse(data.toString());
        console.log(tempParam);

      });
      var params = [tempParam.name];
      models.names.post(params, function(err, results) {
        if (err) {
          console.log('controllers names post: ', err);
          throw err;
        }
        console.log('posted');
      })
    }
  }
}
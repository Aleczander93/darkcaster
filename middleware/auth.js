
var mySecretPhrase = process.env.PASS || require('../config.js').secretPassphrase;


function authorize (request, response, next){
  var secretPassphrase = request.headers.secret;
  if(!secretPassphrase || secretPassphrase !== 'its a secret'){
    response.status(403).json({
      msg: 'You are not authorzed'
    });
    // response.send('ah uh ah you did not say the secret word'); <----
  } else {
  next();
  }

  // console.log(request.headers);
  // next();

}

module.exports = authorize;

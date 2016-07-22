var request = require('request');

function UserAuthentication(username, password) {

var token = null;

request({
    url: 'https://splitpay.citruspay.com/marketplace/auth',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    json: { access_key : username,
			secret_key : password
	}
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
		token = body.auth_token;
		// console.log(token);
		return token;
    }
});
}

UserAuthentication("skboro@gmail.com", "password123");

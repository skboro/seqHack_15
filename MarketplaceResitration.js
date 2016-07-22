var request = require('request');

function MarketplaceRegistration(username, password) {

request({
    url: 'https://splitpay.citruspay.com/marketplace/hackathonadmin/register',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    json: { useremail : username,
			password  : password
	}
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
    }
});
}

MarketplaceRegistration("skboro@gmail.com", "password123");

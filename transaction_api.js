var request = require('request');

function TransactionAPI(token, order_ref, datetime, amount, paymode, paysource, customer, note) {

trans_id = null;
request({
    url: 'https://splitpay.citruspay.com/marketplace/trans',
    method: 'POST',
    headers: {
		'auth_token'  : token,
        'Content-Type': 'application/json'
    },
    json: { merc_order_ref: order_ref,
			trans_datetime: datetime ,
			trans_amount: amount,
			trans_paymode: paymode,
			trans_pay_source: paysource,
			trans_customer: customer,
			trans_note: note
	}
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
		trans_id = body.trans_id;
		return trans_id;
    }
});
}

TransactionAPI("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3Nfa2V5Ijoic2tib3JvQGdtYWlsLmNvbSIsImV4cGlyZXMiOiIyMDE1LTA5LTAzVDA4OjQ4OjQ3Ljk2MFoiLCJjYW5fdHJhbnNhY3QiOjEsImFkbWluIjowfQ.y46ONkaRRcG8TXl9fawE6vKMMWpY-laW18iAXFfB7q4",
			   "ABC126",
			   "2015-06-28 17:09:34",
			   20000,
			   "Credit Card",
			   "CITRUS",
			   "test@test.com",
			   "Sale Transaction"
			   );

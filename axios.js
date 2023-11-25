const axios = require('axios');

exports.payment = (req, res, next) => {
   const { amount, id, currency } = req.body;

   //add headers
   const options = {
      headers: {'X-Custom-Header': 'value'}
   };

   //create body payload
   const body = {
      amount: amount,
      id: id,
      currency: currency
   };

   //send request to https://payment....com/api-key/transaction
   //axios.post('https://nodetest-husj.onrender.com/recieve', body, options)
   axios.post('http://localhost:1000/recieve', body, options)
      .then((response) => {
        //receive response
        console.log(response);
        res.status(200).json({ status: 'success' });

      })
      .catch((error) => {
        console.log(error)
      })
    };

  // Gino Test Test  

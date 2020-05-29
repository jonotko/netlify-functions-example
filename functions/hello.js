exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://confident-bassi-9d4bb8.netlify.app/'
    },
    body: JSON.stringify(event)
  });
};

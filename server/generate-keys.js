const webpush = require('web-push')

const keys = webpush.generateVAPIDKeys(); console.log(keys)

// console.log(webpush.generateVAPIDKeys());
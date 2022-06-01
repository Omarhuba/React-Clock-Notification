const {VAPID_PRIVATE_KEY, VAPID_PUBLIC_KEY, PORT} = require('../config/config')
const webpush = require('web-push')
const subscriptions = []


webpush.setVapidDetails(
    `https://localhost:${PORT}`,
    VAPID_PUBLIC_KEY,
    VAPID_PRIVATE_KEY
)


setInterval(  ()=>{
    subscriptions.forEach( sub => {
        webpush.sendNotification( sub, 'Welcom to the App', {TTL: 50000})
    })
}, 3000)

module.exports = {
    registerPushNotifications(app){
        app.get('/push/vapidPublicKey', (req,res)=>{
            res.send(VAPID_PUBLIC_KEY)
        })


        app.post('/push/register', (req,res)=>{
            const {subscriptions} = req.body
            console.log('saving subscriptions');
            if(!subscriptions.includes(subscriptions)){
                subscriptions.push(subscriptions)
            }
            res.send('You are now subscribed')
        })
    }
}
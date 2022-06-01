export function  register (){
    if('serviceWorker' in navigator && process.env.NODE_ENV ==='production'){
        navigator.serviceWorker.register('/service-worker.js')
        .then( ()=> console.log('Service Registered!'))
        .catch(err => console.log('Service Not Registered!', err))
    }
}
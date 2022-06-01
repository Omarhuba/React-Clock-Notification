import { useEffect } from "react"

const Push = () => {

  useEffect(() => {
    navigator.serviceWorker.ready.then(registration => {
      console.log(registration);
      registration.showNotification("Hello", {body:'Welcom to the App'}).then(console.log).catch(console.log)

    })
  },[])


  function subscribe(){
    Notification.requestPermission().then(async result => {
      if(result !== 'granted') return
      console.log("Fetching VAPID key")
      const request = await fetch('/push/vapidPublicKey')
      const vapidPublicKey = await request.text()
      console.log("Subscribing")
      const registration = await navigator.serviceWorker.ready
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: vapidPublicKey
      })
      console.log("Registering for push service")
      const response = await fetch('/push/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({subscription})
      })
      console.log("Response: ", await response.text())

      // Subscribe process
    })
  }

  return (
    <div>
      <button onClick={subscribe}>Subscribe</button>
    </div>
  )
}

export default Push
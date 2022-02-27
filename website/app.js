/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
//Api Key from https://openweathermap.org
const apiKey ='9d7d6430ca48abc6a048db72584d97be'

document.getElementById('generate').addEventListener('click', async()=>{
const zipCode =document.getElementById('zip').value
const content =document.getElementById('feelings').value
// Calling The Api
const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`)
const data =  await res.json();

const temprature =data.main.temp


//using http:localhost:3000/saveTemData post route to save the date in projectData
await fetch('/saveTemData',{
    method:'POST',
    credentials:'same-origin',
    headers:{
        'Content-Type':'application/json'
    
    },
    body:JSON.stringify({
        date:newDate,
        temp:temprature,
        content:content

    })
})
//get the data using http:localhost:3000/getTemData get route
const resOfWeather =await fetch('/getTemData',{
    credentials:'same-origin'
})
const dataWeather =await resOfWeather.json();
console.log(dataWeather)
// calling the function updateui
updateUi()

});
// updateUi using data returned from getTemData route
const updateUi =async()=>{
try{
const req =await fetch('/getTemData')
    
    const alData= await req.json();
    console.log(alData)
    
    document.getElementById('content').innerHTML=alData.content
    document.getElementById('temp').innerHTML=alData.temp
    document.getElementById('date').innerHTML=alData.date
}
    
catch(err){
   
console.log("error",err)

    }
 }

  



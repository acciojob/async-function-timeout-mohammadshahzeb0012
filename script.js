//your JS code here. If required.
const form = document.querySelector("form");
const btn = document.getElementById("btn")
const output = document.querySelector("#output")

btn.addEventListener("click",()=>{
  const text = document.getElementById("text").value;
  const delay = document.getElementById("delay").value

  const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(`${text} - ${delay}`)
    },delay)
  })
  
  const asyncHandler =  ( async ()=>{
    try{
      const result = await  promise1;
      output.innerText = result 
      return
    }
    catch(err){
      alert(err)
      return
    }
  })
   asyncHandler()

})


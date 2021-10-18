var show = document.getElementById("submit-btn")






let GetAPI = () =>{
    let filter = document.getElementById('user-select').value
console.log(filter)
if (filter === "-1"){
  alert('please make a selection')
}else{
  let request = `https://jsonmock.hackerrank.com/api/transactions?userId=${filter}`
  fetch(request)
  .then (function (response){
     return response.json();
  })
.then (function(data){
  console.log(data)
})
}}

show.addEventListener('click',GetAPI);

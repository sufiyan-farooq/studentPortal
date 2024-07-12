new DataTable('#example');

let firstname = document.getElementById('firstname')
let lastName = document.getElementById("lastname")
let email = document.getElementById("email")
let city = document.getElementById("city")
let number = document.getElementById("number")
let arr = JSON.parse(localStorage.getItem('user') )|| []
let id = 1

function submit(){

var user ={
   firstname : firstname.value,
   lastName:lastName.value,
   email:email.value,
   city:city.value,
   number:number.value,
   id: id
}







arr.push({userDetail: user})
localStorage.setItem("user", JSON.stringify(arr));

id++

showData()

}

function showData(){
   let tableData = JSON.parse(localStorage.getItem("user"));
   var t = $('#example').DataTable();

   for(var i = 0 ; i < tableData.length; i++) {
      t.row.add([
         tableData[i].userDetail.firstname ,
         tableData[i].userDetail.lastName ,
         tableData[i].userDetail.email ,
         tableData[i].userDetail.city ,
         tableData[i].userDetail.number,

         `<button onclick="viewUser( ${tableData[i].userDetail.id}, '${tableData[i].userDetail.firstname}')">View User</button>`
      
      ]).draw( false );

   }

} 



 

showData()






var nameInput = document.getElementById("name")
var urlInput = document.getElementById("url")



var allBookMark=[]


if(localStorage.getItem("all") != null){
allBookMark = JSON.parse(localStorage.getItem("all"))
displayData()
}
function addSite() {
  
  if(validName()== true && validUrl()== true){
    var bookMark ={
      name:nameInput.value,
      url:urlInput.value
  }

allBookMark.push(bookMark)
  localStorage.setItem("all" ,JSON.stringify(allBookMark))
 console.log(allBookMark);
 
 clearData()
 displayData()

  }
       
 
      
    }


    function clearData(){
        nameInput.value=" ";
       urlInput.value=" ";
    }



    function displayData(){
        var cartona = "";

        for( var i =0; i<allBookMark.length;i++){
          cartona += ` 
          <tr>
            <td>${i+1}</td>
            <td> ${allBookMark[i].name} </td>
            

            
            <td><button type="button" class="btn btn-outline-warning" ><a href="${allBookMark[i].url}"> <i class="fa-regular fa-eye"></i>Visit</a></button></td>
            <td><button onclick="deleteData(${i})"  type="button" class="btn btn-outline-danger"> <i class="fa-regular fa-trash-can "> Delete </button></td>
          </tr>
          
          `;
        }
        document.getElementById("mark").innerHTML=cartona;
    }
   
  

    function deleteData(index){
      allBookMark.splice(index , 1);
      localStorage.setItem("all",JSON.stringify(allBookMark))
      displayData()
    }

    function validName(){

      var regex = /^[A-Za-z]{3,9}$/;

    if(regex.test(nameInput.value) == true){

      document.getElementById("one").classList.replace("d-block" , "d-none");
      return true;

    }

    document.getElementById("one").classList.replace("d-none" , "d-block");
    return false;
  }

   function validUrl(){
    var regex = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/;
   if(regex.test(urlInput.value) == true){

      document.getElementById("two").classList.replace("d-block" , "d-none");
      return true;

    }

    document.getElementById("two").classList.replace("d-none" , "d-block");
    return false;
    
   }
  
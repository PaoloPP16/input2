function mandarData(){
    
const myInputValue = document.getElementById("inputId").value
const errorMsg = document.getElementById("errorMsg")
if(myInputValue.length < 3 ) {
  errorMsg.innerHTML = 'Mensaje muy corto'
  errorMsg.style.display = "block"; 
  errorMsg.style.color = "red"; 
} else {
  errorMsg.style.display = "none"; 

}
}
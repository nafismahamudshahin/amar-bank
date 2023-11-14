document.getElementById("sumbit-btn").addEventListener('click',function(){
    const email ="shahin@gmail.com";
    const password = "shahin";
    // user Email :
    const userEmailElement = document.getElementById("user-email");
    const userEmail = userEmailElement.value;
    // user password:
    const userPasswordElement= document.getElementById("user-password");
    const userPassword = userPasswordElement.value;
    // check user validity
    if(userEmail === email && userPassword === password){
        window.location.href='amarbank.html';
    }else{
        console.log("invalid user");
    }
})
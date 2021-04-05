var mail=document.getElementById("exampleInputEmail1");
var error=document.getElementById("error");
var pass=document.getElementById("exampleInputPassword1")
var perror=document.getElementById("perror");

 function validate(){
    var regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/; 
     if(regexp.test(mail.value)){
        error.innerHTML="Valid";
        error.style.color="green";
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if(strongRegex.test(pass.value)){
            perror.innerHTML="Valid";
            perror.style.color="green";
        return true;
        }
 }
 else{
    error.innerHTML="Invalid";
    error.style.color="red";
    return false;
}
}

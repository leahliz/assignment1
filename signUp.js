var mail=document.getElementById("exampleInputEmail1");
var error=document.getElementById("error");
var pass=document.getElementById("exampleInputPassword1");
var perror=document.getElementById("perror");
var num=document.getElementById("number");
var v1=0,v2=0,v3=0;
var regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;

 function mvalidate(){
     if(regexp.test(mail.value)){
        error.innerHTML="Valid";
        error.style.color="green";
        v1=1;
        return true;
 }
 else{
    error.innerHTML="Invalid";
    error.style.color="red";
    return false;
}
}

function pvalidate(){
    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(mediumRegex.test(pass.value)){
        perror.innerHTML="Medium";
        perror.style.color="orange";
    }
    else if(strongRegex.test(pass.value)){
        perror.innerHTML="Strong";
        perror.style.color="green";
        v2=1;
        return true;
    }
else{
    perror.innerHTML="Poor";
    perror.style.color="red";
    return false;
}
}
 
function nvalidate(){
    var regex = /^\(?\d{3}\)?-?\s*-?\d{4}$/;
    if(regex.test(num.value)){
    v3=1;
   return true;
    }
    else{
      alert("This is not a valid phone number");
      return false;
  }
  }

  function validate(){
      if(v1==1&&v2==1&&v3==1){
          return true;
      }
      else{
          return false;
      }
  }


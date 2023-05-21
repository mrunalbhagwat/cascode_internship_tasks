// First Name Validation
var firstName= document.getElementById("name");

var firstNameValidation=function(){

   firstNameValue=firstName.value.trim(); 
   validFirstName=/^[a-zA-Z]+ [a-zA-Z]+$/;
   firstNameErr=document.getElementById('name-err');

   if(firstNameValue=="")
   {
    firstNameErr.innerHTML="*Name is required";
   }else if(!validFirstName.test(firstNameValue)){
     firstNameErr.innerHTML="*Don't include special characters";
   }else{
     firstNameErr.innerHTML="";
     return true;
    
   }
}

firstName.oninput=function(){
   
   firstNameValidation();
}


 // Email Address Validation
 var emailAddress= document.getElementById("email");;
 var emailAddressValidation= function(){

  emailAddressValue=emailAddress.value.trim(); 
   validEmailAddress=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   emailAddressErr=document.getElementById('email-err');

   if(emailAddressValue=="")
   {
    emailAddressErr.innerHTML="*Email Address is required";

   }else if(!validEmailAddress.test(emailAddressValue)){
     emailAddressErr.innerHTML="*Email Address must be in valid format";
   }else{
     emailAddressErr.innerHTML="";
     return true;
   }

 }

emailAddress.oninput=function(){

   emailAddressValidation();
}

 // Mobile Number Validation
 var mobileNumber= document.getElementById("cnum");

 var mobileNumberValidation = function(){

   mobileNumberValue=mobileNumber.value.trim(); 
   validMobileNumber=/^[0-9]*$/;
   mobileNumberErr=document.getElementById('cnum-err');

   if(mobileNumberValue=="")
   {
    mobileNumberErr.innerHTML="*Mobile Number is required";

   }else if(!validMobileNumber.test(mobileNumberValue)){
     mobileNumberErr.innerHTML="*Mobile Number must be a number";
   }else if(mobileNumberValue.length!=10){

      mobileNumberErr.innerHTML="*Mobile Number must have 10 digits";
   }
   else{
     mobileNumberErr.innerHTML="";
     return true;
   }

 }
mobileNumber.oninput=function(){

   mobileNumberValidation();
}


 // Age Validation
 var age= document.getElementById("age");

 var ageValidation = function(){

   ageValue=age.value.trim(); 
   validate=/^[0-9]*$/;
   ageErr=document.getElementById('age-err');

   if(ageValue=="" && onclick)
   {
    ageErr.innerHTML="*Age is required";

   }else if(!validate.test(ageValue)){
     ageErr.innerHTML="*Age must be a number";
   }else if(ageValue.length!=2){

      ageErr.innerHTML="*Enter valid age";
   }
   else{
     ageErr.innerHTML="";
     return true;
   }

 }
age.oninput=function(){

   ageValidation();
}

// radio button validation

function checkRadio() {
  var status = document.getElementsByName("recommed");
  var validradio = false;
  var i = 0;
  while(!validradio && i < status.length){
      if(status[i].checked) validradio = true;
      i++;
  }
  if (!validradio){
      alert("Please choose any one of the options (yes, no, maybe)");
      return false;
  }
}

// checkbox button validations

//  function ValidateCheckBox(){
//   var checkboxes = document.getElementsByName("inp");
//   var atLeastOneCheckBoxIsChecked = false;
//   for( var i = 0; i < checkboxes.length; i++ ){
//       if( checkboxes[i].checked == true ){
//           atLeastOneCheckBoxIsChecked = true;
//           break;
//       }
//   }
//   if(atLeastOneCheckBoxIsChecked){
//     return true;
//   }
//   else{
//     alert("Sorry! Please select checkbox corresponding to your interest");
//     return false;
// } 
// }




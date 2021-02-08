function allLetter(inputtxt)
      { 
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters) || inputtxt.value =="")
      {
      console.log('Your name have accepted : you can try another');
      return true;
      }
      else
      {
     console.log('Please input alphabet characters only');
      return false;
      }
      }

      function allnumeric(inputtxt)
   {
      var numbers = /^[0-9]+$/;
      if(inputtxt.value.match(numbers))
      {
      alert('Your Registration number has accepted....');
      document.form1.text1.focus();
      return true;
      }
      else
      {
      alert('Please input numeric characters only');
      document.form1.text1.focus();
      return false;
      }
   } 
   function stringlength(inputtxt, minlength, maxlength)
{ 
var field = inputtxt.value; 
var mnlen = minlength;
var mxlen = maxlength;

if(field.length<mnlen || field.length> mxlen)
{ 
alert("Please input the userid between " +mnlen+ " and " +mxlen+ " characters");
return false;
}
else
{ 
alert('Your userid have accepted.');
return true;
}
}
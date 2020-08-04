/*///////////////////.................Pin-matches........................../////////////////////////*/

function calculator(x){
  const pickInput = document.getElementById("showNumber");

pickInput.value=pickInput.value + x;   

}
function back(){
  const expr = form.display.value;
  form.display.value= expr.substring( 0, expr.length-1)
}
/*///////////////////////................Generate-pin.............................../////////////////// */

const addInput= document.getElementById("showInput");
addInput.addEventListener("click", function(){
   
     
     
      const generate= Math.floor(Math.random() * 9000+1000);
      const result = document.getElementById("generate");
      result.value=generate;
  });

/*/////////.............................Submit- Butoon.........................//////////////////////////*/

   const submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click",function(){
      let fourDigitsNum = document.getElementById("generate");
      let showCalDisplay = document.getElementById("result");

      if (fourDigitsNum.value == showCalDisplay.value){
        document.getElementById("pin-matched").style.display= 'block';
      }

      else{
        document.getElementById("worng-pin").style.display = 'block';
      }
     
    
})


/*/////////////..........Click function....................///////////////// */
function insertNumber(number){
 const existingNumbers=$("#result").val();
  $("#result").val(existingNumbers + number);
}


function clearResult(){
  $("#result").val('');
}

function deleteNumber(){
   const presentValue = $("#result").val();
   if(presentValue!=''){
    $("#result").val($("#result").val().slice(0,-1));
     
   }
}
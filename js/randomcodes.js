var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let code = ''; 

var getCode = '';// to store entered code
var btnvalue; // for button boolean value
function generateCode() {
    for (let i = 0; i < 8; i++) {
      code += str.charAt(Math.floor(Math.random() * str.length));
    }
    return code;
  }

  document.getElementById("codes").innerHTML = generateCode()

//   Disable Button
function disableButton(btnvalue){
    document.getElementById("submit").disabled = btnvalue; //able/disable button
    if (btnvalue == true){//test if button is disabled or enabled
      //set button label color translucent
      document.getElementById("submit").style.backgroundColor="rgba(73, 119, 209, 0.3)";
      document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
    }
    else{
      // set button and label color with no transparency
      document.getElementById("submit").style.backgroundColor="rgba(73, 119, 209, 1)";
      document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
    }
}

//Listen to user input code
var codebox = document.getElementById("codeentered"); //get textbox
codebox.addEventListener("input", evaluateCode); //Listen code entered in textbox

// run function if detected user had a character in testbox
function evaluateCode(){
  getCode = document.getElementById("codeentered").value; //get character entered
  var charset1 = getCode.trim(); //remove any hidden characters entered
  var charset2 = code.trim(); //remove any hidden characters generated

  //test if code entered matches the number of generated characters
  if (charset1.length == charset2.length && charset1==charset2){
    disableButton(false); //if match, run the function to enable button
  }
}
// Activate function
disableButton();
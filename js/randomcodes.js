function generateCode() {

    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  document.getElementById("codes").innerHTML = generateCode()

//   Disable Button
function disableButton(){
    document.getElementById("submit").disabled = true;
}

// Activate function
disableButton();
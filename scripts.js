const bigChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const smallChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

function password_generator (){
    let password1 = "";
    for (let i=0; i<15; i++){
        const charDecider = Math.ceil(Math.random() * 4);
        //console.log(charDecider);
        if(charDecider === 1){
            password1 += bigChar[Math.floor(Math.random() * bigChar.length)];
        } else if (charDecider === 2){
            password1 += smallChar[Math.floor(Math.random() * smallChar.length)];
        } else if (charDecider === 3){
            password1 += number[Math.floor(Math.random() * number.length)];
        } else{
            password1 += special[Math.floor(Math.random() * special.length)];
        }
    }
    return password1;
};

document.querySelector("#btn").addEventListener("click",function(){
    let pass_1 = "";
    let pass_2 = "";
    pass_1 = password_generator();
    pass_2 = password_generator();
    document.querySelector("#pass-1").textContent = pass_1;
    document.querySelector("#pass-2").textContent = pass_2;
})

document.getElementById("pass-1").addEventListener("click", function () {
    const text = document.getElementById("pass-1").innerText;
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  });

  document.getElementById("pass-2").addEventListener("click", function () {
    const text = document.getElementById("pass-2").innerText;
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  });
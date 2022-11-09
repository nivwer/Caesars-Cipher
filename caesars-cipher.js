



function rot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let answer = "";

  for (let i = 0; i < str.length; i++){

    let index = alphabet.indexOf(str[i])
    
    if (index >= 13){
      answer += alphabet[index - 13]
    } else if (index < 13 && index > -1){ 
    answer += alphabet[index + 13]
    } else {
      answer += str[i]
    }
  }
  return answer;
}


function cipher(){
  let text = document.getElementById("text").value;
  hola = rot13(text);
  console.log(hola);
}







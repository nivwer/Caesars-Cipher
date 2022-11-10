function rot(num, str) {
  const alphabetmin = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetmay = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let answer = "";

  for (let i = 0; i < str.length; i++){

    let indexmin = alphabetmin.indexOf(str[i])
    let indexmay = alphabetmay.indexOf(str[i])

    if (alphabetmin.includes(str[i]) == true){
      if (indexmin >= 0 && indexmin <= (25 - num)){
        answer += alphabetmin[indexmin + num]
      }
      else {
        answer += alphabetmin[indexmin + num - 26]
      }
    }
    else if (alphabetmay.includes(str[i]) == true){
      if (indexmay >= 0 && indexmay <= (25 - num)){
        answer += alphabetmay[indexmay + num]
      }
      else {
        answer += alphabetmay[indexmay + num - 26]
      }
    }
    else {
      answer += str[i]
    }
  }
  return answer;
}



function cipher(){
  let text = document.getElementById("text").value;
  document.getElementById("result").value = " ";
  for (let i = 0; i < 26; i++){
    let rots = i;

    let result = rot(rots, text); 

    document.getElementById("result").value += (result);
  }
}





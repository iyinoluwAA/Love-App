
const Love = () => {
    let name1 = document.getElementById("inputName1");
    let name2 = document.getElementById("inputName2");
    let percent = Math.random()*100
    let outcome = `${Math.round(percent)}%`



   if (name1.value === '' || name2.value === ''){
       Arr.style.display = "block"
       name1.value = ""
       name2.value = ""
   }else if(percent >=0 && percent < 40){
    Show.innerHTML =` 
    <h3 style="color:white">Not compatiable</h3>
    <h1 style="color:red">${Math.round(percent)} % </h1>`
    name1.value = ""
    name2.value = ""
}else if(percent >=40 && percent < 60 ){
    Show.innerHTML =` 
    <h3 style="color:white">You and guys should work out</h3>
    <h1 style="color:yellow">${Math.round(percent)} % </h1>`
    name1.value = ""
    name2.value = ""
}else if(percent >=60 && percent < 80){
    Show.innerHTML =`
    <h3 style="color:white"> You have a high chance</h3> 
    <h1 style="color:blue">${Math.round(percent)} % </h1>`
    name1.value = ""
    name2.value = ""
}else if(percent >=80 && percent <= 100){
    Show.innerHTML =` 
    <h3 style="color:white">You guys are a perfect match</h3>
    <h1 style="color:green">${Math.round(percent)} % </h1>`
    name1.value = ""
    name2.value = ""
}
else{
       Arr.style.display = "none"
       console.log(outcome);
       Show.innerHTML = outcome
       name1.value = ""
       name2.value = ""
   }
}




const dropdowns = document.querySelectorAll("#dropdown select")

for (let select of dropdowns){
    for (code in countryList){
    let newOption = document.createElement("option")
    newOption.innerText = code;
    newOption.value = code;
    if(select.name === "from" && code === "USD"){
      newOption.selected = "selected"
    }else if(select.name === "to" && code === "PKR"){
      newOption.selected = "selected"
    }
    select.append(newOption);
}
select.addEventListener("change",(evt) => {
  updateflag(evt.target);
});
}

const updateflag = (element) => {
  let crancycode = element.value;
  let contrycode = countryList[crancycode];
  let newsrc = `https://flagsapi.com/${contrycode}/flat/64.png`
  let img = element.parentElement.querySelector("img");
  img.src = newsrc;
};
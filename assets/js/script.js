const dropList= document.querySelectorAll(".drop-list select"),
getButton = document.querySelectorAll("form button");

for(let i = 0; i < dropList.length; i++) {
    for(currency_code in country_code){
        // selecting EUR by default as FROM currency and BRL as TO currency
        let selected;
        if(i == 0){
            selected = currency_code == "EUR" ? "selected" : "";  
        }else if( i == 1){
            selected = currency_code == "BRL" ? "selected" : "";
        }
        // creating option tag with passing currency code as a text and value
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        // inserting options tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag)
    }
}

getButton.addEventListener("click", e =>{
    e.preventDefault(); //preventing form from submitting
    getExchangeRate();
});

function getExchangeRate(){
    const amount = document.querySelector("")
}
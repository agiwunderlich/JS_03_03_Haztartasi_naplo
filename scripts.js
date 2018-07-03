// elemek összegyűjtése

let inputItemName = document.getElementById('itemName');
let inputItemPrice = document.getElementById('itemPrice');

let buttonAdd = document.getElementById('buttonAdd');

let listItemList = document.getElementById('itemList');

let spanSum = document.getElementById('sum');

// változók

let itemNames = ['fogkrém', 'tusfürdő'];
let itemPrices = [2000,3000];

// feliratkozás

buttonAdd.addEventListener('click', AddNewItem);

// init

RenderList();

// renderelés

function RenderList(){

    ResetList();

    let mappedList = itemNames.map(function(itemName, index){
        let itemString = [
            itemName + ' | ' + itemPrices[index] + ' Ft'

        ]
        return itemString;

    });

    mappedList.forEach(function(itemText) {
        RenderListItem(itemText);
        
    });

    // összeg frissítése

    spanSum.innerText = GetSum();
}

function ResetList(){
    listItemList.innerText = '';
}

function RenderListItem(text){
    let newItem = document.createElement('li');
    newItem.innerText = text;
    listItemList.appendChild(newItem);
}


function AddNewItem(){

    // validálás

    if(!(inputItemName.value && inputItemPrice.value)){
        return;
    }

    itemNames.push(inputItemName.value);
    itemPrices.push(+inputItemPrice.value);

    inputItemName.value = '';
    inputItemPrice.value = '';

    RenderList();

    console.log(itemNames, itemPrices);
}

function GetSum(){
    return itemPrices.reduce(function(acc, currentItemPrice, index){
        return acc + currentItemPrice;
    });
}




//stores the items in it
lists = [];
//Structure for a item
// {
//     name: "",
//     quantity: 1,
//     rate: 0,
//     amount: 0
// }

//coversion from USD to given currency
let coversion = {
    USD: 1,
    INR: 74.58,
    GBP: 0.88,
    CAD: 1.27
};

let currencyFrom = "INR";

function ReturnItem(index, name, quantity, rate, amount){
    return (
        `<td class="name-input">
            <textarea rows="2" id="name-${index}" name="name" onchange="ChangeName(${index})">${name}</textarea>
            <div class="buttons">
                <div>
                    <i class="bi bi-files" onclick="CopyItem(${index})" id="copy-${index}"></i>
                    <i class="bi bi-calendar3"></i>
                    <i class="bi bi-link-45deg"></i>
                    <i class="bi bi-tag"></i>
                </div>
                <div>
                    <i class="bi bi-file-medical"></i>
                    <i class="bi bi-cart3"></i>
                    <i class="bi bi-archive"></i>
                    <i class="bi bi-trash" onclick="RemoveFromList(${index})"></i>
                </div>
            </div>
        </td>
        <td>
            <input type="number" name="Quantity" id="Quantity-${index}" min="1" value="${quantity}" onchange="CheckForNumber(${index})" />
        </td>
        <td>
            <input type="number" name="Rate" id="Rate-${index}" min="0" value="${rate}" onchange="CheckForNumber(${index})" />
        </td>
        <td>
            <input type="number" name="Amount" id="Amount-${index}" min="0" value="${amount}" disabled="true" />
        </td>`
    );
}

function AddToList() {
    //Add item into the list first
    lists = [
        ...lists, {
            name: "",
            quantity: 1,
            rate: 0,
            amount: 0
        }
    ];
    var index = (lists.length - 1);
    var table = document.getElementById('list');
    var newNode = document.createElement('tr');
    let id = 'input-' + index;
    newNode.setAttribute("id", id);
    newNode.innerHTML = ReturnItem(index, "", 1, 0, 0);
    table.appendChild(newNode);
}

function RemoveFromList(id){  
    var i = Number(id);
    lists = lists.filter(( _value, index) => {
        return (Number(index) !== id);
    });

    var node = lists.map((item, index) => {
        return(
            `<tr>
                ${ReturnItem(index, item.name, item.quantity, item.rate, item.amount)}
            </tr>`
        );
    }).join('\n');

    var table = document.getElementById('list');
    table.innerHTML = `<tr>
                            <th>Name</th>
                            <th style="width: 10%;">Quantity</th>
                            <th style="width: 10%;">Rate</th>
                            <th style="width: 10%;">Amount</th>
                       </tr>` + node;

    //Recalcualte the sum
    CheckForNumber(id);
}

function ChangeName(id){
    var name = document.getElementById(`name-${id}`).value;
    lists[Number(id)].name = name;
}

function CheckTax(){
    var tax = Number(parseFloat(document.getElementById('tax').value).toFixed(2));
    var sum = Number(parseFloat(document.getElementById('subTotal').innerHTML).toFixed(2)); 
    var price = Number(parseFloat((tax * sum) / 100).toFixed(2));
    document.getElementById('tax-value').innerHTML = price;
    document.getElementById('total').innerHTML = sum + price;
    document.getElementById('total-due').value = sum + price;
}

function CheckForNumber(id) {
    var index = Number(id);
    var a = Number(document.getElementById(`Quantity-${index}`).value);
    var b = Number(document.getElementById(`Rate-${index}`).value);
    document.getElementById(`Amount-${id}`).value = a * b;
    lists[index].quantity = a;
    lists[index].rate = b;
    lists[index].amount = a*b;
    var sum = 0;
    for(let i = 0; i < lists.length; i++){
        sum = sum + lists[i].amount;
    }
    document.getElementById("subTotal").innerHTML = sum;
    CheckTax();
}

function CopyItem(id){
    let ans = lists[Number(id)];
    navigator.clipboard.writeText(JSON.stringify(ans));
    document.getElementById(`copy-${id}`).style = "color: dodgerblue";
    setTimeout(() => {
        document.getElementById(`copy-${id}`).style = "color: rgb(145, 145, 145)";
    }, 1000);
}

function HTMLtoPDF(){
    var doc = document.getElementById('htmlTopdf');
    html2pdf(doc, {
        margin: 7,
        filename: 'invoice.pdf',
        image: { type: 'jpeg', quality: 0.99 },
        html2canvas: { scale: 3 },
        pagebreak: { mode: 'avoid-all' },
        jsPDF: { unit: 'mm', format: 'a3' },
    });
}

function CovertCurrency(){
    var currencyTo = document.getElementById('Currency').value;

    var coefficient = coversion[currencyTo] / coversion[currencyFrom];
    var sum = 0;
    for(var i = 0; i < lists.length; i++){
        lists[i].rate = Number(parseFloat(coefficient*lists[i].rate).toFixed(2));
        lists[i].amount = Number(parseFloat(coefficient*lists[i].amount).toFixed(2));
        sum = sum + Number(lists[i].amount);
    }

    currencyFrom = currencyTo;

    var node = lists.map((item, index) => {
        return(
            `<tr>
                ${ReturnItem(index, item.name, item.quantity, item.rate, item.amount)}
            </tr>`
        );
    }).join('\n');

    var table = document.getElementById('list');
    table.innerHTML = `<tr>
                            <th>Name</th>
                            <th style="width: 10%;">Quantity</th>
                            <th style="width: 10%;">Rate</th>
                            <th style="width: 10%;">Amount</th>
                       </tr>` + node;
                       
    document.getElementById("subTotal").innerHTML = sum;
    CheckTax();
}
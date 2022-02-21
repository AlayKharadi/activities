//stores the items in it
let input = 0;
function AddToList() {
    var table = document.getElementById('list');
    var newNode = document.createElement('tr');
    let id = 'input-' + input;
    newNode.setAttribute("id", id);
    newNode.innerHTML =
        `
            <td class="name-input">
                <textarea rows="2" id="name-${input}" name="name"></textarea>
                <div class="buttons">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onclick="CopyItem(${input})" id="copy-${input}">
                            <path
                                d="M384 96L384 0h-112c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48H464c26.51 0 48-21.49 48-48V128h-95.1C398.4 128 384 113.6 384 96zM416 0v96h96L416 0zM192 352V128h-144c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48L288 416h-32C220.7 416 192 387.3 192 352z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path
                                d="M96 32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32zM448 464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192H448V464z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path
                                d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path
                                d="M48 32H197.5C214.5 32 230.7 38.74 242.7 50.75L418.7 226.7C443.7 251.7 443.7 292.3 418.7 317.3L285.3 450.7C260.3 475.7 219.7 475.7 194.7 450.7L18.75 274.7C6.743 262.7 0 246.5 0 229.5V80C0 53.49 21.49 32 48 32L48 32zM112 176C129.7 176 144 161.7 144 144C144 126.3 129.7 112 112 112C94.33 112 80 126.3 80 144C80 161.7 94.33 176 112 176z" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path
                                d="M128 160H448V352H128V160zM512 64C547.3 64 576 92.65 576 128V208C549.5 208 528 229.5 528 256C528 282.5 549.5 304 576 304V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V304C26.51 304 48 282.5 48 256C48 229.5 26.51 208 0 208V128C0 92.65 28.65 64 64 64H512zM96 352C96 369.7 110.3 384 128 384H448C465.7 384 480 369.7 480 352V160C480 142.3 465.7 128 448 128H128C110.3 128 96 142.3 96 160V352z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path
                                d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                                d="M32 432C32 458.5 53.49 480 80 480h352c26.51 0 48-21.49 48-48V160H32V432zM160 236C160 229.4 165.4 224 172 224h168C346.6 224 352 229.4 352 236v8C352 250.6 346.6 256 340 256h-168C165.4 256 160 250.6 160 244V236zM480 32H32C14.31 32 0 46.31 0 64v48C0 120.8 7.188 128 16 128h480C504.8 128 512 120.8 512 112V64C512 46.31 497.7 32 480 32z" />
                        </svg>
                    </div>
                </div>
            </td>
            <td>
                <input type="number" name="Quantity" id="Quantity-${input}" min="1" value="1" onchange="CheckForNumber(${input})" />
            </td>
            <td>
                <input type="number" name="Rate" id="Rate-${input}" min="0" value="0" onchange="CheckForNumber(${input})" />
            </td>
            <td>
                <input type="number" name="Amount" id="Amount-${input}" min="0" value="0" disabled="true" />
            </td>
        `
        ;
    table.appendChild(newNode);
    input++;
}

function CheckTax(){
    var tax = document.getElementById('tax').value;
    var amount = document.getElementById('subTotal').innerHTML;
    document.getElementById('tax-value').innerHTML = (Number(tax)*Number(amount))/100;
    document.getElementById('total').innerHTML = Number(amount) + Number(document.getElementById('tax-value').innerHTML);
    document.getElementById('total-due').value = Number(document.getElementById('total').innerHTML);
}

function CheckForNumber(id) {
    var a = document.getElementById(`Quantity-${id}`).value;
    var b = document.getElementById(`Rate-${id}`).value;
    document.getElementById(`Amount-${id}`).value = Number(a) * Number(b);
    let sum = 0;
    for(let i = 0; i < input; i++){
        sum = sum + Number(document.getElementById(`Amount-${i}`).value);
    }
    document.getElementById("subTotal").innerHTML = sum;
    document.getElementById('total').innerHTML = Number(sum) + Number(document.getElementById('tax-value').innerHTML);
    document.getElementById('total-due').value = Number(document.getElementById('total').innerHTML);
}

function CopyItem(id){
    var name = document.getElementById(`name-${id}`).value;
    var quantiy = document.getElementById(`Quantity-${id}`).value;
    var rate = document.getElementById(`Rate-${id}`).value;
    var amount = document.getElementById(`Amount-${id}`).value;
    let ans = {
        name,
        quantiy,
        rate,
        amount
    };
    navigator.clipboard.writeText(JSON.stringify(ans));
    document.getElementById(`copy-${id}`).style = "fill: dodgerblue";
    setTimeout(() => {
        document.getElementById(`copy-${id}`).style = "fill: rgb(145, 145, 145)";
    }, 1000);
}
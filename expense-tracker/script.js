let total = 0;
const tot = document.getElementById("total");

function addExpense() {
    const name = document.getElementById("name").value;
    const amount = Number(document.getElementById("amount").value);
    const list = document.getElementById("expense-list")

    if(name === "" || amount <=0){
        alert("Enter valid expense");
    return;
    }
    const dv = document.createElement("div");
    dv.classList.add("list")
    dv.innerHTML = `${name} - ${amount} <span class= "delete" onclick="deleteExpenses(this, ${amount})">X</span>`

    if(amount >= 10000) {
        dv.classList.add("high");
    }    
    total += amount;
    tot.innerText = total;

    list.appendChild(dv);
}

function clearAll() {
    const list = document.getElementById("expense-list");
    list.replaceChildren();
    tot.innerText =0;

}
function deleteExpenses(e, amnt) {
    var del = e.parentNode;
    del.remove();
    total -=amnt;
    tot.innerText = total;
    
}
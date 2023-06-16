let expenses = [];  //initializing expenses as empty arr.add all expenses added by user.
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');

//To get references through HTML Elements on pg we used above 6 lines code.

addBtn.addEventListener('click',function() {
    const category = categorySelect.value;
    const amount = Number(amountInput.value); //convert to number
    const date = dateInput.value;
    //user input is obtained by reading the value of the category

    if(category===''){
        alert('Please select a category');
        return;
    }
    if(isNaN(amount) || amount <= 0){
        alert('Please enter a valid amount');
        return;
    }
    if(date === ''){
        alert('Please select a date');
        return;
    } 
    //Add expenses to the list.
    expenses.push({category,amount,date}); //expenses of user is added to expense arr.
    //stored as an obj as there are 3 prop's.
    //update amount and display

    totalAmount+=amount;
    totalAmountCell.textContent=totalAmount;

    //totalAmount var is updated by adding new expense amount to it.
    //textContent prop of total amount cell ele is updated to display new total amount.


    //new row to expenses table by calling insert Row method on expense table body element

    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent='Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expense),1);
        totalAmount-=expense.amount;
        totalAmountCell.textContent=totalAmount;

        expensesTableBody.removeChild(newRow);
    });

    const expense = expenses[expenses.length-1];
    categoryCell.textContent =  expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);



}) ;

//update expense table and total amount on pg load. 
for(const expense of expenses){
    totalAmount+=expense.amount;
    totalAmountCell.textContent=totalAmount;

    //add new row to expense table
    const newRow = expensesTableBody.insertRow()
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent='Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expense),1);
        totalAmount-=expense.amount;
        totalAmountCell.textContent=totalAmount;

        expensesTableBody.removeChild(newRow);
    });

    categoryCell.textContent =  expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);

}

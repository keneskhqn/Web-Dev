const input = document.getElementById("item-input");
const button = document.getElementById("addItem");
const list = document.getElementById("myList");
const form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const text = input.value.trim();
    if(text === ""){
        return;
    }

    const newItem = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;

    const delBtn = document.createElement("button");
    delBtn.setAttribute("id", "deleteBtn");
    delBtn.textContent = "Delete";

    delBtn.addEventListener("click", function(){
        list.removeChild(newItem);
    })

    const checkB = document.createElement("input");
    checkB.type = "checkbox";

    checkB.addEventListener("change", function(){
        if(checkB.checked){
            span.classList.add("done");
        }
        else{
            span.classList.remove("done");
        }
    })

    newItem.appendChild(checkB);
    newItem.appendChild(span);
    newItem.appendChild(delBtn);

    list.appendChild(newItem);

    input.value = "";
})

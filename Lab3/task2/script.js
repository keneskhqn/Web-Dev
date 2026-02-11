const input = document.getElementById("item-input");
const button = document.getElementById("addItem");
const list = document.getElementById("myList");
const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const text = input.value.trim();
    if(text === ""){
        return;
    }

    const newItem = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = 'Delete';
    deleteBtn.setAttribute("id", "deleteBtn");

    const checkB = document.createElement("input");
    checkB.type = "checkbox";

    checkB.addEventListener("change", function(){6
        if(checkB.checked){
            span.classList.add("done");
        }
        else{
            span.classList.remove("done");
        }
    });


    deleteBtn.addEventListener("click", function(){
        list.removeChild(newItem);
    });

    newItem.appendChild(checkB);
    newItem.appendChild(span);
    newItem.appendChild(deleteBtn);
    list.appendChild(newItem);

    input.value = "";
});

const input = document.getElementById("Taskinput");
const addBtn = document.getElementById("AddBtn");
const list = document.getElementById("tasklist");
const counter = document.getElementById("counter")


console.log(input);
console.log(addBtn);

addBtn.addEventListener("click", function () {
    const text = input.value;
    console.log(text);
    if (text === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = text;
    li.addEventListener("click", function () {
        li.classList.toggle("done");
        compteur()
    });
    list.appendChild(li);
    input.value = "";
    compteur()

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function () {
        li.remove();
        compteur()
        
    })


});

function compteur() {
    const remaining = list.querySelectorAll("li:not(.done)").length;
    counter.textContent = remaining + "tâche(s) restante(s)";
}
let enter_btn = document.getElementById("enterrr");
let title_input = document.getElementById("title");
let description_input = document.getElementById("description");
let container = document.getElementById("container");

function handleClick() {
    let new_title = title_input.value.trim();
    let new_description = description_input.value.trim();

    if (new_title === "" || new_description === "") {
        alert("Please fill in both fields");
        return;
    }

    title_input.value = "";
    description_input.value = "";

    let new_div = document.createElement("div");
    let new_h2 = document.createElement("h2");
    let new_p = document.createElement("p");
    let delete_btn = document.createElement("button");

    delete_btn.classList.add("delete_btn");
    delete_btn.innerText = "Delete";
    delete_btn.addEventListener("click", () => {
        delete_btn.parentNode.remove();
    });

    new_div.classList.add("todos");
    new_h2.innerText = new_title;
    new_p.innerText = new_description;

    new_div.appendChild(new_h2);
    new_div.appendChild(new_p);
    new_div.appendChild(delete_btn);

    container.appendChild(new_div);
}

enter_btn.addEventListener("click", handleClick);

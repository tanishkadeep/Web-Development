let inputText = document.getElementById("inp");
let addTask = document.getElementById("btn");
let ul = document.querySelector("ul");

addTask.addEventListener("click", () => {
    if (inputText.value != '') {
        li = document.createElement('li');
        ul.append(li);
        checkicon = document.createElement('i')
        li.append(checkicon);
        checkicon.setAttribute('class', 'fa-regular fa-circle');
        div = document.createElement('div');
        li.append(div);
        div.innerText = inputText.value;
        inputText.value = '';
        cross = document.createElement('i');
        li.append(cross);
        cross.setAttribute('class', 'fa-solid fa-xmark');
    }
    saveData()
})


let list = document.getElementById("list");
list.addEventListener("click", (e) => {
    arr = Array.from(e.target.classList);
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 'fa-circle') {
            e.target.setAttribute('class', 'fa-solid fa-circle-check')
            e.target.parentElement.setAttribute('class', 'checked');
        }

        else if (arr[i] === 'fa-circle-check') {
            e.target.setAttribute('class', 'fa-regular fa-circle');
            e.target.parentElement.removeAttribute('class');
        }

        else if (arr[i] === 'fa-xmark') {
            e.target.parentElement.remove();
        }
    }
    saveData()
})

function saveData() {
    localStorage.setItem('data', list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem('data');
}
showTask()

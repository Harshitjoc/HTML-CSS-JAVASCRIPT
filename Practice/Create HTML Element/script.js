var list = document.getElementById('todo-list');
var inputBox = document.getElementById('todo-input')
var btnAdd = document.getElementById('add-item')
var btnUpdate = document.getElementById('update-item')
var btnRemove = document.getElementById('remove-item')
var deleteIcon = document.getElementsByClassName('fa-sharp fa-solid fa-trash')

var currentInput = "";
inputBox.addEventListener('input', function (e) {
    currentInput = e.target.value;
});

inputBox.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        addListItem();
    }
});

function createNewNode() {
    var newListElement = document.createElement('li')

    var textNode = document.createTextNode(currentInput)
    // var textNode = document.createTextNode('List Item' + (list.childElementCount + 1))
    newListElement.appendChild(textNode);
    newListElement.id = "item" + (list.childElementCount + 1)

    var addDeleteIcon = document.createElement("i");
    addDeleteIcon.setAttribute("class", "fa-sharp fa-solid fa-trash");
    addDeleteIcon.addEventListener('click', function (e) {
        e.target.parentElement.remove();
    });
    newListElement.appendChild(addDeleteIcon);
    // console.log(newListElement)
    // console.log(addDeleteIcon)

    return newListElement;
}

function addListItem() {
    if (currentInput !== undefined && currentInput !== null && currentInput !== "") {
        var newListElement = createNewNode();
        // var firstItem = list.firstElementChild

        // list.insertBefore(newListElement, firstItem);
        // console.log(newListElement)
        // console.log(textNode)
        // console.log(list.childElementCount + 1)

        list.appendChild(newListElement)

        inputBox.value = ""
        currentInput = ""
    }
    else {
        alert("Please Enter a Valid Input!!!")
    }

};

btnAdd.addEventListener('click', addListItem);

btnUpdate.addEventListener('click', function () {
    if (currentInput !== undefined && currentInput !== null && currentInput !== "") {
        var firstElement = list.firstElementChild;
        var newListElement = createNewNode();

        list.replaceChild(newListElement, firstElement);
        inputBox.value = ""
        currentInput = ""
    }
    else {
        alert("Please Enter a Valid Input!!!")
    }
})

function deleteItem() {
    var firstElement = list.firstElementChild;
    list.removeChild(firstElement)
}

// function deleteList() {
//     var firstElement = list.;
//     console.log(firstElement)
//     list.remove(firstElement)
// }

btnRemove.addEventListener('click', deleteItem)
// deleteIcon.addEventListener('click', deleteList)

// function removeItem() {
//     this.parentNode.remove();
//     deleteIcon.parentNode.removeChild(deleteIcon)
//     console.log(list.childElementCount)
// }

for (var i = 0; i < list.childElementCount; i++) {
    deleteIcon[i].addEventListener("click", function () {
        this.parentNode.remove()
    });
}

const addBtn = document.getElementById("add-btn");
const noteList = document.getElementById("note-list");
const noteBar = document.getElementById("add-slide");
const backBtn = noteBar.firstElementChild.firstElementChild;
const inputTitleBar =
noteBar.firstElementChild.nextElementSibling.querySelector("input");
const inputNoteBar =
noteBar.firstElementChild.nextElementSibling.querySelector("textarea");
const inputColorBtn =
noteBar.lastElementChild.querySelector("button").nextElementSibling;
const bottomBar = document.getElementById("bottom-bar");

const editedTime = noteBar.lastElementChild.querySelector("span");
const themeBtn =
document.getElementById("search-bar").lastElementChild.previousElementSibling
.firstElementChild;

const noteBarMoreItems = noteBar.lastElementChild.previousElementSibling;
const noteBarDltBtn = noteBarMoreItems.firstElementChild;



//color buttons
const colorBar = document.getElementById("extra-opt");
const btn1 = colorBar.firstElementChild;
const btn2 = btn1.nextElementSibling;
const btn3 = btn2.nextElementSibling;
const btn4 = btn3.nextElementSibling;
const btn5 = btn4.nextElementSibling;
const btn6 = btn5.nextElementSibling;
const btn7 = btn6.nextElementSibling;
const btn8 = btn7.nextElementSibling;
// const btn9=btn8.nextElementSibling;
// const btn10=btn9.nextElementSibling;
// const btn11=btn10.nextElementSibling;
// const btn12=btn11.nextElementSibling;

let colorsArr = [];
//const dltdItems = [];

const emptyBinBtn = document.getElementById('binBar').querySelector('h2').firstElementChild;

emptyBinBtn.addEventListener('click', ()=> {
    binBarUl.remove('li')
})

class Notes {
    constructor(title, content, lable) {
        this.Title = title;
        this.Content = content;
        this.Lable = lable;
    }
    render() {
        const renderLi = document.createElement("li");
        renderLi.className = "notes";
        renderLi.style = colorsArr[colorsArr.length - 1];
        const renderTitle = document.createElement("h2");
        const renderNotes = document.createElement("span");
        renderTitle.innerHTML = this.Title;
        renderNotes.innerHTML = this.Content;
        const bgColor = colorsArr[colorsArr-1];
        renderLi.prepend(renderTitle, renderNotes);
        noteList.prepend(renderLi);
        renderLi.addEventListener("click", () => {
            inputTitleBar.value = this.Title;
            inputNoteBar.value = this.Content;
            noteBar.className = "show";
            addBtn.hidden = 1;
            bottomBar.className = "hid";
            renderTitle.innerHTML = this.Title;
            renderNotes.innerHTML = this.Content;
            //dltdItems.push(this);
            noteBarDltBtn.addEventListener('click', ()=> {
                binBarUl.prepend(renderLi);


                /*const binBarLi = document.createElement('li');
                binBarLi.className = 'notes';
                const binBarLiTitle = document.createElement("h2");
                const binBarLiContent = document.createElement("span");
                binBarLiTitle.innerHTML = this.Title;
                binBarLiContent.innerHTML = this.Content;
                binBarLi.prepend(binBarLiTitle, binBarLiContent);
                binBarLi.style = colorsArr[colorsArr-1]
                binBarUl.prepend(binBarLi);
                console.log('binBarUl')*/
            })
            
            renderLi.remove();
            console.log(this)
        });
        //colorsArr.push('background-color:rgb(255, 245, 218)')
    }
}

addBtn.addEventListener("click", () => {
    noteBar.className = "show";
    addBtn.hidden = 1;
    bottomBar.className = "hid";
    if (body.className == "theme") {
        noteBar.style.backgroundColor = `#14141f`;
        inputTitleBar.style.backgroundColor = `#14141f`;
        inputNoteBar.style.backgroundColor = `#14141f`;
    } else {
        noteBar.style.backgroundColor = ``;
        inputTitleBar.style.backgroundColor = ``;
        inputNoteBar.style.backgroundColor = ``;
    }
    editedTime.innerHTML = new Date().getHours() + ":" + new Date().getMinutes();
});
backBtn.addEventListener("click", () => {
    noteBar.className = "";
    noteBarMoreItems.className = "";
    bottomBar.className = "";
    addBtn.hidden = 0;
    colorBar.className = "";
    if (inputTitleBar.value.length > 0 || inputNoteBar.value !== "") {
        new Notes(inputTitleBar.value, inputNoteBar.value).render();
        console.log(inputTitleBar.value.length);
        inputTitleBar.value = "";
        inputNoteBar.value = "";
    } else {
        inputTitleBar.value = "";
        inputNoteBar.value = "";
        return;
    }})

inputColorBtn.addEventListener("click", () => {
    colorBar.classList.toggle("show");
});

const body = document.body;
const homeMoreBtn = document
.getElementById("search-bar")
.querySelector("button");
const homeMoreItems = document.getElementById('home-more')
const searchBar = document.getElementById("search-bar").querySelector("input");
const noteBarAddBtn = noteBar.lastElementChild.querySelector("button");
const noteBarMoreBtn = noteBar.lastElementChild.lastElementChild;
const binBtn = homeMoreItems.querySelector('button');
const binBar = document.getElementById('binBar');
const binBarBackBtn = binBar.firstElementChild;

const binBarUl = binBar.lastElementChild;


const backDrop = document.getElementById('back-drop');

binBtn.addEventListener('click', ()=> {
    binBar.classList.toggle('show');
    bottomBar.className = 'hid';
    addBtn.hidden = 1;
    backDrop.className = '';
    homeMoreItems.className = ''
})

binBarBackBtn.addEventListener('click', ()=> {
    binBar.className = '';
    homeMoreItems.className = ''
    bottomBar.className = '';
    addBtn.hidden = 0
})

noteBarMoreBtn.addEventListener("click", () => {
    noteBarMoreItems.classList.toggle("show");
});

homeMoreBtn.addEventListener('click', ()=> {
    homeMoreItems.classList.toggle('show');
    backDrop.className = 'show';
})

backDrop.addEventListener('click', ()=> {
    backDrop.className = '';
    homeMoreItems.className = ''
})

noteBarDltBtn.addEventListener("click", () => {
    noteBar.className = "";
    addBtn.hidden = 0;
    bottomBar.className = "";
    noteBarMoreItems.className = "";
    inputNoteBar.value = '';
    inputTitleBar.value = '';
    //console.log('dltdItems')

});

themeBtn.addEventListener("click", () => {
    body.classList.toggle("theme");
    // console.log(body.className);
    if (body.className === "theme") {
        noteBar.style.backgroundColor = "#14141f";
        inputTitleBar.style.backgroundColor = "#14141f";
        inputNoteBar.style.backgroundColor = "#14141f";
        body.style.color = "#bfbfbf";
        homeMoreBtn.style.color = "#bfbfbf";
        themeBtn.style.color = "#bfbfbf";
        backBtn.style.color = "#bfbfbf";
        inputTitleBar.style.color = "#bfbfbf";
        inputNoteBar.style.color = "#bfbfbf";
        noteBarAddBtn.style.color = "#bfbfbf";
        noteBarMoreBtn.style.color = "#bfbfbf";
        searchBar.style.color = "#bfbfbf";
        noteBarMoreItems.style.color = "black";
    } else {
        noteBar.style.backgroundColor = "";
        inputTitleBar.style.backgroundColor = "";
        inputNoteBar.style.backgroundColor = "";
        body.style.color = "";
        homeMoreBtn.style.color = "";
        themeBtn.style.color = "";
        backBtn.style.color = "";
        inputTitleBar.style.color = "";
        inputNoteBar.style.color = "";
        noteBarAddBtn.style.color = "";
        noteBarMoreBtn.style.color = "";
        searchBar.style.color = "";
        noteBarMoreItems.style.color = "black";
    }
});

btn1.style = "background-color:#ff6666";
btn2.style = "background-color:#ff4da6";
btn3.style = "background-color:#4d79ff";
btn4.style = "background-color:#00b8e6";
btn5.style = "background-color:#4dffb8";
btn6.style = "background-color:#00cc7a";
btn7.style = "background-color:#ff8c1a";
btn8.style = "background-color:#ffff80";

btn1.addEventListener("click", () => {
    noteBar.style = `background-color:#ff6666`;
    inputTitleBar.style = `background-color:#ff6666`;
    inputNoteBar.style = `background-color:#ff6666`;
    colorsArr.push(`background-color:#ff6666`);
});
btn2.addEventListener("click", () => {
    noteBar.style = `background-color:#ff4da6`;
    inputTitleBar.style = `background-color:#ff4da6`;
    inputNoteBar.style = `background-color:#ff4da6`;
    colorsArr.push(`background-color:#ff4da6`);
});
btn3.addEventListener("click", () => {
    noteBar.style = `background-color:#4d79ff`;
    inputTitleBar.style = `background-color:#4d79ff`;
    inputNoteBar.style = `background-color:#4d79ff`;
    colorsArr.push(`background-color:#4d79ff`);
});
btn4.addEventListener("click", () => {
    noteBar.style = `background-color:#00b8e6`;
    inputTitleBar.style = `background-color:#00b8e6`;
    inputNoteBar.style = `background-color:#00b8e6`;
    colorsArr.push(`background-color:#00b8e6`);
});
btn5.addEventListener("click", () => {
    noteBar.style = `background-color:#4dffb8`;
    inputTitleBar.style = `background-color:#4dffb8`;
    inputNoteBar.style = `background-color:#4dffb8`;
    colorsArr.push(`background-color:#4dffb8`);
});
btn6.addEventListener("click", () => {
    noteBar.style = `background-color:#00cc7a`;
    inputTitleBar.style = `background-color:#00cc7a`;
    inputNoteBar.style = `background-color:#00cc7a`;
    colorsArr.push(`background-color:#00cc7a`);
});
btn7.addEventListener("click", () => {
    noteBar.style = `background-color:#ff8c1a`;
    inputTitleBar.style = `background-color:#ff8c1a`;
    inputNoteBar.style = `background-color:#ff8c1a`;
    colorsArr.push(`background-color:#ff8c1a`);
});
btn8.addEventListener("click", () => {
    noteBar.style = `background-color:#ffff80`;
    inputTitleBar.style = `background-color:#ffff80`;
    inputNoteBar.style = `background-color:#ffff80`;
    colorsArr.push(`background-color:#ffff80`);
});
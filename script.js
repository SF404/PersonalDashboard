let body = document.querySelector('body');
let TileContainer = document.getElementById('tileContainer');


// -----------------------------------------
// ---------------Id Return Function--------
// -----------------------------------------
function getid(id) {
    return document.getElementById(`${id}`);
}
// -------------------------------------
// -----------Date and Time Handler-----
// -------------------------------------
function Time() {
    const d = new Date();
    getid("date").innerHTML = d.toDateString();
    let ct = d.getHours() + ":" + d.getMinutes();
    getid("time").innerHTML = ct;
}
// -------------------------------------
// ------------Search Handler-----------
// -------------------------------------
var searchType = 'www.google.com/search?q=';
function searchHandeler() {
    let question = document.querySelector('#searchBar');
    // let searchBtn=document.querySelector('#search_button');
    let url = 'https://' + searchType + question.value;
    window.open(url);
}
function Search(domain) {
    if (domain != undefined) {
        searchType = domain;
    }
    searchHandeler();
}
// ------------------------------------
// -----------Settings Popup-----------
// ------------------------------------
function viewSettingPopup() {
    let target = getid('settings');
    target.classList.toggle("show");
}
// ------------------------------------
// ------size Hanler (scaling)---------
// ------------------------------------
let incVal = 16;
function SizeHandler(e) {
    if (e == '+') { incVal += 4; }
    if (e == '-') { incVal -= 4; }
    body.style.fontSize = `${incVal}px`;
}
// -----------------------------------
// -----------Theme Functin-----------
// -----------------------------------
function themeShift() {
    body.classList.toggle("darkTheme");
}
// -----------------------------------
// -----------Create tiles------------ 
// -----------------------------------
let ShortCutNo = 0;
function createTiles() {
    let Tile = document.createElement("div");
    Tile.classList.add("tileCss");
    TileContainer.appendChild(Tile);
    for (let i = 0; i < 4; i++) {
        let SubTile = document.createElement("div");
        let Image = document.createElement("img");
        Image.src = `images/img${ShortCutNo}.png`;
        ShortCutNo++;



        SubTile.classList.add("subTile");
        Image.classList.add("imageCss");
        Tile.appendChild(SubTile);
        SubTile.appendChild(Image);
    }
}
for (let i = 0; i < 12; i++) {
    createTiles();
}

// -----------------------------------
// ---------Task List-----------------
// -----------------------------------
function ToggleTaskList() {
    let TaskListContainer = document.getElementById('taskListContainer');
    let taskAddButton = getid('addTask');
    let TaskStyle = document.querySelectorAll('.task');
    let ok;
    TaskStyle[0].disabled == false ? ok = true : ok = false;
    for (let i = 0; i < TaskStyle.length; i++) {
        TaskStyle[i].disabled = ok;
        TaskStyle[i].classList.toggle("taskStyle");
    }
    taskAddButton.classList.toggle("displayShow");
    TaskListContainer.classList.toggle("hideTaskList");
}
// -----------------------------------
// -----------Add Task----------------
// -----------------------------------
function createTask() {
    let Task = document.createElement("input");
    Task.classList.add("task");
    Task.classList.add("taskStyle");
    getid('tasks').appendChild(Task);
}
// -----------------------------------
// -----------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
const url = [
    'https://www.google.com/',
    'https://drive.google.com/',
    'https://www.youtube.com/',
    'https://web.whatsapp.com/',
    'https://classroom.google.com/',
    'https://mail.google.com/',
    'https://earth.google.com/',
    'https://translate.google.co.in',
    'https://www.linkedin.com/',
    'https://twitter.com/',
    'https://www.instagram.com/',
    'https://www.flaticon.com/',
    'https://github.com/',
    'https://stackoverflow.com/',
    'https://www.w3schools.com/'
];
let app = document.querySelectorAll('.subTile');
console.log(app.length);
for (let i = 0; i < app.length; i++) {
    app[i].onclick = () => myFunction(i);
}
function myFunction(i) {
    window.open(url[i]);
}




// -----------------------------------
// ----On load Function Calls---------
// -----------------------------------
Time();
// -----------------------------------




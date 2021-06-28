let taskbar = document.getElementById("taskbar")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];
let searchmenu = document.getElementsByClassName("searchmenu")[0];
let file_explorer = document.getElementsByClassName("file_explorer")[0];

function start(){
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
};

function search(){
    if(searchmenu.style.bottom == "50px"){
        searchmenu.style.bottom = "-655px"
    }
    else{
        searchmenu.style.bottom = "50px"
    }
};

function file(){
    if(file_explorer.style.bottom == "50px"){
        file_explorer.style.bottom = "-655px"
    }
    else{
        file_explorer.style.bottom = "50px"
    }
};
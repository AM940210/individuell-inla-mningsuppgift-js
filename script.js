window.addEventListener("DOMContentLoaded", main);

function main() {
    loadStartScene();
}

function loadStartScene() {
    const startBtn = document.getElementById("startBtn");
    const para = document.createElement("p");
    para.innerHTML = "Find the key! Look everywhere in the room.";

    document.body.appendChild(para);
    startBtn.onclick = mainPage;
}

function mainPage() {
    const startPage = document.getElementById("startPage");
    startPage.src = "/images/dailyRoom.jpg";
    startPage.classList.add("fullscreen");
    const para = document.createElement("p");
    para.innerHTML = "Let's have a closer look to the item."

    document.body.appendChild(para);

    const startBtn = document.getElementById("startBtn");
    startBtn.textContent = "Click";
    startBtn.onclick = firstPage
}

function firstPage() {
    startPage.src = "/images/backpag.png";
    startPage.classList.add("first-page");
    const para = document.createElement("p");
    para.innerHTML = "Go back! Not much to see here!";

    document.body.appendChild(para);

    startBtn.textContent = "Click";
    startBtn.onclick = secondPage
}

function secondPage() {
    startPage.src = "/images/dailyRoomRoom.jpg";
    startPage.classList.add("second-page");
    const para = document.createElement("p");
    para.innerHTML = "Look some where else.";

    document.body.appendChild(para);

    startBtn.textContent = "Click";
    startBtn.onclick = thirdPage
}

function thirdPage() {
    startPage.src = "/images/earthglobe.png";
    startPage.classList.add("third-page");
    const para = document.createElement("p");
    para.innerHTML = "Nothing left to do here!.";

    document.body.appendChild(para);

    startBtn.textContent = "Click";
    startBtn.onclick = fortPage
}

function fortPage() {
    startPage.src = "/images/dailyRoomcopy.jpg";
    startPage.classList.add("fort-page");
    const para = document.createElement("p");
    para.innerHTML = "Take a closer look!";

    document.body.appendChild(para);

    startBtn.textContent = "Click";
    startBtn.onclick = fifthPage
}

function fifthPage() {
    startPage.src = "/images/CloseDrawer.png";
    startPage.classList.add("fifth-page");
    const para = document.createElement("p");
    para.innerHTML = "Take a closer look!";

    document.body.appendChild(para);

    startBtn.textContent = "Click";
    startBtn.onclick = sixthPage
}

function sixthPage() {
    startPage.src = "/images/Drawer.png";
    startPage.classList.add("sixth-page");
    const para = document.createElement("p");
    para.innerHTML = "Open the cabinet!";

    document.body.appendChild(para);

    startBtn.textContent = "Click";
    startBtn.onclick = sventhPage
}

function sventhPage() {
    startPage.src = "/images/key.png";
    startPage.classList.add("key");
    const para = document.createElement("p");
    para.innerHTML = "Here you go! You have the key";

    document.body.appendChild(para);

    startBtn.textContent = "Click";
    startBtn.onclick = eighthPage
}

function eighthPage() {
    startPage.src = "/images/Door.png";
    const para = document.createElement("p");
    para.innerHTML = "Yayyyyee! I'am out";

    document.body.appendChild(para);
}
































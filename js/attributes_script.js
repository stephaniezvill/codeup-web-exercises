let count = 0;
let currentColorIndex = -1
const colors= ["saddlebrown","yellow","firebrick","pink","cyan"]

function changeProfilePic(){
    document.querySelector("#profile-pic").src="https://upload.wikimedia.org/wikipedia/en/e/ec/Piratedavyjones.JPG";
}


function changeProfileName(){
    document.querySelector("#profile-name").innerHTML="Davey Jones"

}

function changeDescriptionFont(){
    document.querySelector("#profile-desc").classList.add("my-font")
}

function changeCardColor(){
    // document.querySelector("#profile-card"").classList.toggle("card-color")
    currentColorIndex++;
    if(currentColorIndex >= colors.length){
        currentColorIndex = 0;
    }
    document.querySelector("#profile-card").style.backgroundColor = colors[currentColorIndex];
}

function doEvents(){
    count++;
    if(count === 1) {
        changeProfilePic();
    } else if(count === 2){
        changeProfileName();
    } else if(count === 3) {
        changeDescriptionFont();
    } else if (count === 4) {
        const newName = window.prompt("Enter a new profile name");
        document.querySelector("#profile-name").innerHTML
    }
}

// every 2 seconds, toggle the card color
changeCardColor();

// window.setTimeout(changeProfilePic,2000);
// window.setTimeout(changeProfileName,4000);
// window.setTimeout(changeDescriptionFont,6000);
// window.setInterval(changeCardColor,2000);
window.setInterval(doEvents,2000)
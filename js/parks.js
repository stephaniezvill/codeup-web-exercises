// document.getElementById('highlightButton').addEventListener('click', function() {
//     let uls = document.querySelectorAll('ul');
//     uls.forEach(function(ul) {
//         let lastLi = ul.lastElementChild;
//         lastLi.classList.add('highlighted');
//     });
// });

document.querySelector("button").addEventListener("click", ()=> {
    document.querySelectorAll("ul").forEach(ul => {
        ul.lastElementChild.style.backgroundColor="yellow"
    });
});


// let h3Elements = document.querySelectorAll('h3');
// h3Elements.forEach(function(h3) {
//     h3.addEventListener('click', function() {
//         let ul = h3.nextElementSibling;
//         let lis = ul.children;
//         for (let i = 0; i < lis.length; i++) {
//             lis[i].style.fontWeight = 'bold';
//         }
//     });
// });

document.querySelectorAll("h3").forEach(h3 => {
    h3.addEventListener("click", () => {
        h3.nextElementSibling.style.fontWeight ="bold"
    });
});

// let lis = document.querySelectorAll('li');
// lis.forEach(function(li) {
//     li.addEventListener('click', function() {
//         let ul = li.parentElement;
//         ul.firstElementChild.style.color = 'blue';
//     });
// });

document.querySelectorAll("li").forEach(li => {
    li.addEventListener("click",()=> {
        li.parentElement.firstElementChild.style.color ="blue";
    });
});
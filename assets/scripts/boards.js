let container = document.querySelector('#container');

let state = new State();

// let p = 1;


// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if (i === 2 && j === 2) {
//             state.setState(i, j, 0)
//         } else {
//             state.setState(i, j, p)
//             p++;
//         }
//     }
// }
// console.log('sstatta : ', state.getState());
state.setState(0, 0, 1)
state.setState(0, 1, 3)
state.setState(0, 2, 6)
state.setState(1, 0, 7)
state.setState(1, 1, 4)
state.setState(1, 2, 8)
state.setState(2, 0, 2)
state.setState(2, 1, 5)
state.setState(2, 2, 0)




let domHtml = "";
for (let i = 0; i < 3; i++) {
    // domHtml += "<div class='row'>"
    for (let j = 0; j < 3; j++) {
        if (state.getState()[i][j] != 0) {
            domHtml += `<div class='box b-${i}-${j}' id='box-${i}-${j}'>${state.getState()[i][j]}</div>`;
        } else {
            domHtml += `<div class='box b-${i}-${j}' id='box-${i}-${j}'></div>`;
        }
    }
    // domHtml += "</div>"
}

container.innerHTML = domHtml;
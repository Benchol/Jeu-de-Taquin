let container = document.querySelector('#container');

// let p = 1;
let state = new State();


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


function refreshState() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            console.log("hh", document.querySelector(`.b-${i}-${j}`).innerText === "" ? 0 : parseInt(document.querySelector(`.b-${i}-${j}`).innerText));
            state.setState(i, j, document.querySelector(`.b-${i}-${j}`).innerText === "" ? 0 : parseInt(document.querySelector(`.b-${i}-${j}`).innerText))
                // console.log(state.getState()[i][j])
        }
    }
}

function move() {
    let path = [];
    // path.push([]);
    let i, j
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            console.log(state.state[x][y]);
            if (state.state[x][y] === 0) {
                i = x;
                j = y
            }
        }
    }
    let box_none = document.querySelector(`.b-${i}-${j}`);
    // console.log(box_none.className);
    console.log(box_none, i, j);
    // console.log(`{${i}, ${j}}`);

    // console.log((i + 1), (j + 1), (i - 1), (j - 1));

    if ((i + 1) < 3) {
        // console.log('One');
        path.push({
            i: parseInt(i + 1),
            j: parseInt(j)
        });
    }

    if (i - 1 >= 0) {
        // console.log('Two');
        path.push({
            i: parseInt(i - 1),
            j: parseInt(j)
        })
    }

    if (j + 1 < 3) {
        // console.log('Three');
        path.push({
            i: parseInt(i),
            j: parseInt(j + 1)
        })
    }

    if (j - 1 >= 0) {
        // console.log('Four');
        path.push({
            i: parseInt(i),
            j: parseInt(j - 1)
        })
    }

    // for (let p of path) {
    //     console.log(`{${p.i}, ${p.j}}`);
    // }

    return path;
}

let shuffle_func = async(deplacement) => {
    deplacement = []
    return new Promise((resolve) => {
        let time_count = 0
        window.setInterval(() => {
            if (time_count == 50) {
                // alert('caca')
                resolve(deplacement);
                return 0
            }

            path = [];
            path = move();
            console.log(path.length);
            choice = Math.floor(Math.random() * path.length + 1);
            let box = document.querySelector(`.b-${path[choice - 1].i}-${path[choice - 1].j}`);
            let i, j

            for (let x = 0; x < 3; x++) {
                for (let y = 0; y < 3; y++) {
                    if (state.state[x][y] === 0) {
                        i = x;
                        j = y
                    }
                }
            }
            let box_none = document.querySelector(`.b-${i}-${j}`);
            let box_none_classname = box_none.classList[1];
            let box_name = box.classList[1];
            console.log(box_name);

            // console.log('Name: ', box_name);
            box.classList.add(box_none_classname);
            box.classList.remove(box_name);
            box_none.classList.add(box_name);
            box_none.classList.remove(box_none_classname);
            refreshState()

            time_count++;
        }, 200);

        console.log('dee : ', deplacement[0]);
        console.log('First push', deplacement);
        // resolve(deplacement)
    }).then((depl) => {
        console.log('DE : ', deplacement[49]);
        resultat = depl
    })
}


// refreshState()
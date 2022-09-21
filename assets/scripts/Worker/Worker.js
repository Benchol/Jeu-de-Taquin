// import INode from "../Node/node";

importScripts('/assets/scripts/Node/node.js')

console.log('Heoro');

onmessage = (event) => {
    console.log('Loading...');
    let nodeChild = new INode(0, '', event.data, 0)
    let goals = bfs(nodeChild);
    postMessage(goals)
}

function checkState(state, stateToCheck) {
    let k = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (state[i][j] !== stateToCheck[i][j]) {
                k++;
            }
        }
    }

    if (k !== 0) {
        return false
    } else {
        return true
    }
}

function checkPath(path, state) {
    for (let s of path) {
        if (checkState(s.getState(), state.getState())) {
            return true;
        }
    }

    return false
}

function checkGoal(state) {
    let g = "";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            g += state[i][j].toString()
        }
    }

    // console.log('Goal : ', g)

    if (g === "123456780") {
        return true
    }

    return false
}

// const sleep = async(millisecond) => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(), millisecond)
//     })
// }

function buildPath(child, path) {
    let goals = []
    while (true) {
        let el = path.find(element => {
            if (child.getIdParent() === element.getId()) {
                return element
            }
        })

        goals.push(el)
        if (el.getId() === "") {
            break
        }
    }
    return goals
}

function bfs(node) {
    let idparent = 0;
    let file = [];
    let path = [];
    node.setId(idparent)
    file.push(node)
    while (file.length != 0) {
        let firstNode = file.shift();
        // firstNode.setId(idparent);
        path.push(firstNode)
        file.push(firstNode)
        for (let child of firstNode.getNodeChild()) {
            if (!checkPath(path, child) && !checkGoal(child.getState())) {
                child.setIdParent(firstNode.getId());
                idparent += 1
                child.setId(idparent);
                file.push(child);
                path.push(child);
            }
            if (checkGoal(child.getState())) {
                child.setId(idparent)
                path.push(child);
                console.log('Path => ', path.find(el => el.getId() === 403));
                let goals = []
                goals.push(child)
                while (true) {

                    let p = path.find(el => {
                        if (el.getId() === child.getIdParent()) {
                            child = el
                            return el
                        }
                    })
                    console.log("P element", p.id);
                    if (p)
                        goals.push(p)

                    if (p.move === "") {
                        return goals
                    }

                }

            }
        }
    }
}
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

    console.log('Goal : ', g)

    if (g === "123456780") {
        return true
    }

    return false
}

const sleep = async(millisecond) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), millisecond)
    })
}

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

                let goals = []
                goals.push(child)
                path.forEach(element => {
                    if (child.getIdParent() === element.getId()) {
                        goals.push(element)
                        child = element
                    }
                })
                let firstEl = path.find(el => {
                    if (el.getMove() === "") {
                        return el
                    }
                })
                goals.push(firstEl)
                return goals
            }
        }
    }
}
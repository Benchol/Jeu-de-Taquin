const sleep = (millisecond) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, millisecond)
    })
}

async function Solve(solution) {
    // let solution = ['T', 'R', 'B']
    let init = 0
    console.log('State ', state);

    let i = 0
    let j = 0

    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            // if (move.move === "") {
            //     move.move = 'T'
            // }
            console.log(state.state);
            if (state.state[x][y] === 0) {
                i = x
                j = y
            }
        }
    }
    for (let move of solution) {
        console.log(move.id);

        console.log('x, y', i, j);

        let boxNone = document.querySelector(`.b-${i}-${j}`)
        let special = boxNone.classList[1]
        switch (move.move) {
            case 'T':
                {
                    let topElement = document.querySelector(`.b-${i - 1}-${j}`)
                    let top = topElement.classList[1]
                    topElement.classList.remove(top)
                    boxNone.classList.add(top)
                    boxNone.classList.remove(special)
                    topElement.classList.add(special)
                    i = i - 1
                    break;
                }
            case 'B':
                {
                    let bottomElement = document.querySelector(`.b-${i + 1}-${j}`)
                    console.log(bottomElement, i + 1, j);
                    let bottom = bottomElement.classList[1]
                    bottomElement.classList.remove(bottom)
                    boxNone.classList.add(bottom)
                    boxNone.classList.remove(special)
                    bottomElement.classList.add(special)
                    i = i + 1
                    break;
                }
            case 'R':
                {
                    let rightElement = document.querySelector(`.b-${i}-${j + 1}`)
                    console.log(rightElement, i, j);
                    let right = rightElement.classList[1]
                    rightElement.classList.remove(right)
                    boxNone.classList.add(right)
                    boxNone.classList.remove(special)
                    rightElement.classList.add(special)
                    j = j + 1
                    break;
                }
            case 'L':
                {
                    let leftElement = document.querySelector(`.b-${i}-${j - 1}`)
                    let left = leftElement.classList[1]
                    leftElement.classList.remove(left)
                    boxNone.classList.add(left)
                    boxNone.classList.remove(special)
                    leftElement.classList.add(special)
                    j = j - 1
                    break;
                }

        }
        console.log('Move: ', move, i, j);
        await sleep(1000)
            // await sleep(2000);
    }
}

// Solve()
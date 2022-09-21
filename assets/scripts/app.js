let boxs = document.querySelectorAll('.box')

let solvebtn = document.querySelector('.solve')

let shuffle = document.querySelector('.shuffle')

// boxs.forEach(box => {
//     let i = box.id.split('-')[1]
//     let j = box.id.split('-')[2]
//     box.style.transform = `translateX(calc(100%*${j})) translateY(calc(100%*${i}))`;
// })

// console.log('Node : ', nodeChild.getNodeChild())

// Solve()

// console.log("worker work");

let worker = new Worker('assets/scripts/Worker/Worker.js')

solvebtn.addEventListener('click', () => {
    console.log('INTITTTT => ', state.getState());
    worker.postMessage(state.getState())

    worker.onmessage = (event) => {
        console.log("GG => ", event.data.reverse(), event.data.reverse().length);
        let goals = event.data.reverse()
        Solve(goals)
    }
})

shuffle.addEventListener('click', async() => {
    await shuffle_func()
})
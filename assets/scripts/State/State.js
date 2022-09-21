class State {
    constructor() {
        this.state = []
        for (let i = 0; i < 3; i++) {
            this.state[i] = []
            for (let j = 0; j < 3; j++) {
                this.state[i][j] = 0
            }
        }
    }


    getState() {
        return this.state;
    }

    setState(i, j, value) {
        this.state[i][j] = value;
    }

}
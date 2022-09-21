class INode {
    constructor(id, move, pstate, id_parent) {
        this.id = id;
        this.move = move;
        // this.state = pstate;
        this.state = [];
        this.id_parent = id_parent;
        this.marked = false;

        for (let i = 0; i < 3; i++) {
            this.state.push([]);
            for (let j = 0; j < 3; j++) {
                this.state[i][j] = pstate[i][j];
                // console.log('value : ', this.state[i][j])
                // console.log('ij : ', this.state[i][j]);
            }
        }


        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.state[i][j] = pstate[i][j];
            }
        }

    }

    getMove() {
        return this.move
    }

    setIdParent(id) {
        this.id_parent = id;
    }

    getIdParent() {
        return this.id_parent;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getState() {
        return this.state;
    }


    getNodeChild() {
        let x, y
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.state[i][j] === 0) {
                    x = i;
                    y = j
                }
            }
        }
        let child = [];
        // let grid;
        // let index = 0;

        if (x + 1 < 3) {
            let state = JSON.parse(JSON.stringify(this.state))
            let temp = state[x + 1][y];
            state[x][y] = temp;
            state[x + 1][y] = 0;
            let grid = new INode(0, 'B', state, this.id);
            child.push(grid)
                // temp = this.state[x + 1][y];
                // this.state[x][y] = 0;
                // this.state[x + 1][y] = temp;
        }
        if (x - 1 >= 0) {
            let state = JSON.parse(JSON.stringify(this.state))
            let temp = state[x - 1][y];
            state[x][y] = temp;
            state[x - 1][y] = 0;
            let grid = new INode(0, 'T', state, this.id);
            child.push(grid)
                // temp = this.state[x - 1][y];
                // this.state[x][y] = 0;
                // this.state[x - 1][y] = temp;
        }

        if (y - 1 >= 0) {
            let state = JSON.parse(JSON.stringify(this.state))
            let temp = state[x][y - 1];
            state[x][y] = temp;
            state[x][y - 1] = 0;
            let grid = new INode(0, 'L', state, this.id);
            child.push(grid)
                // temp = this.state[x][y - 1];
                // this.state[x][y - 1] = 0;
                // this.state[x][y - 1] = temp;
        }

        if (y + 1 < 3) {
            let state = JSON.parse(JSON.stringify(this.state))
            let temp = state[x][y + 1];
            state[x][y] = temp;
            state[x][y + 1] = 0;
            let grid = new INode(this.id + 2, 'R', state, this.id);
            child.push(grid)
                // temp = this.state[x][y + 1];
                // this.state[x][y + 1] = 0;
                // this.state[x][y + 1] = temp;
        }


        return child;
    }

}


// export default INode;
class Ship {
    constructor(length, hits = 0, sunk = false) {
        this.length = length;
        this.hits = hits;
    }

    hit() {
        this.hits += 1;
    }


    isSunk() {
        if(this.hits === this.length) {
            return true;
        }
        return false;
    }

}
export default Ship
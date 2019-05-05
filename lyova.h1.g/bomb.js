class Bomb extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    boom() {
        var datark = this.chooseCell(3);
        if (datark.length > 0) {
            for (var i in datark) {
                var newX = datark[i][0];
                var newY = datark[i][1];
                matrix[newY][newX] = 0;
                this.die();
            }

        }
    }
    die() {
        matrix[this.y][this.x] = 0;
    }
}
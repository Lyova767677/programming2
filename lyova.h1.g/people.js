class People extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.directions = "down";
        this.acted = false;
    }
    move() {
        if (this.acted == false) {

            var naxkinX = this.x;
            var naxkinY = this.y;

            if (this.y == matrix.length - 1 && this.x == matrix[0].length - 1) {
                this.x = 0;
                this.y = 0;
                this.directions = "down";
            }
            if (this.directions == "down") {
                this.y++;
            }
            else if (this.directions == "up") {
                this.y--;
            }
            if (this.y == matrix.length) {
                this.x++;
                this.y--;
                this.directions = "up";
            }
            else if (this.y == -1) {
                this.x++;
                this.y++;
                this.directions = "down";
            }

            matrix[this.y][this.x] = matrix[naxkinY][naxkinX];
            matrix[naxkinY][naxkinX] = 0;
            this.acted = true;
        }
    }
}
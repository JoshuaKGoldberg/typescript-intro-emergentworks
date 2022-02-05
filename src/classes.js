var Painting = /** @class */ (function () {
    function Painting(paintedBy, owner, year) {
        this.paintedBy = paintedBy;
        this.owner = owner;
        this.year = year;
        this.value = 123;
    }
    Painting.prototype.announce = function () {
        console.log("meee");
    };
    return Painting;
}());
new Painting(123, 4566, 789);

interface Art {
  value: number;
  owner: string;
  year: number;
}

class Painting implements Art {
  paintedBy: string;
  owner: string;
  year: number;
  value: number;

  constructor(paintedBy: string, owner: string, year: number) {
    this.paintedBy = paintedBy;
    this.owner = owner;
    this.year = year;

    this.value = 123;
  }

  announce() {
    console.log("meee");
  }
}

new Painting(123, 4566, 789);

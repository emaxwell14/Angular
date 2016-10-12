
abstract class Coin {
//  value: number;
// Accessor creates the value
  constructor(public value: number) {
    this.value = value;
  }


  abstract getImageUrl(): string;
}

class Quarter extends Coin {
  constructor() {
    super(.25);
  }

  getImageUrl (): string {
    return "./img/Quarter.png";
  }
}

class Dime extends Coin {
  constructor() {
    super(.1);
  }

  getImageUrl() {
    return "img/Dime.png";
  }
}

class Half extends Coin {
  constructor() {
    super(.5);
  }

  getImageUrl() {
    return "img/Half.png";
  }
}


class Dollar extends Coin {
  constructor() {
    super(1);
  }

  getImageUrl() {
    return "img/Dollar.jpg";
  }
}

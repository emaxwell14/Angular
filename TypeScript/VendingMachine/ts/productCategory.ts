abstract class ProductCategory {
  // Available to sub classes
  protected imgPath = "img/"
  name: string;
  abstract getImageUrl();
}


class SodaCategory extends ProductCategory {
  name = "Soda"
  getImageUrl() {
    return this.imgPath + "SodaCan.png";
  }
}

class NutsCategory extends ProductCategory {
    name = "Nuts"
    getImageUrl () {
        return this.imgPath + "Nuts.png";
    }
}

class ChipsCategory extends ProductCategory {
    name = "Potato chips"
    getImageUrl () {
        return this.imgPath + "Chips.png";
    }
}

class CandyCategory extends ProductCategory {
    name = "Candy"
    getImageUrl () {
        return this.imgPath + "Candy.png";
    }
}

class CandyBarCategory extends ProductCategory {
    name = "Candy bar"
    getImageUrl () {
        return this.imgPath + "CandyBar.png";
    }
}

// Require.js
export {CandyBarCategory as BarCategory, CandyCategory, ChipsCategory,
  NutsCategory, SodaCategory, ProductCategory}

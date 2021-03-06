import * as Categories from "./productCategory";

interface Product {
  name: string;
  price: number;
  // ? makes it optional
  category?: Categories.ProductCategory;
}

class Initial implements Product {
    name = "Please select a product"
    price = 0
}

class CocaCola implements Product {
    name: string = "Coca-Cola"
    price = 2.30
    category = new Categories.SodaCategory()
}

class Fanta implements Product {
    name: string = "Fanta"
    price = 2
    category = new Categories.SodaCategory()
}

class Sprite implements Product {
    name: string = "Sprite"
    price = 1.80
    category = new Categories.SodaCategory()
}

class Peanuts implements Product {
    name: string = "Peanuts"
    price = 1.50
    category = new Categories.NutsCategory()
}

class Cashews implements Product {
    name: string = "Cashews"
    price = 2.80
    category = new Categories.NutsCategory()
}

class Plain implements Product {
    name: string = "Plain"
    price = 2
    category = new Categories.ChipsCategory()
}

class Cheddar implements Product {
    name: string = "Cheddar"
    price = 2
    category = new Categories.ChipsCategory()
}

class Mints implements Product {
    name: string = "Mints"
    price = 1.30
    category = new Categories.CandyCategory()
}

class Gummies implements Product {
    name: string = "Gummies"
    price = 1.90
    category = new Categories.CandyCategory()
}

class Herseys implements Product {
    name: string = "Hersey's"
    price = 1.30
    category = new Categories.BarCategory()
}

class MilkyWay implements Product {
    name: string = "Milky Way"
    price = 1.80
    category = new Categories.BarCategory()
}

export {Product, Initial, CocaCola, Fanta, Sprite, Herseys,
  Gummies, Mints, MilkyWay, Cheddar, Peanuts, Cashews, Plain}


/**
For creating a randomly generated product. Could be replaced with
a http service
*/

import * as Products from "./products";

// Used to be a static function in a class but using require.js
// to export the function directly
export default function getProduct(): Products.Product {
  let random = Math.floor(Math.random() * 11);
  switch(random) {
    case 0: return new Products.CocaCola();
    case 1: return new Products.Fanta();
    case 2: return new Products.Sprite();
    case 3: return new Products.Peanuts();
    case 4: return new Products.Cashews();
    case 5: return new Products.Plain();
    case 6: return new Products.Cheddar();
    case 7: return new Products.Mints();
    case 8: return new Products.Gummies();
    case 9: return new Products.Herseys();
    case 10: return new Products.MilkyWay();
  }

}

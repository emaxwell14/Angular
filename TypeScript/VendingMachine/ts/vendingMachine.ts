class VendingMachine {
  //  private paid: number = 0;
  private paid = ko.observable(0);

  selectedCell = ko.observable(new Cell(new Initial()))

// Comuted when any if the observables are updated
  canPay = ko.pureComputed(() => this.paid() -
    this.selectedCell().product.price >= 0)


  pay = (): void => {
    if (this.selectedCell().stock() < 1) {
      alert ("Sold Out");
      return;
    }
    let currentPaid = this.paid()
    this.paid(Math.round(((currentPaid - this.selectedCell().product.price)*100))/100)
    let currentStock = this.selectedCell().stock();
    this.selectedCell().stock(currentStock - 1);
    this.selectedCell().sold(true);
  }
  // Same as observable but with add remove methods
  cells = ko.observableArray([])

  set size(givenSize: VendingMachineSize) {
    // clear array
    this.cells([]);

    for(let index=0; index < givenSize; index++) {
      let product = productFactory.GetProduct();
      this.cells.push(new Cell(product));
    }
  }

  select = (cell: Cell): void => {
    cell.sold(false);
    this.selectedCell(cell);

  }

/* Regular js - 'this' references the calling object
  acceptCoin (coin: Quarter) : void {
    this.paid = this.paid + coin.Value;
  }
  */
  // Regular js - If assigning a method to a var, the 'this' references the
  // JS window object

  /*
   Arrow function - 'this' aways refers to the class in which the method lies.
   Same as Java
  */
  public acceptedCoins: Coin[] = [new Quarter(), new Dime(), new Half(), new Dollar()]
  acceptCoin = (coin: Coin): void => {
    //  this.paid = this.paid + coin.Value;
    //  var element = document.getElementById("total");
    //  element.innerHTML = this.paid.toString();

    // Replacing with knockout. Get value by calling as a method
    let oldTotal = this.paid();
    this.paid(oldTotal + coin.value);
  }

}

// Public creates a class level property for the passed value
class Cell {
  constructor (public product: Product) {

  }
  stock = ko.observable(3);
  sold = ko.observable(false);
}

/*
Only allow certain sizes
Easier to replace
More readable
*/
enum VendingMachineSize {
  small = 6,
  medium = 9,
  large = 12
}

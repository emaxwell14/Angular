define(["require", "exports", "./coin", "./products", "./productFactory"], function (require, exports, Coins, products_1, productFactory_1) {
    "use strict";
    (function (VendingMachineSize) {
        VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
        VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
        VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
    })(exports.VendingMachineSize || (exports.VendingMachineSize = {}));
    var VendingMachineSize = exports.VendingMachineSize;
    var Cell = (function () {
        function Cell(product) {
            this.product = product;
            this.stock = ko.observable(3);
            this.sold = ko.observable(false);
        }
        return Cell;
    }());
    var VendingMachine = (function () {
        function VendingMachine() {
            var _this = this;
            this.paid = ko.observable(0);
            this.selectedCell = ko.observable(new Cell(new products_1.Initial()));
            this.canPay = ko.pureComputed(function () { return _this.paid() -
                _this.selectedCell().product.price >= 0; });
            this.pay = function () {
                if (_this.selectedCell().stock() < 1) {
                    alert("Sold Out");
                    return;
                }
                var currentPaid = _this.paid();
                _this.paid(Math.round(((currentPaid - _this.selectedCell().product.price) * 100)) / 100);
                var currentStock = _this.selectedCell().stock();
                _this.selectedCell().stock(currentStock - 1);
                _this.selectedCell().sold(true);
            };
            this.cells = ko.observableArray([]);
            this.select = function (cell) {
                cell.sold(false);
                _this.selectedCell(cell);
            };
            this.acceptedCoins = [new Coins.Quarter(), new Coins.Dime(),
                new Coins.Half(), new Coins.Dollar()];
            this.acceptCoin = function (coin) {
                var oldTotal = _this.paid();
                _this.paid(oldTotal + coin.value);
            };
        }
        Object.defineProperty(VendingMachine.prototype, "size", {
            set: function (givenSize) {
                this.cells([]);
                for (var index = 0; index < givenSize; index++) {
                    var product = productFactory_1.default();
                    this.cells.push(new Cell(product));
                }
            },
            enumerable: true,
            configurable: true
        });
        return VendingMachine;
    }());
    exports.VendingMachine = VendingMachine;
});
//# sourceMappingURL=vendingMachine.js.map
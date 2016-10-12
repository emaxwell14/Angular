define(["require", "exports", "./products"], function (require, exports, Products) {
    "use strict";
    function getProduct() {
        var random = Math.floor(Math.random() * 11);
        switch (random) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = getProduct;
});
//# sourceMappingURL=productFactory.js.map
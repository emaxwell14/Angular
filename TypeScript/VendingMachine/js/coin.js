var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Coin = (function () {
    function Coin(value) {
        this.value = value;
        this.value = value;
    }
    return Coin;
}());
var Quarter = (function (_super) {
    __extends(Quarter, _super);
    function Quarter() {
        return _super.call(this, .25) || this;
    }
    Quarter.prototype.getImageUrl = function () {
        return "./img/Quarter.png";
    };
    return Quarter;
}(Coin));
var Dime = (function (_super) {
    __extends(Dime, _super);
    function Dime() {
        return _super.call(this, .1) || this;
    }
    Dime.prototype.getImageUrl = function () {
        return "img/Dime.png";
    };
    return Dime;
}(Coin));
var Half = (function (_super) {
    __extends(Half, _super);
    function Half() {
        return _super.call(this, .5) || this;
    }
    Half.prototype.getImageUrl = function () {
        return "img/Half.png";
    };
    return Half;
}(Coin));
var Dollar = (function (_super) {
    __extends(Dollar, _super);
    function Dollar() {
        return _super.call(this, 1) || this;
    }
    Dollar.prototype.getImageUrl = function () {
        return "img/Dollar.jpg";
    };
    return Dollar;
}(Coin));
//# sourceMappingURL=coin.js.map
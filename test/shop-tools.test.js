var expect = require("chai").expect;

var getPrices = require("../src/shop-tools.js").getPrices()

describe("getPrices", function(){
    var products = getPrices();

    it("Should return an object wich describes the prices of your products", function()){
        expect(products).to.eql({
		banana: 1,
		potato : 2,
		tomato : 3,
		cucumber : 4,
		salad : 5,
		apple : 6
        })
    }
})
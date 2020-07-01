describe("pow", function() {

    describe("raises x to power of 3", function(){
        function testPower(x) {
            let expected = x * x * x
            it(`${x} raised to power of 3 is ${expected}`, function(){
                assert.equal(pow(x, 3), expected)
            })
        }
    
        for (let x = 1; x <= 5; x++) {
            testPower(x)
        }
    })

    it("3 raised to power of 0 is 1", function(){
        assert.equal(pow(3, 0), 1)
    })

})
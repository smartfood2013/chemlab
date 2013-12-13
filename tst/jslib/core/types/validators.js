test("test_rangeValidator", function () {

    var errorMsg = "Test error message";
    var rv = cl.validators.rangeValidator(20, 100, errorMsg);
    var xml = rv.toXml();

    ok(rv.validate(40), "test for value within range");
    ok(!rv.validate(200), "test for value out of range");

    equal(rv.errorMsg, errorMsg, "test error message");

    var xmlDoc = $.parseXML(xml);
    var $xml = $(xmlDoc);
    var $validator = $xml.find("validator[name='rangeValidator']"); 
    var $minValue = $validator.find('minValue');
    var $maxValue = $validator.find('maxValue');
    var $errorMsg = $validator.find('errorMsg');


    equal(errorMsg, $errorMsg.text(), "test error message");
    equal(parseInt($minValue.text(), 10), 20, "test minValue");
    equal(parseInt($maxValue.text(), 10), 100, "test maxValue");
});

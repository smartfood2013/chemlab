test("test_DataSheetEntry", function() {
    var ENTRY_NAME = "testEntry01";
    var ENTRY_DESC = "Test Entry Desc";
    var ENTRY_VLDTR  = cl.validators.rangeValidator(20, 200, "Test Validator");
    var ENTRY_PASS_VALUE = 130;
    var ENTRY_FAIL_VALUE = 230;
    var testEntry = {
        name : ENTRY_NAME,
        desc : ENTRY_DESC,
        validator : ENTRY_VLDTR
    };
        
    var entry = cl.DataSheetEntry(testEntry);
    equal(entry.name(), ENTRY_NAME, "Check entry Name");
    equal(entry.desc(), ENTRY_DESC, "Check entry desc");
    entry.setValue(ENTRY_PASS_VALUE);
    equal(entry.getValue(), ENTRY_PASS_VALUE, "Check entry set n get value");
    ok(entry.validate(), "Check validate() pass");
    entry.setValue(ENTRY_FAIL_VALUE);
    ok(!entry.validate(), "Check validate() fail");
});

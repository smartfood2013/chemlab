var cl = {};
/**
DataSheetEntry.js : Describes the structure of data need to be collected.
*/

cl.DataSheetEntry = function (entry, secret) {
    "use strict";

    var secret = secret || {};
    secret.name = entry.name;
    secret.desc = entry.desc;
    secret.validator = entry.validator;
    secret.value = null;

    return {
        name : function () { return secret.name; },
        desc : function () { return secret.desc; },
        getValue : function () { return secret.value; },
        setValue : function (value) { secret.value = value; },
        validate : function () { return secret.validator.validate(secret.value); }
    };
};

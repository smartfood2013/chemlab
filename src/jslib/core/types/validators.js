/**
 *
 */
cl.validators = {
    rangeValidator : function (minValue, maxValue, errorMsg) {
        return {
            validate : function (value) {
                return value >= minValue && value <= maxValue;
            },

            errorMsg : errorMsg,

            toXml : function () {
                return "<validator name='rangeValidator'>" +
                    "<minValue>" + minValue + "</minValue>" +
                    "<maxValue>" + maxValue + "</maxValue>" +
                    "<errorMsg>" + errorMsg + "</errorMsg>" +
                    "</validator>";
            }
        };
    }
};


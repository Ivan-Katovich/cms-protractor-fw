
var testConstants = {

    REGEX_TO_EXTRACT_PROVIDER_ID_FROM_LOGO_SRC: /^(?:.*)\/([a-z0-9]*)\.(?:png|jpg)$/i,
    REGEXP_TO_EXTRACT_DATES_FROM_URL: /\d{4}-\d{2}-\d{2}/g,
    REGEXP_TO_EXTRACT_DATE_AND_DURATION_FROM_URL: /\d{4}-\d{2}-\d{2}\/\d/g,
    REGEXP_BASE_URL: /^(https?:\/\/www.(?:[\w|\W]+)?.?travelsupermarket.com\/?)\??([\w|\W]*)?/,
    REGEXP_URL_MAIN_PART: /^https?:\/\/www.(?:[\w|\W]+)?.?travelsupermarket.com\/en-gb\/(flight|carhire|hotels|holidays)\/results\//,
    REGEXP_TO_CHECK_FLIGHTS_RESULTS_URL_ITEMS: /([A-Z]{3})\/(\d{4}-\d{2}-\d{2})\/([A-Z]{3})\/(\d{4}-\d{2}-\d{2})?\/?(\d)\/(\d)\/(\d)\/([E|P|B|F])\/(\d)\/(false|true)\/(false|true)\/$/,
    REGEXP_TO_CHECK_CARHIRE_RESULTS_URL_ITEMS: /(\w{24})\/(\w{24})\/(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})\/(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})\/(\d{2})\/$/,
    REGEXP_TO_CHECK_HOLIDAYS_RESULTS_URL_ITEMS: /(\w{24})(:\w{24})*\/(\w{24})\/(\d{4}-\d{2}-\d{2})\/(\d{1,2})\/\?room=A(\d)(:C\d{1,2})*$/,
    REGEXP_TO_CHECK_HOTELS_RESULTS_URL_ITEMS: /(\w{24})\/(\d{4}-\d{2}-\d{2})\/(\d{1,2})\/(\?room=(A\d)(:C\d{1,2})*)(&room=(A\d)(:C\d{1,2})*)?$/,
    REGEXP_TO_PARSE_DATAPICKER_VALUE: /^(d:[+|-]?\d{1,2})?\/?(m:[+|-]?\d{1,2})?\/?(y:[+|-]?\d{1,4})?$/

};

module.exports = testConstants;

const util = require("util");

const printNestedObject = (nestedBoject) => {
  console.log(
    util.inspect(nestedBoject, false, null, true /* enable colors */)
  );
};

module.exports = { printNestedObject };

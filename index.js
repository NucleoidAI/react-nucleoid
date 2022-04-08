const { version } = require("./package.json");
const parser = require(`./dist/nucleoidjs-${version}/src/libs/parser`);

module.exports.parser = parser;

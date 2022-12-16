const { format, provider } = require("./config.js");

(async function main() {
  let res = await provider.getCode(process.argv[2])
  console.log(res)
})();

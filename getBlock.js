const { format, provider } = require("./config.js");

(async function main() {
  let res = await provider.getBlock("latest");
  console.log(res)
})();

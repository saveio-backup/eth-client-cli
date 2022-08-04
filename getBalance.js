const { format, provider } = require("./config.js");

(async function main() {
  const address = process.argv[2];
  let balance = await provider.getBalance(address);
  format(balance);
})();

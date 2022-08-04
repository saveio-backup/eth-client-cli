const { format, provider, signer, address } = require("./config.js");

(async function main() {
  const from = address;
  const to = process.argv[2];

  let fromBalance = await provider.getBalance(from);
  format(fromBalance);
  let toBalance = await provider.getBalance(to);
  format(toBalance);

  const tx = {
    from: from,
    to: to,
    value: 100,
  };
  await signer.sendTransaction(tx).then(console.log);

  fromBalance = await provider.getBalance(from);
  format(fromBalance);
  toBalance = await provider.getBalance(to);
  format(toBalance);
})();

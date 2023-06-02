const { format, provider, signer, address } = require("./config.js");

(async function main() {
  const from = address;
  const to = process.argv[2];

  for (let i = 0; i < 10000; i++) {
    let fromBalance = await provider.getBalance(from);
    // format(fromBalance);
    let toBalance = await provider.getBalance(to);
    // format(toBalance);
  
    const tx = {
      from: from,
      to: to,
      value: BigInt(100 * Math.pow(10, 14)),
    };
    await signer.sendTransaction(tx)
  
    fromBalance = await provider.getBalance(from);
    // format(fromBalance);
    toBalance = await provider.getBalance(to);
    format(toBalance);
  }
  
})();

const { ethers } = require("ethers");

let envFlag = 'opdev'

let env = {
  opdev: {
    url: "http://106.75.76.46:33373",
    address: "0x00000398232e2064f896018496b4b44b3d62751f",
    privateKey: "6587ae678cf4fc9a33000cdbf9f35226b71dcc6a4684a31203241f9bcfd55d27"
  }
}

const url = env[envFlag].url;
const address = env[envFlag].address;
const privateKey = env[envFlag].privateKey;

let provider = new ethers.providers.JsonRpcProvider(url);
let signer = new ethers.Wallet(privateKey, provider);

let format = (x) => console.log(ethers.utils.formatUnits(x, 0));

module.exports = {
  ethers: ethers,
  address: address,
  provider: provider,
  signer: signer,
  format: format,
};

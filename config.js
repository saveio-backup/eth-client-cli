const { ethers } = require("ethers");

const url = "http://127.0.0.1:8545";
const address = "0x159F5EFDAb6747E72c8827BeA109bf8880BA076c";
const privateKey =
  "3fd8c7f630a5517da7a01c97ee5e3e2d36f79bf254bd6d85f78895541aaa860a";

let provider = new ethers.providers.JsonRpcProvider(url);
let signer = new ethers.Wallet(privateKey, provider);

let format = (x) => console.log(ethers.utils.formatUnits(x, 0));

exports.address = address;
exports.provider = provider;
exports.signer = signer;

exports.format = format;

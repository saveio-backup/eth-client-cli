const { format, provider, signer, address, ethers } = require("./config.js");

let abi = [
  { inputs: [], name: "DifferenceFileOwner", type: "error" },
  {
    inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    name: "FileNotExist",
    type: "error",
  },
  {
    inputs: [{ internalType: "uint64", name: "", type: "uint64" }],
    name: "FileProveFailed",
    type: "error",
  },
  { inputs: [], name: "FileProveNotFileOwner", type: "error" },
  { inputs: [], name: "FirstUserSpaceOperationError", type: "error" },
  { inputs: [], name: "InsufficientFunds", type: "error" },
  { inputs: [], name: "InvalidProfit", type: "error" },
  { inputs: [], name: "NodeSectorProvedInTimeError", type: "error" },
  {
    inputs: [
      { internalType: "uint64", name: "got", type: "uint64" },
      { internalType: "uint64", name: "want", type: "uint64" },
    ],
    name: "NotEmptySector",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint256", name: "got", type: "uint256" },
      { internalType: "uint256", name: "want", type: "uint256" },
    ],
    name: "NotEnoughPledge",
    type: "error",
  },
  { inputs: [], name: "NotEnoughSpace", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "got", type: "uint256" },
      { internalType: "uint256", name: "want", type: "uint256" },
    ],
    name: "NotEnoughTransfer",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint64", name: "got", type: "uint64" },
      { internalType: "uint64", name: "want", type: "uint64" },
    ],
    name: "NotEnoughVolume",
    type: "error",
  },
  {
    inputs: [{ internalType: "uint64", name: "", type: "uint64" }],
    name: "OpError",
    type: "error",
  },
  { inputs: [], name: "ParamsError", type: "error" },
  {
    inputs: [{ internalType: "uint64", name: "", type: "uint64" }],
    name: "SectorOpError",
    type: "error",
  },
  {
    inputs: [{ internalType: "uint64", name: "", type: "uint64" }],
    name: "SectorProveFailed",
    type: "error",
  },
  {
    inputs: [{ internalType: "uint64", name: "", type: "uint64" }],
    name: "UserspaceChangeError",
    type: "error",
  },
  { inputs: [], name: "UserspaceDeleteError", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "got", type: "uint256" },
      { internalType: "uint256", name: "want", type: "uint256" },
    ],
    name: "UserspaceInsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint256", name: "got", type: "uint256" },
      { internalType: "uint256", name: "want", type: "uint256" },
    ],
    name: "UserspaceInsufficientSpace",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint256", name: "got", type: "uint256" },
      { internalType: "uint256", name: "want", type: "uint256" },
    ],
    name: "UserspaceWrongExpiredHeight",
    type: "error",
  },
  { inputs: [], name: "ZeroProfit", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum FsEvent",
        name: "eventType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockHeight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "walletAddr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "sectorId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "enum ProveLevel",
        name: "provLevel",
        type: "uint8",
      },
      { indexed: false, internalType: "uint64", name: "size", type: "uint64" },
      { indexed: false, internalType: "bool", name: "isPlots", type: "bool" },
    ],
    name: "CreateSectorEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum FsEvent",
        name: "eventType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockHeight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "fileHash",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "walletAddr",
        type: "address",
      },
    ],
    name: "DeleteFileEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum FsEvent",
        name: "eventType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockHeight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "fileHashs",
        type: "bytes[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "walletAddr",
        type: "address",
      },
    ],
    name: "DeleteFilesEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum FsEvent",
        name: "eventType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockHeight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "walletAddr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "sectorId",
        type: "uint64",
      },
    ],
    name: "DeleteSectorEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum FsEvent",
        name: "eventType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockHeight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "fileHash",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "walletAddr",
        type: "address",
      },
    ],
    name: "FilePDPSuccessEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          { internalType: "address", name: "From", type: "address" },
          { internalType: "address", name: "To", type: "address" },
          { internalType: "uint64", name: "Value", type: "uint64" },
        ],
        indexed: false,
        internalType: "struct TransferState",
        name: "state",
        type: "tuple",
      },
    ],
    name: "GetUpdateCostEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum FsEvent",
        name: "eventType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockHeight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "walletAddr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "profit",
        type: "uint64",
      },
    ],
    name: "ProveFileEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum FsEvent",
        name: "eventType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockHeight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "walletAddr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "nodeAddr",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "volume",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "serviceTime",
        type: "uint64",
      },
    ],
    name: "RegisterNodeEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum FsEvent",
        name: "eventType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockHeight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "walletAddr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum UserSpaceType",
        name: "sizeType",
        type: "uint8",
      },
      { indexed: false, internalType: "uint64", name: "size", type: "uint64" },
      {
        indexed: false,
        internalType: "enum UserSpaceType",
        name: "countType",
        type: "uint8",
      },
      { indexed: false, internalType: "uint64", name: "count", type: "uint64" },
    ],
    name: "SetUserSpaceEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum FsEvent",
        name: "eventType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockHeight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "fileHash",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "fileSize",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "walletAddr",
        type: "address",
      },
      { indexed: false, internalType: "uint64", name: "cost", type: "uint64" },
      {
        indexed: false,
        internalType: "bool",
        name: "isPlotFile",
        type: "bool",
      },
    ],
    name: "StoreFileEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum FsEvent",
        name: "eventType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockHeight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "walletAddr",
        type: "address",
      },
    ],
    name: "UnRegisterNodeEvent",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint64", name: "Pledge", type: "uint64" },
          { internalType: "uint64", name: "Profit", type: "uint64" },
          { internalType: "uint64", name: "Volume", type: "uint64" },
          { internalType: "uint64", name: "RestVol", type: "uint64" },
          { internalType: "uint64", name: "ServiceTime", type: "uint64" },
          { internalType: "address", name: "WalletAddr", type: "address" },
          { internalType: "bytes", name: "NodeAddr", type: "bytes" },
        ],
        internalType: "struct NodeInfo",
        name: "nodeInfo",
        type: "tuple",
      },
    ],
    name: "CalculateNodePledge",
    outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "walletAddr", type: "address" }],
    name: "Cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes", name: "nodeAddr", type: "bytes" }],
    name: "GetNodeInfoByNodeAddr",
    outputs: [
      {
        components: [
          { internalType: "uint64", name: "Pledge", type: "uint64" },
          { internalType: "uint64", name: "Profit", type: "uint64" },
          { internalType: "uint64", name: "Volume", type: "uint64" },
          { internalType: "uint64", name: "RestVol", type: "uint64" },
          { internalType: "uint64", name: "ServiceTime", type: "uint64" },
          { internalType: "address", name: "WalletAddr", type: "address" },
          { internalType: "bytes", name: "NodeAddr", type: "bytes" },
        ],
        internalType: "struct NodeInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "walletAddr", type: "address" }],
    name: "GetNodeInfoByWalletAddr",
    outputs: [
      {
        components: [
          { internalType: "uint64", name: "Pledge", type: "uint64" },
          { internalType: "uint64", name: "Profit", type: "uint64" },
          { internalType: "uint64", name: "Volume", type: "uint64" },
          { internalType: "uint64", name: "RestVol", type: "uint64" },
          { internalType: "uint64", name: "ServiceTime", type: "uint64" },
          { internalType: "address", name: "WalletAddr", type: "address" },
          { internalType: "bytes", name: "NodeAddr", type: "bytes" },
        ],
        internalType: "struct NodeInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GetNodeList",
    outputs: [
      {
        components: [
          { internalType: "uint64", name: "Pledge", type: "uint64" },
          { internalType: "uint64", name: "Profit", type: "uint64" },
          { internalType: "uint64", name: "Volume", type: "uint64" },
          { internalType: "uint64", name: "RestVol", type: "uint64" },
          { internalType: "uint64", name: "ServiceTime", type: "uint64" },
          { internalType: "address", name: "WalletAddr", type: "address" },
          { internalType: "bytes", name: "NodeAddr", type: "bytes" },
        ],
        internalType: "struct NodeInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint64", name: "Pledge", type: "uint64" },
          { internalType: "uint64", name: "Profit", type: "uint64" },
          { internalType: "uint64", name: "Volume", type: "uint64" },
          { internalType: "uint64", name: "RestVol", type: "uint64" },
          { internalType: "uint64", name: "ServiceTime", type: "uint64" },
          { internalType: "address", name: "WalletAddr", type: "address" },
          { internalType: "bytes", name: "NodeAddr", type: "bytes" },
        ],
        internalType: "struct NodeInfo",
        name: "nodeInfo",
        type: "tuple",
      },
    ],
    name: "GetPledgeUpdate",
    outputs: [{ internalType: "int64", name: "", type: "int64" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "walletAddr", type: "address" }],
    name: "IsNodeRegisted",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint64", name: "Pledge", type: "uint64" },
          { internalType: "uint64", name: "Profit", type: "uint64" },
          { internalType: "uint64", name: "Volume", type: "uint64" },
          { internalType: "uint64", name: "RestVol", type: "uint64" },
          { internalType: "uint64", name: "ServiceTime", type: "uint64" },
          { internalType: "address", name: "WalletAddr", type: "address" },
          { internalType: "bytes", name: "NodeAddr", type: "bytes" },
        ],
        internalType: "struct NodeInfo",
        name: "nodeInfo",
        type: "tuple",
      },
    ],
    name: "NodeUpdate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint64", name: "Pledge", type: "uint64" },
          { internalType: "uint64", name: "Profit", type: "uint64" },
          { internalType: "uint64", name: "Volume", type: "uint64" },
          { internalType: "uint64", name: "RestVol", type: "uint64" },
          { internalType: "uint64", name: "ServiceTime", type: "uint64" },
          { internalType: "address", name: "WalletAddr", type: "address" },
          { internalType: "bytes", name: "NodeAddr", type: "bytes" },
        ],
        internalType: "struct NodeInfo",
        name: "nodeInfo",
        type: "tuple",
      },
    ],
    name: "Register",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint64", name: "Pledge", type: "uint64" },
          { internalType: "uint64", name: "Profit", type: "uint64" },
          { internalType: "uint64", name: "Volume", type: "uint64" },
          { internalType: "uint64", name: "RestVol", type: "uint64" },
          { internalType: "uint64", name: "ServiceTime", type: "uint64" },
          { internalType: "address", name: "WalletAddr", type: "address" },
          { internalType: "bytes", name: "NodeAddr", type: "bytes" },
        ],
        internalType: "struct NodeInfo",
        name: "nodeInfo",
        type: "tuple",
      },
    ],
    name: "UpdateNodeInfo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "walletAddr", type: "address" }],
    name: "WithDrawProfit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IConfig", name: "_config", type: "address" },
      { internalType: "contract ISector", name: "_sector", type: "address" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
let contractAddress = "0x0FCc3b2a1Fe79DAefF2DE1Fdc17D9cd3aEaf6d3f";

(async function main() {
  let node = new ethers.Contract(contractAddress, abi, provider);

  const tx = node.CalculateNodePledge({
    Pledge: 0,
    Profit: 0,
    Volume: 1000 * 1000,
    RestVol: 0,
    ServiceTime: 0,
    WalletAddr: address,
    NodeAddr: new Array(),
  });
  let res = await tx;
  console.log(res);
})();

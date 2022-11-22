/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  CryptoDevs,
  CryptoDevsInterface,
} from "../../contracts/CryptoDevs";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "baseURI",
        type: "string",
      },
      {
        internalType: "address",
        name: "whitelistContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "_paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxTokenIds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "presaleEnded",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "presaleMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "presaleStarted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "val",
        type: "bool",
      },
    ],
    name: "setPaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setPresale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenIds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6080604052662386f26fc10000600c556014600e553480156200002157600080fd5b50604051620024ba380380620024ba83398101604081905262000044916200017f565b6040518060400160405280600b81526020016a43727970746f204465767360a81b8152506040518060400160405280600281526020016110d160f21b8152508160009081620000949190620002f6565b506001620000a38282620002f6565b505050620000c0620000ba620000f660201b60201c565b620000fa565b600b620000ce8382620002f6565b50601080546001600160a01b0319166001600160a01b039290921691909117905550620003c2565b3390565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200017a57600080fd5b919050565b600080604083850312156200019357600080fd5b82516001600160401b0380821115620001ab57600080fd5b818501915085601f830112620001c057600080fd5b815181811115620001d557620001d56200014c565b604051601f8201601f19908116603f011681019083821181831017156200020057620002006200014c565b816040528281526020935088848487010111156200021d57600080fd5b600091505b8282101562000241578482018401518183018501529083019062000222565b60008484830101528096505050506200025c81860162000162565b925050509250929050565b600181811c908216806200027c57607f821691505b6020821081036200029d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002f157600081815260208120601f850160051c81016020861015620002cc5750805b601f850160051c820191505b81811015620002ed57828155600101620002d8565b5050505b505050565b81516001600160401b038111156200031257620003126200014c565b6200032a8162000323845462000267565b84620002a3565b602080601f831160018114620003625760008415620003495750858301515b600019600386901b1c1916600185901b178555620002ed565b600085815260208120601f198616915b82811015620003935788860151825594840194600190910190840162000372565b5085821015620003b25787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6120e880620003d26000396000f3fe6080604052600436106101b95760003560e01c806359533d6c116100eb57806395d89b411161008f578063dcc4074411610061578063dcc40744146104ba578063e580b2b0146104cf578063e985e9c5146104e5578063f2fde38b1461052e57005b806395d89b4114610445578063a22cb4651461045a578063b88d4fde1461047a578063c87b56dd1461049a57005b806370a08231116100c857806370a08231146103dc578063714cff56146103fc578063715018a6146104125780638da5cb5b1461042757005b806359533d6c1461039e5780635f769621146103a65780636352211e146103bc57005b806316c61ccc1161015d5780632f745c591161012f5780632f745c59146103295780633ccfd60b1461034957806342842e0e1461035e5780634f6ccce71461037e57005b806316c61ccc146102ba57806318160ddd146102d4578063235b6ea1146102f357806323b872dd1461030957005b8063081812fc11610196578063081812fc1461023a578063095ea7b3146102725780631249c58b1461029257806316c38b3c1461029a57005b806301ffc9a7146101c257806304549d6f146101f757806306fdde031461021857005b366101c057005b005b3480156101ce57600080fd5b506101e26101dd366004611bc9565b61054e565b60405190151581526020015b60405180910390f35b34801561020357600080fd5b506010546101e290600160a01b900460ff1681565b34801561022457600080fd5b5061022d610579565b6040516101ee9190611c36565b34801561024657600080fd5b5061025a610255366004611c49565b61060b565b6040516001600160a01b0390911681526020016101ee565b34801561027e57600080fd5b506101c061028d366004611c7e565b610632565b6101c061074c565b3480156102a657600080fd5b506101c06102b5366004611cb6565b6108d9565b3480156102c657600080fd5b50600d546101e29060ff1681565b3480156102e057600080fd5b506008545b6040519081526020016101ee565b3480156102ff57600080fd5b506102e5600c5481565b34801561031557600080fd5b506101c0610324366004611cd3565b6108f4565b34801561033557600080fd5b506102e5610344366004611c7e565b610925565b34801561035557600080fd5b506101c06109bb565b34801561036a57600080fd5b506101c0610379366004611cd3565b610a74565b34801561038a57600080fd5b506102e5610399366004611c49565b610a8f565b6101c0610b22565b3480156103b257600080fd5b506102e5600e5481565b3480156103c857600080fd5b5061025a6103d7366004611c49565b610ce6565b3480156103e857600080fd5b506102e56103f7366004611d0f565b610d46565b34801561040857600080fd5b506102e5600f5481565b34801561041e57600080fd5b506101c0610dcc565b34801561043357600080fd5b50600a546001600160a01b031661025a565b34801561045157600080fd5b5061022d610dde565b34801561046657600080fd5b506101c0610475366004611d2a565b610ded565b34801561048657600080fd5b506101c0610495366004611d77565b610dfc565b3480156104a657600080fd5b5061022d6104b5366004611c49565b610e34565b3480156104c657600080fd5b506101c0610e9b565b3480156104db57600080fd5b506102e560115481565b3480156104f157600080fd5b506101e2610500366004611e53565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b34801561053a57600080fd5b506101c0610549366004611d0f565b610ec7565b60006001600160e01b0319821663780e9d6360e01b1480610573575061057382610f40565b92915050565b60606000805461058890611e86565b80601f01602080910402602001604051908101604052809291908181526020018280546105b490611e86565b80156106015780601f106105d657610100808354040283529160200191610601565b820191906000526020600020905b8154815290600101906020018083116105e457829003601f168201915b5050505050905090565b600061061682610f90565b506000908152600460205260409020546001600160a01b031690565b600061063d82610ce6565b9050806001600160a01b0316836001600160a01b0316036106af5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806106cb57506106cb8133610500565b61073d5760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016106a6565b6107478383610fef565b505050565b600d5460ff161561079b5760405162461bcd60e51b815260206004820152601960248201527810dbdb9d1c9858dd0818dd5c9c995b9d1b1e481c185d5cd959603a1b60448201526064016106a6565b601054600160a01b900460ff1680156107b657506011544210155b6108025760405162461bcd60e51b815260206004820152601960248201527f50726573616c6520686173206e6f7420656e646564207965740000000000000060448201526064016106a6565b600e54600f541061085f5760405162461bcd60e51b815260206004820152602160248201527f457863656564206d6178696d756d2043727970746f204465767320737570706c6044820152607960f81b60648201526084016106a6565b600c543410156108b15760405162461bcd60e51b815260206004820152601960248201527f45746865722073656e74206973206e6f7420636f72726563740000000000000060448201526064016106a6565b6001600f60008282546108c49190611ed6565b925050819055506108d733600f5461105d565b565b6108e1611077565b600d805460ff1916911515919091179055565b6108fe33826110d1565b61091a5760405162461bcd60e51b81526004016106a690611ee9565b610747838383611150565b600061093083610d46565b82106109925760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b60648201526084016106a6565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6109c3611077565b60006109d7600a546001600160a01b031690565b60405190915047906000906001600160a01b0384169083908381818185875af1925050503d8060008114610a27576040519150601f19603f3d011682016040523d82523d6000602084013e610a2c565b606091505b50509050806107475760405162461bcd60e51b81526020600482015260146024820152732330b4b632b2103a379039b2b7321022ba3432b960611b60448201526064016106a6565b61074783838360405180602001604052806000815250610dfc565b6000610a9a60085490565b8210610afd5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b60648201526084016106a6565b60088281548110610b1057610b10611f36565b90600052602060002001549050919050565b600d5460ff1615610b715760405162461bcd60e51b815260206004820152601960248201527810dbdb9d1c9858dd0818dd5c9c995b9d1b1e481c185d5cd959603a1b60448201526064016106a6565b601054600160a01b900460ff168015610b8b575060115442105b610bcf5760405162461bcd60e51b815260206004820152601560248201527450726573616c65206973206e6f742072756e696e6760581b60448201526064016106a6565b60105460405163c30796ab60e01b81523360048201526001600160a01b039091169063c30796ab90602401602060405180830381865afa158015610c17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3b9190611f4c565b610c875760405162461bcd60e51b815260206004820152601860248201527f596f7520617265206e6f74207768696c74656c6973746564000000000000000060448201526064016106a6565b600e54600f541061085f5760405162461bcd60e51b815260206004820152602360248201527f4578636565646564206d6178696d756d2043727970746f204465767320737570604482015262706c7960e81b60648201526084016106a6565b6000818152600260205260408120546001600160a01b0316806105735760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016106a6565b60006001600160a01b038216610db05760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016106a6565b506001600160a01b031660009081526003602052604090205490565b610dd4611077565b6108d760006112c1565b60606001805461058890611e86565b610df8338383611313565b5050565b610e0633836110d1565b610e225760405162461bcd60e51b81526004016106a690611ee9565b610e2e848484846113e1565b50505050565b6060610e3f82610f90565b6000610e49611414565b90506000815111610e695760405180602001604052806000815250610e94565b80610e7384611423565b604051602001610e84929190611f69565b6040516020818303038152906040525b9392505050565b610ea3611077565b6010805460ff60a01b1916600160a01b179055610ec24261012c611ed6565b601155565b610ecf611077565b6001600160a01b038116610f345760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106a6565b610f3d816112c1565b50565b60006001600160e01b031982166380ac58cd60e01b1480610f7157506001600160e01b03198216635b5e139f60e01b145b8061057357506301ffc9a760e01b6001600160e01b0319831614610573565b6000818152600260205260409020546001600160a01b0316610f3d5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016106a6565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061102482610ce6565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b610df88282604051806020016040528060008152506114b6565b600a546001600160a01b031633146108d75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106a6565b6000806110dd83610ce6565b9050806001600160a01b0316846001600160a01b0316148061112457506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b806111485750836001600160a01b031661113d8461060b565b6001600160a01b0316145b949350505050565b826001600160a01b031661116382610ce6565b6001600160a01b0316146111895760405162461bcd60e51b81526004016106a690611f98565b6001600160a01b0382166111eb5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016106a6565b6111f883838360016114e9565b826001600160a01b031661120b82610ce6565b6001600160a01b0316146112315760405162461bcd60e51b81526004016106a690611f98565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b0316036113745760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016106a6565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6113ec848484611150565b6113f884848484611629565b610e2e5760405162461bcd60e51b81526004016106a690611fdd565b6060600b805461058890611e86565b606060006114308361172a565b600101905060008167ffffffffffffffff81111561145057611450611d61565b6040519080825280601f01601f19166020018201604052801561147a576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461148457509392505050565b6114c08383611802565b6114cd6000848484611629565b6107475760405162461bcd60e51b81526004016106a690611fdd565b6114f58484848461199b565b60018111156115645760405162461bcd60e51b815260206004820152603560248201527f455243373231456e756d657261626c653a20636f6e7365637574697665207472604482015274185b9cd9995c9cc81b9bdd081cdd5c1c1bdc9d1959605a1b60648201526084016106a6565b816001600160a01b0385166115c0576115bb81600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b6115e3565b836001600160a01b0316856001600160a01b0316146115e3576115e38582611a23565b6001600160a01b0384166115ff576115fa81611ac0565b611622565b846001600160a01b0316846001600160a01b031614611622576116228482611b6f565b5050505050565b60006001600160a01b0384163b1561171f57604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061166d90339089908890889060040161202f565b6020604051808303816000875af19250505080156116a8575060408051601f3d908101601f191682019092526116a59181019061206c565b60015b611705573d8080156116d6576040519150601f19603f3d011682016040523d82523d6000602084013e6116db565b606091505b5080516000036116fd5760405162461bcd60e51b81526004016106a690611fdd565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611148565b506001949350505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106117695772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611795576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106117b357662386f26fc10000830492506010015b6305f5e10083106117cb576305f5e100830492506008015b61271083106117df57612710830492506004015b606483106117f1576064830492506002015b600a83106105735760010192915050565b6001600160a01b0382166118585760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016106a6565b6000818152600260205260409020546001600160a01b0316156118bd5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016106a6565b6118cb6000838360016114e9565b6000818152600260205260409020546001600160a01b0316156119305760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016106a6565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001811115610e2e576001600160a01b038416156119e1576001600160a01b038416600090815260036020526040812080548392906119db908490612089565b90915550505b6001600160a01b03831615610e2e576001600160a01b03831660009081526003602052604081208054839290611a18908490611ed6565b909155505050505050565b60006001611a3084610d46565b611a3a9190612089565b600083815260076020526040902054909150808214611a8d576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b600854600090611ad290600190612089565b60008381526009602052604081205460088054939450909284908110611afa57611afa611f36565b906000526020600020015490508060088381548110611b1b57611b1b611f36565b6000918252602080832090910192909255828152600990915260408082208490558582528120556008805480611b5357611b5361209c565b6001900381819060005260206000200160009055905550505050565b6000611b7a83610d46565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160e01b031981168114610f3d57600080fd5b600060208284031215611bdb57600080fd5b8135610e9481611bb3565b60005b83811015611c01578181015183820152602001611be9565b50506000910152565b60008151808452611c22816020860160208601611be6565b601f01601f19169290920160200192915050565b602081526000610e946020830184611c0a565b600060208284031215611c5b57600080fd5b5035919050565b80356001600160a01b0381168114611c7957600080fd5b919050565b60008060408385031215611c9157600080fd5b611c9a83611c62565b946020939093013593505050565b8015158114610f3d57600080fd5b600060208284031215611cc857600080fd5b8135610e9481611ca8565b600080600060608486031215611ce857600080fd5b611cf184611c62565b9250611cff60208501611c62565b9150604084013590509250925092565b600060208284031215611d2157600080fd5b610e9482611c62565b60008060408385031215611d3d57600080fd5b611d4683611c62565b91506020830135611d5681611ca8565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215611d8d57600080fd5b611d9685611c62565b9350611da460208601611c62565b925060408501359150606085013567ffffffffffffffff80821115611dc857600080fd5b818701915087601f830112611ddc57600080fd5b813581811115611dee57611dee611d61565b604051601f8201601f19908116603f01168101908382118183101715611e1657611e16611d61565b816040528281528a6020848701011115611e2f57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215611e6657600080fd5b611e6f83611c62565b9150611e7d60208401611c62565b90509250929050565b600181811c90821680611e9a57607f821691505b602082108103611eba57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561057357610573611ec0565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b600060208284031215611f5e57600080fd5b8151610e9481611ca8565b60008351611f7b818460208801611be6565b835190830190611f8f818360208801611be6565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061206290830184611c0a565b9695505050505050565b60006020828403121561207e57600080fd5b8151610e9481611bb3565b8181038181111561057357610573611ec0565b634e487b7160e01b600052603160045260246000fdfea264697066735822122042900c6261d81d6fc613a02a0b6451011d32f266f85a50d0ee4da45b61c868d864736f6c63430008110033";

type CryptoDevsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CryptoDevsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CryptoDevs__factory extends ContractFactory {
  constructor(...args: CryptoDevsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    baseURI: PromiseOrValue<string>,
    whitelistContract: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CryptoDevs> {
    return super.deploy(
      baseURI,
      whitelistContract,
      overrides || {}
    ) as Promise<CryptoDevs>;
  }
  override getDeployTransaction(
    baseURI: PromiseOrValue<string>,
    whitelistContract: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      baseURI,
      whitelistContract,
      overrides || {}
    );
  }
  override attach(address: string): CryptoDevs {
    return super.attach(address) as CryptoDevs;
  }
  override connect(signer: Signer): CryptoDevs__factory {
    return super.connect(signer) as CryptoDevs__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CryptoDevsInterface {
    return new utils.Interface(_abi) as CryptoDevsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CryptoDevs {
    return new Contract(address, _abi, signerOrProvider) as CryptoDevs;
  }
}

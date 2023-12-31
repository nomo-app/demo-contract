# Demo Contract for interacting with the Zeniq Smart Chain

This is a demo contract for interacting with the Zeniq Smart Chain.

The Contract is a HardHat project and uses the hardhat-toolbox dependency.
Moreover the project uses TypeScript for type safety.

This contract is meant to be used as a starting point for your own contracts, so feel free to **copy and modify** it.

For more information on how to write Smart Contracts with HardHat, please refer to the [HardHat documentation](https://hardhat.org/getting-started/).

## Getting Started

To get started, clone this repository and install the dependencies:

```bash
npm install
```

Make sure to create a `.env` file in the root directory of this project and add the following variables:

```bash
MNEMONIC=your mnemonic of 12 words
```

This mnemonic is used to deploy the contract.

After that, you should be able to compile and test the contract.
To do so, run the following commands from the package.json directory:

```bash
npm run compile
npm run test
```

If you need ZENIQ for paying transaction fees, then we recommend the [Faucet WebOn](https://nomo.app/faucet) for the Nomo App.

## Nomo App Sign Security Dialog

In order to make transactions human-readable, the Nomo App needs to know the function names of your Smart Contract functions.

For many Smart Contracts, the Nomo App works perfectly out of the box.
However, if the Nomo App is not able to tell your function names, then we invite you to submit an ABI-pull-request to the [walletkit-dart](https://github.com/nomo-app/walletkit-dart).

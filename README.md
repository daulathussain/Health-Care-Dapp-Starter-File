# Medical Health Management Blockchain Dapp

Build & Deploy a Medical Health Management Blockchain Dapp | Solidity, Hardhat, Next.js, Context AP and web3 providers

In this comprehensive tutorial, we will guide you through the process of building and deploying a Medical Health Management Dapp on the blockchain. This step-by-step video covers everything from setting up the development environment to deploying the smart contracts and building a user-friendly frontend. Here's what we'll cover:

## Project Overview

![alt text](https://www.daulathussain.com/wp-content/uploads/2024/07/Build-Deploy-a-Medical-Health-Management-Blockchain-Dapp-Solidity-Hardhat-Nextjs-Context-AP-and-web3-providers.jpg)

Kindly follow the following Instructions to run the project in your system and install the necessary requirements

- [Final Source Code](https://www.theblockchaincoders.com/sourceCode/build-and-deploy-a-medical-health-management-blockchain-dapp-or-solidity-hardhat-next.js-context-ap-and-web3-providers)

#### Setup Video

- [Final Code Setup video](https://youtu.be/0TwuL8V9zUE?si=UFuWkzh-DofBndjp)

```
  WATCH: Setup & Demo Of Project
```

#### Install Vs Code Editor

```
  URL: https://code.visualstudio.com/download
  GET: VsCode Editor
```

#### NodeJs & NPM Version

```
  URL: https://nodejs.org/en/download
  NodeJs: v18.17.1
  NPM: 8.19.2
```

#### ALL SOURCE CODE

```
 URL: https://www.theblockchaincoders.com/SourceCode
  GET: Project Starter File Download
```

All you need to follow the complete project and follow the instructions which are explained in the tutorial by Daulat

## Final Code Instruction

If you download the final source code then you can follow the following instructions to run the Dapp successfully

#### What You Will Get

Once you download the final source code, you will get a ZIP file, then you will have 2 FOLDERS & README file which contain all the instructions to run the project and set video

#### Setup Video

```
  WATCH: Setup & Demo Of Project
```

#### ALL SOURCE CODE

```
  STARTER_FILE: https://github.com/daulathussain/Health-Care-Dapp-Starter-File
 URL: https://www.theblockchaincoders.com/SourceCode
  GET: Project Starter File Download
```

#### Install Vs Code Editor

```
  URL: https://code.visualstudio.com/download
  GET: VsCode Editor
```

#### NodeJs & NPM Version

```
  URL: https://nodejs.org/en/download
  NodeJs: v18.17.1
  NPM: 8.19.2
```

#### OPEN AI

```https://platform.openai.com/docs/api-reference/introduction
  # OPEN AI KEY
  URL: https://platform.openai.com/docs/api-reference/introduction
  NEXT_PUBLIC_OPEN_AI_KEY=YOUR_OPEN_AI_KEY
```

#### Pinata IPFS

```https://www.pinata.cloud/
  # PINATE KEYS
  URL: https://www.pinata.cloud/
  NEXT_PUBLIC_PINATA_AIP_KEY = YOUR_PINATA_API_KEY
  NEXT_PUBLIC_PINATA_SECRECT_KEY = YOUR_PINATA_SECRECT_KEY
```

#### Test Faucets

Alchemy will provide you with some free test faucets which you can transfer to your wallet address for deploying the contract

```
  Get: Free Test Faucets
  URL : https://faucet.polygon.technology/
```

#### RemixID

We are using RemixID for deploying the contract and generation of the ABI in the project, but you can use any other tools like Hardhat, etc.

```
  OPEN: RemixID
  URL: https://remix-project.org
```

#### Polygon Amoy

```
  OPEN: Polygon Amoy
  URL: https://amoy.polygonscan.com/
```

## Important Links

- [Get Pro Blockchain Developer Course](https://www.theblockchaincoders.com/pro-nft-marketplace)
- [Support Creator](https://bit.ly/Support-Creator)
- [All Projects Source Code](https://www.theblockchaincoders.com/SourceCode)

## Authors

- [@theblockchaincoders.com](https://www.theblockchaincoders.com/)
- [@consultancy](https://www.theblockchaincoders.com/consultancy)
- [@youtube](https://www.youtube.com/@daulathussain)

#### PACKAGES

```
  {
  "name": "healthcare-blockchain-dapp",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@next/font": "13.4.13",
    "axios": "^1.6.8",
    "ethers": "^5.7.2",
    "next": "13.4.13",
    "openai": "^4.52.7",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-dropzone": "^14.2.3",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^4.10.1",
    "web3modal": "^1.9.9"
  },
  "devDependencies": {
    "@nomicfoundation/hardhat-toolbox": "^2.0.0",
    "hardhat": "^2.12.0"
  }
}
```

#### ENVIROMENT VARIABLES

```
  # CONTRACT ADDRESS
  NEXT_PUBLIC_HEALTH_CARE = 0x5FbDB2315678afecb367f032d93F642f64180aa3

  # OPEN AI KEY
  NEXT_PUBLIC_OPEN_AI_KEY=YOUR_OPEN_AI_KEY

  # FEE
  NEXT_PUBLIC_DOCTOR_REGISTER_FEE = 0.0025
  NEXT_PUBLIC_PATIENT_APPOINMENT_FEE = 0.0025
  NEXT_PUBLIC_PATIENT_REGISTER_FEE = 0.00025

  # CURRANY
  NEXT_PUBLIC_CURRENCY = ETH
  # NEXT_PUBLIC_CURRENCY = MATIC
  NEXT_PUBLIC_NETWORK = localhost
  # NEXT_PUBLIC_NETWORK = polygon_amoy

  # ADMIN
  NEXT_PUBLIC_ADMIN_ADDRESS = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

  # PINATE KEYS
  NEXT_PUBLIC_PINATA_AIP_KEY = YOUR_PINATA_API_KEY
  NEXT_PUBLIC_PINATA_SECRECT_KEY = YOUR_PINATA_SECRECT_KEY
```

#### HARDHART ACCOUNTS

```
  URL DOC: https://hardhat.org/hardhat-runner/docs/getting-started#overview

  Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
  Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

  Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 (10000 ETH)
  Private Key: 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d

  Account #2: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC (10000 ETH)
  Private Key: 0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a

  Account #3: 0x90F79bf6EB2c4f870365E785982E1f101E93b906 (10000 ETH)
  Private Key: 0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6

  Account #4: 0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65 (10000 ETH)
  Private Key: 0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a

  Account #5: 0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc (10000 ETH)
  Private Key: 0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba

  Account #6: 0x976EA74026E726554dB657fA54763abd0C3a0aa9 (10000 ETH)
  Private Key: 0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e

  Account #7: 0x14dC79964da2C08b23698B3D3cc7Ca32193d9955 (10000 ETH)
  Private Key: 0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356

  Account #8: 0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f (10000 ETH)
  Private Key: 0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97

  Account #9: 0xa0Ee7A142d267C1f36714E4a8F75612F20a79720 (10000 ETH)
  Private Key: 0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6

  Account #10: 0xBcd4042DE499D14e55001CcbB24a551F3b954096 (10000 ETH)
  Private Key: 0xf214f2b2cd398c806f84e317254e0f0b801d0643303237d97a22a48e01628897

  Account #11: 0x71bE63f3384f5fb98995898A86B02Fb2426c5788 (10000 ETH)
  Private Key: 0x701b615bbdfb9de65240bc28bd21bbc0d996645a3dd57e7b12bc2bdf6f192c82

  Account #12: 0xFABB0ac9d68B0B445fB7357272Ff202C5651694a (10000 ETH)
  Private Key: 0xa267530f49f8280200edf313ee7af6b827f2a8bce2897751d06a843f644967b1

  Account #13: 0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec (10000 ETH)
  Private Key: 0x47c99abed3324a2707c28affff1267e45918ec8c3f20b8aa892e8b065d2942dd

  Account #14: 0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097 (10000 ETH)
  Private Key: 0xc526ee95bf44d8fc405a158bb884d9d1238d99f0612e9f33d006bb0789009aaa

  Account #15: 0xcd3B766CCDd6AE721141F452C550Ca635964ce71 (10000 ETH)
  Private Key: 0x8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb61

  Account #16: 0x2546BcD3c84621e976D8185a91A922aE77ECEc30 (10000 ETH)
  Private Key: 0xea6c44ac03bff858b476bba40716402b03e41b8e97e276d1baec7c37d42484a0

  Account #17: 0xbDA5747bFD65F08deb54cb465eB87D40e51B197E (10000 ETH)
  Private Key: 0x689af8efa8c651a91ad287602527f3af2fe9f6501a7ac4b061667b5a93e037fd

  Account #18: 0xdD2FD4581271e230360230F9337D5c0430Bf44C0 (10000 ETH)
  Private Key: 0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0

  Account #19: 0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199 (10000 ETH)
  Private Key: 0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e
```

#### RPU URL PROVIDER

```
  NAME: ANKR.COM
  URL: https://www.ankr.com/rpc/
```

#### NETWORK CONFIGRATION

```
  NETWORK_NAME: {
    chainId: `0x${Number(NETWORK_CHAINID).toString(16)}`,
    chainName: "NETWORK_NAME",
    nativeCurrency: {
      name: "NETWORK_NAME",
      symbol: "NETWORK_SYMBOL",
      decimals: 18,
    },
    rpcUrls: ["NETWORK_RPCURL"],
    blockExplorerUrls: ["NETWORK_EXPLORER_URL"],
  },
```

#### PINATA IPFS IMAGE

```
  export const UPLOAD_IPFS_IMAGE = async (file) => {
  if (file) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios({
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data: formData,
      headers: {
        pinata_api_key: PINATA_AIP_KEY,
        pinata_secret_api_key: PINATA_SECRECT_KEY,
        "Content-Type": "multipart/form-data",
      },
    });
    const ImgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

    return ImgHash;
  }
};
```

#### PINATA IPFS UPLOAD_METADATA

```
  export const UPLOAD_METADATA = async (data) => {
  const response = await axios({
    method: "POST",
    url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
    data: data,
    headers: {
      pinata_api_key: PINATA_AIP_KEY,
      pinata_secret_api_key: PINATA_SECRECT_KEY,
      "Content-Type": "application/json",
    },
  });

  const url = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

  return url;
};
```


# Bitcoin Wallet Generator

## Description
A script designed to generate and validate Bitcoin wallets, specifically for testing purposes on the Bitcoin testnet. This script allows you to create wallets, obtain their details (mnemonic, address, and private key), and test transactions in a secure, sandboxed environment without using real Bitcoin.

### Running the script
```bash
$  node ./src/createWallet.js
```
Example of returned data

```bash
[
  {
    "mnemonic": 'bid square puzzle arm youth wait pistol warrior humble nasty burden sausage',
    "address": 'tb1qst0y94uzeyp4992ee3swwwwy2xn5q36ms8dla3',
    "privateKey": 'cTWCw3ffB1m88ENjUg7HXib3DQeJdECHe3QbKEtwmgMLz3euRs2e'
  },
  {
    "mnemonic": 'nurse position bless timber skin replace bunker ritual glide napkin forward cabbage',
    "address": 'tb1qjly08pg27xgmxcyxk0weqpx0esw8fk3fpe8lpq',
    "privateKey": 'cPvvQiataDSGJPHcii6KPeew7Fb3vGqaHkeLhEBQqETV74NY8fk9'
  }
]

```
> mnemonic: The mnemonic phrase is like a master password for your bitcoin vault. It is a set of random words that serves as a backup for your digital wallet. Imagine it as a piece of paper with tips for remembering a very complicated password.
> 
> address: Blockchain Wallet Address
> 
> privateKey: The private key is the secret password that gives you access to your cryptocurrency funds. Imagine it as the key to a digital safe that stores your virtual money.


### Sending Bitcoins to a Wallet

To test transactions, use a Bitcoin faucet to send small amounts of cryptocurrency to your generated wallet on the Bitcoin testnet. This allows you to experiment without using real Bitcoin. Access the faucet at the link below:
 [bitcoinfaucet](https://bitcoinfaucet.uo1.net/)

### Verifying transactions created on the blockchain
Wallet: [tb1qst0y94uzeyp4992ee3swwwwy2xn5q36ms8dla3](https://blockstream.info/testnet/address/tb1qst0y94uzeyp4992ee3swwwwy2xn5q36ms8dla3)

Wallet: [tb1qjly08pg27xgmxcyxk0weqpx0esw8fk3fpe8lpq](https://blockstream.info/testnet/address/tb1qjly08pg27xgmxcyxk0weqpx0esw8fk3fpe8lpq)

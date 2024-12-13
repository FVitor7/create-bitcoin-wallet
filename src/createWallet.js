const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

const network = bitcoin.networks.testnet;
const path = `m/49'/1'/0'/0` 

async function generateWallet() {
    const mnemonic = bip39.generateMnemonic();
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const root = bip32.fromSeed(seed, network);
    const account = root.derivePath(path);
    const node = account.derive(0).derive(0);
    const address = bitcoin.payments.p2wpkh({ pubkey: node.publicKey, network }).address;

    return { mnemonic, address, privateKey: node.toWIF()};
}

async function generateMultipleWallets(numberOfWallets) {
    const wallets = [];

    for (let i = 0; i < numberOfWallets; i++) {
        const wallet = await generateWallet();
        wallets.push(wallet);
    }

    return wallets;
}

async function main() {
    const walletsGenerated = await generateMultipleWallets(2);
    console.log(walletsGenerated);
}

main();
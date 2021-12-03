import {
    Keypair,
    Connection,
    BpfLoader,
    PublicKey,
    Signer,
    SystemProgram,
    Transaction,
    BPF_LOADER_PROGRAM_ID,
} from '@solana/web3.js';
import {
    // loadTokenProgram,
    createMint,
    // createAccount,
    // createAssociatedAccount,
    // disableMintAuthority,
    // transfer,
    // transferChecked,
    // transferCheckedAssociated,
    // approveRevoke,
    // failOnApproveOverspend,
    // setAuthority,
    // mintTo,
    // mintToChecked,
    // multisig,
    // burn,
    // burnChecked,
    // freezeThawAccount,
    // closeAccount,
    // nativeToken,
} from './token/cli/token-test'

async function main() {
    console.log("start")
    let payer = Keypair.fromSecretKey(Uint8Array.from([28, 255, 128, 251, 197, 119, 77, 16, 156, 39, 188, 40, 158, 224, 149, 166, 86, 183, 33, 55, 18, 38, 187, 133, 145, 207, 163, 186, 154, 98, 121, 39, 195, 238, 18, 250, 57, 6, 218, 221, 143, 202, 246, 191, 9, 136, 187, 137, 73, 92, 162, 247, 61, 228, 144, 103, 241, 100, 83, 175, 63, 181, 83, 121]));
    await createMint()
}

main()

// main()
//     .catch(err => {
//         console.error(err);
//         process.exit(-1);
//     })
//     .then(() => process.exit());
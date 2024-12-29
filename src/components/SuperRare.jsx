import { useEffect, useState } from "react";
import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import {
  Connection,
  PublicKey,
  Keypair,
  SystemProgram,
  SYSVAR_RENT_PUBKEY,
} from "@solana/web3.js";
import {
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { useWallet } from "@solana/wallet-adapter-react";
import Card from "./Card.jsx";
import { IDL } from "../anchor/idl.ts";

// Constants
const PROGRAM_ID = new PublicKey(
  "65USePYd9nzjHHBFrSp9oxWjZKVJacE2Hx28aFpPkVpn"
);
const METADATA_PROGRAM_ID = new PublicKey(
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
);

// Base URI for metadata
const BASE_URI =
  "http://127.0.0.1:8080/ipfs/QmfVuPfBXAiGdoibQrQsUTkQsxwDgDMUuFBVbyQaZmVDDW";
// "https://gateway.pinata.cloud/ipfs/QmTxQkLojvYwfQWCjkfkFKWKKY5ZJVgCjb3RF9ycYKzteL";
// const BACKEND_URL = "http://localhost:5000";
const SuperRare = () => {
  const wallet = useWallet();
  const [nfts, setNfts] = useState([]);
  const [status, setStatus] = useState("");
  const [mintingId, setMintingId] = useState(null);

  const getProvider = () => {
    const connection = new Connection("https://api.devnet.solana.com");
    const provider = new anchor.AnchorProvider(connection, wallet, {
      preflightCommitment: "processed",
    });
    anchor.setProvider(provider);
    return provider;
  };

  const getProgram = () => {
    const provider = getProvider();
    return new anchor.Program(IDL, PROGRAM_ID, provider);
  };

  // Fetch metadata for NFTs
  useEffect(() => {
    const fetchMetadata = async () => {
      const nftData = [];
      for (let i = 0; i < 20; i++) {
        try {
          const response = await fetch(`${BASE_URI}/${i}.json`, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (!response.ok) {
            throw new Error(`Failed to fetch metadata for NFT ${i}`);
          }
          const metadata = await response.json();

          nftData.push({
            id: i,
            name: metadata.name || `NFT #${i}`,
            symbol: metadata.symbol || "RINKYA",
            image: metadata.image || `${BASE_URI}/${i}.jpeg`,
            description: metadata.description || "No description available",
            price: 2.99,
            tag: 12983,
            time: 1,
          });
        } catch (error) {
          console.error(`Failed to fetch metadata for NFT ${i}:`, error);
        }
      }
      setNfts(nftData);
    };

    fetchMetadata();
  }, []);

  // const getProgram = () => {
  //   const connection = new Connection("https://api.devnet.solana.com");
  //   const provider = new anchor.AnchorProvider(connection, wallet, {
  //     preflightCommitment: "processed",
  //   });
  //   return new Program(IDL, PROGRAM_ID, provider);
  // };

  console.log("nfts: ", nfts);

  const mintNFT = async (nft) => {
    console.log("nft", nft);

    if (!wallet.connected || !wallet.publicKey) {
      setStatus("Please connect your wallet first");
      return;
    }

    try {
      setStatus(`Starting to mint NFT: ${nft.name}...`);
      setMintingId(nft.id);
      const provider = getProvider();
      const program = getProgram();
      console.log("Provider: ", provider);
      console.log(
        "IDL Methods:",
        program.idl.instructions.map((i) => i.name)
      );

      console.log("Program: ", program.methods);

      const mint = Keypair.generate();
      console.log("mint:", mint);

      const associatedToken = await anchor.utils.token.associatedAddress({
        mint: mint.publicKey,
        owner: wallet.publicKey,
      });

      const [metadataAccount] = PublicKey.findProgramAddressSync(
        [
          Buffer.from("metadata"),
          METADATA_PROGRAM_ID.toBuffer(),
          mint.publicKey.toBuffer(),
        ],
        METADATA_PROGRAM_ID
      );

      const [masterEditionAccount] = PublicKey.findProgramAddressSync(
        [
          Buffer.from("metadata"),
          METADATA_PROGRAM_ID.toBuffer(),
          mint.publicKey.toBuffer(),
          Buffer.from("edition"),
        ],
        METADATA_PROGRAM_ID
      );

      console.log("Program ID:", program.programId.toString());
      // console.log(
      //   "Arguments:",
      //   nft.name,
      //   nft.symbol,
      //   `${BASE_URI}/${nft.id}.json`
      // );
      // console.log("Accounts:", {
      //   signer: wallet.publicKey.toString(),
      //   mint: mint.publicKey.toString(),
      //   associatedTokenAccount: associatedToken.toString(),
      //   metadataAccount: metadataAccount.toString(),
      //   masterEditionAccount: masterEditionAccount.toString(),
      // });

      console.log(
        "Minting Params:",
        nft.name,
        nft.symbol,
        `${BASE_URI}/${nft.id}.json`
      );
      console.log("Available Methods:", program.methods);

      // Log all parameters before creating the transaction
      console.log("Transaction Parameters:", {
        name: nft.name,
        symbol: nft.symbol || "RINKYA",
        uri: `${BASE_URI}/${nft.id}.json`,
        accounts: {
          signer: wallet.publicKey.toString(),
          mint: mint.publicKey.toString(),
          associatedTokenAccount: associatedToken.toString(),
          metadataAccount: metadataAccount.toString(),
          masterEditionAccount: masterEditionAccount.toString(),
          tokenProgram: TOKEN_PROGRAM_ID.toString(),
          associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID.toString(),
          tokenMetadataProgram: METADATA_PROGRAM_ID.toString(),
          systemProgram: SystemProgram.programId.toString(),
          rent: SYSVAR_RENT_PUBKEY.toString(),
        },
      });
      console.log("Starts here");

      try {
        const simulation = await program.methods
          .initNft(
            String(nft.name),
            String(nft.symbol || "RINKYA"),
            String(`${BASE_URI}/${nft.id}.json`)
          )
          .accounts({
            signer: wallet.publicKey,
            mint: mint.publicKey,
            associatedTokenAccount: associatedToken,
            metadataAccount,
            masterEditionAccount,
            tokenProgram: TOKEN_PROGRAM_ID,
            associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
            tokenMetadataProgram: METADATA_PROGRAM_ID,
            systemProgram: SystemProgram.programId,
            rent: SYSVAR_RENT_PUBKEY,
          })
          .signers([mint])
          .simulate();

        console.log("Simulation successful:", simulation);

        // const tx = await program.methods
        //   .initNft(
        //     nft.name,
        //     nft.symbol || "RINKYA",
        //     `${BASE_URI}/${nft.id}.json`
        //   )
        //   .accounts({
        //     signer: wallet.publicKey,
        //     mint: mint.publicKey,
        //     associatedTokenAccount: associatedToken,
        //     metadataAccount,
        //     masterEditionAccount,
        //     tokenProgram: TOKEN_PROGRAM_ID,
        //     associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        //     tokenMetadataProgram: METADATA_PROGRAM_ID,
        //     systemProgram: SystemProgram.programId,
        //     rent: SYSVAR_RENT_PUBKEY,
        //   })
        //   .signers([mint])
        //   // .simulate();
        //   .rpc();
        console.log("Ends here");

        console.log("Transaction successful:", tx);
      } catch (simError) {
        console.error("Simulation error details:", {
          error: simError,
          message: simError.message,
          logs: simError.logs,
          stack: simError.stack,
        });
        throw simError;
      }
      // await program.methods
      //   .initNft(nft.name, nft.symbol, `${BASE_URI}/${nft.id}.json`)
      //   .accounts({
      //     signer: wallet.publicKey,
      //     mint: mint.publicKey,
      //     associatedTokenAccount: associatedToken,
      //     metadataAccount,
      //     masterEditionAccount,
      //     tokenProgram: TOKEN_PROGRAM_ID,
      //     associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
      //     tokenMetadataProgram: METADATA_PROGRAM_ID,
      //     systemProgram: anchor.web3.SystemProgram.programId,
      //     rent: anchor.web3.SYSVAR_RENT_PUBKEY,
      //   })
      //   .signers([mint])
      //   // .simulate();
      //   .rpc();

      console.log("Txn sig:", tx);

      setStatus(
        `Successfully minted ${
          nft.name
        }! Mint address: ${mint.publicKey.toString()}`
      );
    } catch (error) {
      console.error("Error minting NFT:", error);
      setStatus(`Error minting NFT: ${error.message}`);
    } finally {
      setMintingId(null);
    }
  };

  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">My Super Rare Auction</h2>
        <p className="description">
          We have released four limited edition NFT&apos;s early which can be
          bid on <a href="https://opensea.io/">Opensea.</a>
        </p>
      </div>
      <div className="cards">
        {nfts.map((nft) => (
          <Card
            key={nft?.id}
            image={nft?.image}
            series="Rinkya Collection"
            title={nft?.name}
            price={nft?.price}
            tag={nft?.tag}
            time={nft?.time}
            isMinting={mintingId === nft?.id}
            onMint={() => mintNFT(nft)}
            isWalletConnected={wallet.connected}
          />
        ))}
      </div>

      {/* <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            key={index}
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
          />
        ))}
      </div> */}
    </div>
  );
};

export default SuperRare;

// /**
//  * Program IDL in camelCase format in order to be used in JS/TS.
//  *
//  * Note that this is only a type helper and is not the actual IDL. The original
//  * IDL can be found at `target/idl/nft_contract.json`.
//  */
export type NftContract = {
  address: "65USePYd9nzjHHBFrSp9oxWjZKVJacE2Hx28aFpPkVpn";
  metadata: {
    name: "nftContract";
    version: "0.1.0";
    spec: "0.1.0";
    description: "Created with Anchor";
  };
  instructions: [
    {
      name: "initNft";
      discriminator: [181, 181, 103, 206, 79, 44, 134, 193];
      accounts: [
        {
          name: "signer";
          writable: true;
          signer: true;
        },
        {
          name: "mint";
          writable: true;
          signer: true;
        },
        {
          name: "associatedTokenAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "account";
                path: "signer";
              },
              {
                kind: "const";
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ];
              },
              {
                kind: "account";
                path: "mint";
              }
            ];
            program: {
              kind: "const";
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: "metadataAccount";
          docs: ["CHECK - address"];
          writable: true;
        },
        {
          name: "masterEditionAccount";
          writable: true;
        },
        {
          name: "tokenProgram";
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
        },
        {
          name: "associatedTokenProgram";
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
        },
        {
          name: "tokenMetadataProgram";
          address: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s";
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        },
        {
          name: "rent";
          address: "SysvarRent111111111111111111111111111111111";
        }
      ];
      args: [
        {
          name: "name";
          type: "string";
        },
        {
          name: "symbol";
          type: "string";
        },
        {
          name: "uri";
          type: "string";
        }
      ];
    }
  ];
};

export const IDL: NftContract = {
  address: "65USePYd9nzjHHBFrSp9oxWjZKVJacE2Hx28aFpPkVpn",
  metadata: {
    name: "nftContract",
    version: "0.1.0",
    spec: "0.1.0",
    description: "Created with Anchor",
  },
  instructions: [
    {
      name: "initNft",
      discriminator: [181, 181, 103, 206, 79, 44, 134, 193],
      accounts: [
        {
          name: "signer",
          writable: true,
          signer: true,
        },
        {
          name: "mint",
          writable: true,
          signer: true,
        },
        {
          name: "associatedTokenAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "signer",
              },
              {
                kind: "const",
                value: [
                  6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206,
                  235, 121, 172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140,
                  245, 133, 126, 255, 0, 169,
                ],
              },
              {
                kind: "account",
                path: "mint",
              },
            ],
            program: {
              kind: "const",
              value: [
                140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142,
                13, 131, 11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216,
                219, 233, 248, 89,
              ],
            },
          },
        },
        {
          name: "metadataAccount",
          docs: ["CHECK - address"],
          writable: true,
        },
        {
          name: "masterEditionAccount",
          writable: true,
        },
        {
          name: "tokenProgram",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        {
          name: "associatedTokenProgram",
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
        },
        {
          name: "tokenMetadataProgram",
          address: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
        },
        {
          name: "systemProgram",
          address: "11111111111111111111111111111111",
        },
        {
          name: "rent",
          address: "SysvarRent111111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "symbol",
          type: "string",
        },
        {
          name: "uri",
          type: "string",
        },
      ],
    },
  ],
};

// export const IDL: NftContract = {
//   address: "65USePYd9nzjHHBFrSp9oxWjZKVJacE2Hx28aFpPkVpn",
//   metadata: {
//     name: "nft_contract",
//     version: "0.1.0",
//     spec: "0.1.0",
//     description: "Created with Anchor",
//   },
//   instructions: [
//     {
//       name: "init_nft",
//       discriminator: [181, 181, 103, 206, 79, 44, 134, 193],
//       accounts: [
//         {
//           name: "signer",
//           writable: true,
//           signer: true,
//         },
//         {
//           name: "mint",
//           writable: true,
//           signer: true,
//         },
//         {
//           name: "associated_token_account",
//           writable: true,
//           pda: {
//             seeds: [
//               {
//                 kind: "account",
//                 path: "signer",
//               },
//               {
//                 kind: "const",
//                 value: [
//                   6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206,
//                   235, 121, 172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140,
//                   245, 133, 126, 255, 0, 169,
//                 ],
//               },
//               {
//                 kind: "account",
//                 path: "mint",
//               },
//             ],
//             program: {
//               kind: "const",
//               value: [
//                 140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142,
//                 13, 131, 11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216,
//                 219, 233, 248, 89,
//               ],
//             },
//           },
//         },
//         {
//           name: "metadata_account",
//           docs: ["CHECK - address"],
//           writable: true,
//         },
//         {
//           name: "master_edition_account",
//           writable: true,
//         },
//         {
//           name: "token_program",
//           address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
//         },
//         {
//           name: "associated_token_program",
//           address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
//         },
//         {
//           name: "token_metadata_program",
//           address: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
//         },
//         {
//           name: "system_program",
//           address: "11111111111111111111111111111111",
//         },
//         {
//           name: "rent",
//           address: "SysvarRent111111111111111111111111111111111",
//         },
//       ],
//       args: [
//         {
//           name: "name",
//           type: "string",
//         },
//         {
//           name: "symbol",
//           type: "string",
//         },
//         {
//           name: "uri",
//           type: "string",
//         },
//       ],
//     },
//   ],
// };

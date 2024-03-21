/**
 * BurnPix Token IDs as Byte32 Hex
 *
 * Set names to differenciate all the
 * different token IDs and exchange their
 * values with your own token IDs
 */
export enum TOKEN_ID {
  SWIRL = '0x000000000000000000000000643ce65bf4f9a513a12f169c2b2ee4ec0297d1ab',
  DRAGON = '0x00000000000000000000000096447117c8803c6c524ea8395d92ce1cee6aad23',
  PAINT = '0x000000000000000000000000cc5fa7cb53a4d92fb7e56ce0a1088b65dd60468b',
}

/**
 * Iterations as Byte32 Hex
 *
 * Default is the minimum number possible per block:
 * 2000 (07d0)
 *
 * Common values:
 * 5000 (1388)
 * 4000 (0fa0)
 * 3000 (0bb8)
 * 2000 (07d0)
 * 1000 (03e8)
 * 889  (0379)
 * 111  (006f)
 *
 * https://neptunemutual.com/web3-tools/number-to-bytes32-converter/
 */
export const ITERATION_NUMBER =
  '0x000000000000000000000000000000000000000000000000000000000000006f';

/**
 * Minimum LYX Balance of your controller
 * Set to 0.15 so transactions don't fail.
 */
export const MIN_LYX_BALANCE = 0.05;

// Maximum Gas Price in Gwei to execute the transaction
export const MAX_GAS_PRICE = 2;

// Burnt Pix Contract Addresses on LUKSO Mainnet
export enum BURNT_PIX_CONTRACT {
  'luksoMainnet' = '0x3983151E0442906000DAb83c8b1cF3f2D2535F82',
  'luksoTestnet' = '0x12167f1c2713aC4f740B4700c4C72bC2de6C686f',
}

// Terminal UI
export const SPLITTER =
  '-----------------------------------------------------------------------------------------------';

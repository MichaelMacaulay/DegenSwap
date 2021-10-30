import Head from 'next/head'
import { ethers } from "ethers";
import { Address } from "cluster";
require('dotenv').config()

const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`);

const poolAddress = "0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8";

const poolImmutablesAbi = [
  "function factory() external view returns (address)",
  "function token0() external view returns (address)",
  "function token1() external view returns (address)",
  "function fee() external view returns (uint24)",
  "function tickSpacing() external view returns (int24)",
  "function maxLiquidityPerTick() external view returns (uint128)",
];

const poolContract = new ethers.Contract(
  poolAddress,
  poolImmutablesAbi,
  provider
);

interface Immutables {
  factory: Address;
  token0: Address;
  token1: Address;
  fee: number;
  tickSpacing: number;
  maxLiquidityPerTick: number;
}

async function getPoolImmutables() {
  const PoolImmutables: Immutables = {
    factory: await poolContract.factory(),
    token0: await poolContract.token0(),
    token1: await poolContract.token1(),
    fee: await poolContract.fee(),
    tickSpacing: await poolContract.tickSpacing(),
    maxLiquidityPerTick: await poolContract.maxLiquidityPerTick(),
  };
  return PoolImmutables;
}

// How to call the function

getPoolImmutables().then((result) => {
  console.log(result);
});


export default function Home() {
  return (
    <div>
        <title>DegenSwap</title>
        <meta name="description" content="DegenSwap lets you randomly invest in cryptocurrency projects." />
        <link rel="icon" href="/favicon.ico" />


      {/* create simple UI with drop down menu, a button to buy, and an input area for the amount */}



    </div>
  )
}

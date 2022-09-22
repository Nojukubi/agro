import Web3 from 'web3';
import { Chains, contracts, Contracts } from './config/contract';

// Create the web3 provider.
const web3: Web3 = new Web3('https://bsc-dataseed1.binance.org/');

/**
 * Get current price for token by Eth Contract.
 * @return Promise with current price.
 */
export async function getCurrentPrice(): Promise<number> {
  const { address, abi } = contracts[Contracts.Crowdsale];
  return new web3.eth.Contract(abi as any, address[Chains.BSC]).methods
    .price(contracts[Contracts.USDT].address[Chains.BSC])
    .call()
    .then((balance: string): number => {
      return parseFloat((parseInt(String(balance)) / Math.pow(10, 18)).toFixed(4));
    });
}

/**
 * Get total amount of tokens by Eth Contract.
 * @return Promise with total amount.
 */
export function getTotalAmount(): Promise<number> {
  const { address, abi } = contracts[Contracts.Agti];
  return new web3.eth.Contract(abi as any, address[Chains.BSC]).methods
    .balanceOf(contracts[Contracts.Crowdsale].address[Chains.BSC])
    .call();
}

/**
 * Get available amount of tokens by Eth Contract.
 * @return Promise with available amount.
 */
export function getAvailableAmount(): Promise<number> {
  const { address, abi } = contracts[Contracts.Crowdsale];
  return new web3.eth.Contract(abi as any, address[Chains.BSC]).methods.avaliableToBuy().call();
}

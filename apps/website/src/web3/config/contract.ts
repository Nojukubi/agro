import agtiAbi from './abi/agti.json';
import crowdsaleAbi from './abi/crowd.json';

// Available chains.
export enum Chains {
  BSC = 'Binance-Smart-Chain'
}

// Available contracts.
export enum Contracts {
  Agti = 'agti',
  USDT = 'usdt',
  Crowdsale = 'crowdsale'
}

// Available contracts.
export const contracts = {};

// AGTI contract data.
contracts[Contracts.Agti] = {
  abi: agtiAbi,
  address: {
    [Chains.BSC]: '0xE67feefC1c3C9725397a303B6Fcb5c099411e7b4'
  }
};

// USDT contract data.
contracts[Contracts.USDT] = {
  address: {
    [Chains.BSC]: '0x55d398326f99059ff775485246999027b3197955'
  }
};

// Crowdsale contract data.
contracts[Contracts.Crowdsale] = {
  abi: crowdsaleAbi,
  address: {
    [Chains.BSC]: '0xBeD1cE0Ea3D7EFc3374225dF675F34FAFac885D7'
  }
};

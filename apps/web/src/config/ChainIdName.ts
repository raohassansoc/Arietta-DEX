import { ChainId } from '@pancakeswap/sdk'
import memoize from 'lodash/memoize'

const ARIETTA_ID = 92522;

export const ChainIdName = {
  [ChainId.ETHEREUM]: 'eth',
  [ChainId.GOERLI]: 'goerli',
  [ChainId.BSC]: 'bsc',
  [ChainId.BSC_TESTNET]: 'bscTestnet',
  [ARIETTA_ID]: 'arietta_mainnet'
}

export const getChainId = memoize((chainName: string) => {
  if (!chainName) return undefined
  const parsedQueryChain = Object.entries(ChainIdName).find(([_, value]) => value === chainName)
  return Number(parsedQueryChain?.[0])
})

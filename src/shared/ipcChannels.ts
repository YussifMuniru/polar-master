export default {
  // general app channels
  openWindow: 'open-window',
  clearCache: 'clear-cache',
  http: 'http',
  zip: 'zip',
  unzip: 'unzip',
  // LND proxy channels
  getInfo: 'get-info',
  walletBalance: 'wallet-balance',
  newAddress: 'new-address',
  listPeers: 'list-peers',
  connectPeer: 'connect-peer',
  openChannel: 'open-channel',
  closeChannel: 'close-channel',
  listChannels: 'list-channels',
  pendingChannels: 'pending-channels',
  createInvoice: 'create-invoice',
  payInvoice: 'pay-invoice',
  decodeInvoice: 'decode-invoice',
  // tapd proxy channels
  tapd: {
    listAssets: 'tapd-list-assets',
    listBalances: 'tapd-list-balances',
    mintAsset: 'tapd-mint-asset',
    finalizeBatch: 'tapd-finalize-batch',
    newAddress: 'tapd-new-address',
    sendAsset: 'tapd-send-asset',
    decodeAddress: 'tapd-decode-address',
    assetRoots: 'tapd-asset-roots',
    assetLeaves: 'tapd-asset-leaves',
    syncUniverse: 'tapd-sync-universe',
  },
};

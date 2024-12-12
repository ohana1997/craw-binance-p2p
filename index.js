const axios = require('axios');

const PRIVATE = {
  apiUrl: 'https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search',
  headers: {
    'Content-Type': 'application/json',
  },
}

function getKeysOnDemand(data, keysToKeep) {
  if (Array.isArray(data)) {
      return data.map(item => getKeysOnDemand(item, keysToKeep)); // Process arrays
  } else if (typeof data === "object" && data !== null) {
      const newData = {};
      for (const key of keysToKeep) {
          if (key in data) {
              newData[key] = getKeysOnDemand(data[key], keysToKeep); // Recursively process nested objects
          }
      }
      return newData;
  }
  return data; // Return value if not an object or array
  }


async function getAdvertisers(options) {
  const defaultPayload = {
    fiat: 'VND',
    page: 1,
    rows: 5,
    tradeType: 'BUY',
    asset: 'USDT',
    countries: [],
    proMerchantAds: false,
    shieldMerchantAds: false,
    filterType: 'tradable',
    periods: [],
    additionalKycVerifyFilter: 0,
    publisherType: 'merchant',
    payTypes: [],
    classifies: ['mass', 'profession', 'fiat_trade'],
  };

  // Merge default payload with user-provided options
  const payload = { ...defaultPayload, ...options };

  try {
    const { data: { code, message, data, success } } = await axios.post(PRIVATE.apiUrl, payload, { headers: PRIVATE.headers });
    if (code !== '000000' || success === false ) {
      return {
          success: false,
          data: null,
          message
      }
    }

      const keysToKeep  = ['adv', 'advertiser', 'tradeType', 'fiatUnit', 'price', 'surplusAmount', 'tradableQuantity', 'minSingleTransAmount', 'maxSingleTransAmount',
           'tradeMethods', 'fiatSymbol',
            'nickName', 'monthOrderCount', 'monthFinishRate', 'positiveRate','tradeMethodName'
      ]
      const extractedData = getKeysOnDemand(data, keysToKeep)
      return {
        success: true,
        data: extractedData,
        message: 'Successfully'
    }
  } catch (error) {
      console.log('error :>> ', error);
    console.error('Error calling Binance P2P API:', error.message);
    return {
      success: false,
      data: null,
      message: error.message
  }
  }
}

module.exports = {
  getAdvertisers
};

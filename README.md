# craw-binance-p2p

Sample usage

   

```javascript
     const { getAdvertisers } = require('craw-binance-p2p');
     const result = await getAdvertisers({ fiat: 'USD', tradeType: 'SELL', asset: 'USDT', rows: 5})

    // response
    /**
     {
        success: true,
        data: [
            {
                adv: {
                    tradeType: 'SELL',
                    fiatUnit: 'USD',
                    price: '0.990',
                    surplusAmount: '250.00',
                    tradableQuantity: '249.30',
                    minSingleTransAmount: '100',
                    maxSingleTransAmount: '10000',
                    tradeMethods: [
                        {
                            tradeMethodName: 'Cash Deposit to Bank'
                        }
                    ],
                    fiatSymbol: '$',
                    payTimeLimit: 15
                },
                advertiser: {
                    nickName: 'BitcomTxm',
                    monthOrderCount: 180,
                    monthFinishRate: 0.842,
                    positiveRate: 0.98962962
                }
            },
            {
                adv: {
                    tradeType: 'SELL',
                    fiatUnit: 'USD',
                    price: '1.001',
                    surplusAmount: '24108.82',
                    tradableQuantity: '24066.70',
                    minSingleTransAmount: '500',
                    maxSingleTransAmount: '5000',
                    tradeMethods: [
                        {
                            tradeMethodName: 'KHQR'
                        },
                        {
                            tradeMethodName: 'ABA'
                        },
                        {
                            tradeMethodName: 'ACLEDA Bank'
                        },
                        {
                            tradeMethodName: 'Wing Money'
                        },
                        {
                            tradeMethodName: 'Bank Transfer (Cambodia)'
                        }
                    ],
                    fiatSymbol: '$',
                    payTimeLimit: 15
                },
                advertiser: {
                    nickName: 'ONE-PIECE-V',
                    monthOrderCount: 1670,
                    monthFinishRate: 0.992,
                    positiveRate: 0.99026763
                }
            }
        ],
        message: 'success'
  
    }
    */ 
```



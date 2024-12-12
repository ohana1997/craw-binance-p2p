# craw-binance-p2p

Sample usage

   

```javascript
     const { getTransactions } = require('./index');
     const result = await getTransactions({ fiat: 'USD', tradeType: 'SELL' })

    // response
    {
        success: true,
        data: [
                {
                    adv: {
                        tradeType: 'BUY',
                        fiatUnit: 'USD',
                        price: '1.040',
                        surplusAmount: '1945930.78',
                        tradableQuantity: '1945930.78',
                        minSingleTransAmount: '2000',
                        maxSingleTransAmount: '100000',
                        tradeMethods: [
                            'Array'
                        ],
                        fiatSymbol: '$'
                    },
                    advertiser: {
                        nickName: 'TAKE_AND_GIVE',
                        monthOrderCount: 109,
                        monthFinishRate: 0.88,
                        positiveRate: 0.97750913
	                }
                }
        ],
        message: 'success'
  
    }
```



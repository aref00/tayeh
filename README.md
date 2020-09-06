# Tayeh Client (version: 1.0.0-alpha):
[TayehClient](https://github.com/aref00/tayeh.git)  implementation in JS

-   Easy to Use
-   Promises/A+ Compatible
-   Comprehensive
## ![joystick](https://github.githubassets.com/images/icons/emoji/unicode/1f579.png)  Usage

Install the package from  `npm`  or  `yarn`:  

    npm install tayeh-client
    # or
    yarn add tayeh-client
and require it in your Node project:

    const TayehClient = require('tayeh-client');
    // or
    import TayehClient from 'tayeh-client';
Then create an instance:

    /**
     * Create TayehClient
     * @param {String} `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` [Merchant ID]
     * @param {Boolean} false [toggle `Sandbox` mode]
     */
    const tayeh = TayehClient.create('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', false);
## ![loudspeaker](https://github.githubassets.com/images/icons/emoji/unicode/1f4e2.png)  API

### [](https://github.com/siamak/zarinpal-checkout#-payment-request)★ Payment Request:

    /**
     * PaymentRequest [module]
     * @return {String} URL [Payement Authority]
     */
    zarinpal.PaymentRequest({
      Amount: '1000', // In Tomans
      CallbackURL: 'https://your-safe-api/example/zarinpal/validate',
      Description: 'A Payment from Node.JS',
      Email: 'hi@siamak.work',
      Mobile: '09120000000'
    }).then(response => {
      if (response.status === 100) {
        console.log(response.url);
      }
    }).catch(err => {
      console.error(err);
    });
### ![icecream](https://github.githubassets.com/images/icons/emoji/unicode/1f366.png)![icecream](https://github.githubassets.com/images/icons/emoji/unicode/1f366.png)![icecream](https://github.githubassets.com/images/icons/emoji/unicode/1f366.png)  [DEMO: ZarinPal Express checkout](https://github.com/siamakmokhtari/zarinpal-express-checkout).
<hr>

## ![high_brightness](https://github.githubassets.com/images/icons/emoji/unicode/1f506.png)  To-Do

 - [ ] Add Extra mode for API.
 - [ ] Promises/A+
 - [ ] Unit testing  `mocha`.
 ## ![wave](https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png)  Contribution

Contributions are welcome. Please submit PRs or just file an issue if you see something broken or in need of improving.

## [](https://github.com/siamak/zarinpal-checkout#-license)![four_leaf_clover](https://github.githubassets.com/images/icons/emoji/unicode/1f340.png)  License

This software is released under the  [MIT License](http://siamak.mit-license.org/).

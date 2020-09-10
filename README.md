# Tayeh Client (version: 1.0.0-alpha):
[TayehClient](https://github.com/aref00/tayeh.git)  implementation in JS and TS

-   Easy to Use
-   Compatible
-   Comprehensive
## ![introduction](https://img.icons8.com/nolan/40/training.png) Introduction:
Hello. I hope you are well =))
We are proud that on behalf of [Pchas Company](https://pchas.ir/) , we can provide our new technology to you, dear developers and users.
### A little about Tayeh:
The tools we provide here are part of a larger project called Tayeh.
Tayeh provides a complete and convenient environment for you so that you can easily do all the steps related to the expansion of your business.
For more information, visit the [Tayeh website](https://tayeh.ir/).
### The purpose of this project:
We provide users with the opportunity to use information about themselves and expand their business online.
Now we want to give a special opportunity to developers in this regard who can use our API and no longer need to develop the server side and create data storage tables.
Finally, we went a step further and created an API client library to minimize your workload and save you a lot of time.
In short, we have made everything easier. Don't you think so? ;)
Where is this library now and how should it be used? I will tell you.
Lets start...
## ![start](https://img.icons8.com/nolan/40/start.png) get started:
You need to do something before installing the library.
Go to the [Tayeh website](https://tayeh.ir/) and get `API_KEY` as your username and `API_SECRET` as your password by following the steps described there.
We can now start the installation using this information...
### Installation and Usage:
Install the package from `npm` or `yarn`
We named it "tayeh_client":
```
npm install zarinpal-checkout
# or
yarn add zarinpal-checkout
```
and require it in your project:
```
const TayehClient = require('tayeh-client');
// or
import TayehClient from 'tayeh-client';
```
Then create an instance: (The values you received from the site apply here)
```
const  tayeh  =  new  TayehClient({API_KEY: 'API_KEY', API_SECRET: 'API_SECRET'});
```
After creating an instance in the project and sending the input arguments, a custom `API _ACCESS` will be created for you to use in the library's internal requests.
## ![speaker](https://img.icons8.com/nolan/40/speaker.png) Requests:
Library API requests are currently categorized into `User`, `Shop`, and `Media` classes.
In this document, we try to provide you with a complete guide for using the functions of these libraries. Be sure to read this guide first.
Then it is enough to call the equivalent method from the created instance to achieve the desired result.
for example:

    //Get a shop with an ID 
    tayeh.getShop(2).then((data) =>  {
    //you have data. use it
    })
We start the guide here...
### Shop:
Method title|Input Arguments|Defaults & Limits|Descriptions|Sample output
|---------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------
| getShop |(shop_id:  number)||
| createShop |(params:  NewShop)||
| updateShop |(params:  UpdateShop)||
||||
| getShopPage |(page_number:  number, params?: { text?:  string; creator_id?:  number })||
||||
| getShopProducts |(shop_id:  number, params?: { page?:  number; per_page?: number; search?:  string })||
| createShopProduct |(shop_id:  number, params:  NewProduct)||
| deleteShopProduct |(shop_id:  number, product_id:  number)||
| updateShopProduct |(shop_id:  number, params:  UpdateProduct)||
||||
| getShopTransactions |(shop_id:  number)||
| findShopTransactions |(shop_id:  number, params?: { page?:  number; per_page?: number; search?:  string })||
| getProductTransactions |(shop_id:  number, product_id:  number)||
| deleteShopTransaction |(shop_id:  number, transaction_id:  number)||
| createShopTransaction |(shop_id:  number, params:  NewTransaction)||
| updateShopTransaction |(shop_id:  number, params:  UpdateTransaction)||
||||
| getShopInvoices |(shop_id:  number, params?: { page?:  number; per_page?: number; search?:  string })||
| getShopInvoice |(shop_id:  number, invoice_id:  number)||
| deleteShopInvoice |(shop_id:  number, invoice_id:  number)||
| createShopInvoice |(shop_id:  number, params:  NewInvoice)||
| updateShopInvoice |(shop_id:  number, params:  UpdateInvoice)||
||||
| getShopSeries |(shop_id:  number, params?: { page?:  number; per_page?: number; type?:  string; page_unit?:  string; })||
||||
| getShopTotal |(shop_id:  number, params?: { page?:  number; per_page?: number; product_id?:  number; })||
||||
| getShopRevenue |(shop_id:  number, params?: { unit?:  string; product_id?:  number; start?:  number; end?:  number; })||
||||
| getShopCustomers |(shop_id:  number, params?: { page?:  number; per_page?: number; search?:  string })||
| getShopCustomer |(shop_id:  number, customer_id:  number)||
| deleteShopCustomer |(shop_id:  number, customer_id:  number)||
| createShopCustomer |(shop_id:  number, params:  NewCustomer)||
| updateShopCustomer |(shop_id:  number, params:  UpdateCustomer)||
||||
| getShopUsers |(shop_id:  number, params?: { page?:  number; per_page?: number; search?:  string })||
| getShopUser |(shop_id:  number, user_id:  number)||
| deleteShopUser |(shop_id:  number, user_id:  number)||
| createShopUser |(shop_id:  number, params:  NewUser)||
| updateShopUser |(shop_id:  number, params:  UpdateUser)||
||||
| getShopAddresses |(shop_id:  number, params?: { page?:  number; per_page?: number; search?:  string })||
| deleteShopAddress |(shop_id:  number, address_id:  number)||
| createShopAddress |(shop_id:  number, params:  NewAddress)||
| updateShopAddress |(shop_id:  number, params:  UpdateAddress)||
### User:
Method title|Input Arguments|Defaults & Limits|Descriptions|Sample output
|---------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------
| getUserMe |()||
| getShopPrimary |()||
| createShopPrimary |(shop_id:  number)||
| getUserShops |(params?:  Pagination)||
| updateShop |(params?:  { page?:  number; per_page?: number; })||
### Media:
Method title|Input Arguments|Defaults & Limits|Descriptions|Sample output
|---------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------
| getMedia |(media_id:  number)||
| createMedia |(params:  NewMedia)||
## ![contribution](https://img.icons8.com/cotton/40/crowdfunding.png) Contribution:
Contributions are welcome. Please submit an issue if you see something broken or in need of improving.
You can also contact us through the communication channels mentioned in [Tayeh](https://tayeh.ir/) and [Pchas Company](https://pchas.ir/) websites.
Thanks for your support.

# tayeh_client (version: 1.0.0-alpha):
tayeh_client implementation in JS and TS

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
In "Tayeh" we provide users with the opportunity to use information about themselves and expand their business online.
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
npm install tayeh_client
# or
yarn add tayeh_client
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
After creating an instance in the project and sending the input arguments, a custom `API _ACCESS` will be generated for you to use in the library's internal requests.
## ![speaker](https://img.icons8.com/nolan/40/speaker.png) Requests:
Library API requests are currently categorized into `User`, `Instance`, and `Media` classes.
In this document, we try to provide you with a complete guide for using the functions of these libraries. Be sure to read this guide first.
Then it is enough to call the equivalent method from the created instance to achieve the desired result.
for example:

    //Get an instance with an ID 
    tayeh.getInstance(2).then((data) =>  {
    //you have data. use it
    })
We start the guide here...
### Instance:
Method title|Input Arguments|Defaults & Limits|Descriptions|Sample output
|---------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------
| getInstance |(instance_id:  number)||
| createInstance |(params:  NewInstance)||
| updateInstance |(params:  UpdateInstance)||
||||
| getInstancePage |(page_number:  number, params?: { text?:  string; creator_id?:  number })||
||||
| getInstanceProducts |(instance_id:  number, params?: { page?:  number; per_page?: number; search?:  string })||
| createInstanceProduct |(instance_id:  number, params:  NewProduct)||
| deleteInstanceProduct |(instance_id:  number, product_id:  number)||
| updateInstanceProduct |(instance_id:  number, params:  UpdateProduct)||
||||
| getInstanceTransactions |(instance_id:  number)||
| findInstanceTransactions |(instance_id:  number, params?: { page?:  number; per_page?: number; search?:  string })||
| getProductTransactions |(instance_id:  number, product_id:  number)||
| deleteInstanceTransaction |(instance_id:  number, transaction_id:  number)||
| createInstanceTransaction |(instance_id:  number, params:  NewTransaction)||
| updateInstanceTransaction |(instance_id:  number, params:  UpdateTransaction)||
||||
| getInstanceInvoices |(instance_id:  number, params?: { page?:  number; per_page?: number; search?:  string })||
| getInstanceInvoice |(instance_id:  number, invoice_id:  number)||
| deleteInstanceInvoice |(instance_id:  number, invoice_id:  number)||
| createInstanceInvoice |(instance_id:  number, params:  NewInvoice)||
| updateInstanceInvoice |(instance_id:  number, params:  UpdateInvoice)||
||||
| getInstanceSeries |(instance_id:  number, params?: { page?:  number; per_page?: number; type?:  string; page_unit?:  string; })||
||||
| getInstanceTotal |(instance_id:  number, params?: { page?:  number; per_page?: number; product_id?:  number; })||
||||
| getInstanceRevenue |(instance_id:  number, params?: { unit?:  string; product_id?:  number; start?:  number; end?:  number; })||
||||
| getInstanceCustomers |(instance_id:  number, params?: { page?:  number; per_page?: number; search?:  string })||
| getInstanceCustomer |(instance_id:  number, customer_id:  number)||
| deleteInstanceCustomer |(instance_id:  number, customer_id:  number)||
| createInstanceCustomer |(instance_id:  number, params:  NewCustomer)||
| updateInstanceCustomer |(instance_id:  number, params:  UpdateCustomer)||
||||
| getInstanceUsers |(instance_id:  number, params?: { page?:  number; per_page?: number; search?:  string })||
| getInstanceUser |(instance_id:  number, user_id:  number)||
| deleteInstanceUser |(instance_id:  number, user_id:  number)||
| createInstanceUser |(instance_id:  number, params:  NewUser)||
| updateInstanceUser |(instance_id:  number, params:  UpdateUser)||
||||
| getInstanceAddresses |(instance_id:  number, params?: { page?:  number; per_page?: number; search?:  string })||
| deleteInstanceAddress |(instance_id:  number, address_id:  number)||
| createInstanceAddress |(instance_id:  number, params:  NewAddress)||
| updateInstanceAddress |(instance_id:  number, params:  UpdateAddress)||
### User:
Method title|Input Arguments|Defaults & Limits|Descriptions|Sample output
|---------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------
| getUserMe |()||
| getInstancePrimary |()||
| setInstancePrimary |(instance_id:  number)||
| getUserInstances |(params?:  Pagination)||
| updateInstance |(params?:  { page?:  number; per_page?: number; })||
### Media:
Method title|Input Arguments|Defaults & Limits|Descriptions|Sample output
|---------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------
| getMedia |(media_id:  number)||
| uploadMedia |(params:  NewMedia)||
## ![contribution](https://img.icons8.com/cotton/40/crowdfunding.png) Contribution:
Contributions are welcome. Please submit an issue if you see something broken or in need of improving.
You can also contact us through the communication channels mentioned in [Tayeh](https://tayeh.ir/) and [Pchas Company](https://pchas.ir/) websites.
Thanks for your support.

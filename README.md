# Tayeh Client:
@tayeh.js implementation in JS and TS

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
We named it "tayeh.js":
```
npm install tayeh.js
# or
yarn add tayeh.js
```
and require it in your project:
```
const TayehClient = require('tayeh.js');
// or
import TayehClient from 'tayeh.js';
```
Then create an instance: (The values you received from the site apply here)
```
const  tayeh  =  new  TayehClient({
    name: "project name (can be everything)",
    api_access: "your instance access key",
    instance_id: "access key"
});
```
After creating an instance in the project and sending the input arguments, a custom `API _ACCESS` will be generated for you to use in the library's internal requests.
## ![speaker](https://img.icons8.com/nolan/40/speaker.png) Requests:
Library API requests are currently categorized into `User`, `Instance`, `Customer`, `Product`, `Crm` and `Media` classes.
In this document, we try to provide you with a complete guide for using the functions of these libraries. Be sure to read this guide first.
Then it is enough to call the equivalent method from the created instance to achieve the desired result.
for example:

    //Get an instance with an ID 
    tayeh.getProducts().then((data) =>  {
    //you have data. use it
    })
We start the guide here...
### Instance:
Method title|Input Arguments|Defaults & Limits|Descriptions|Sample output
|---------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------
|getProducts|(params?: ProductParams)||
|createProduct|(params: NewProduct)||
|deleteProduct|(product_id: string)||
|updateProduct|(params: UpdateProduct)||
|createProductPrice|(params: CreatePrice)||
|updateProductPrice|(params: UpdatePrice)||
|updateProductPrices|(params: UpdatePrices)||
|getProductPrices|(product_id: string)||
|addProductMedia|(product_id: string, params: ProductMedia)||
|deleteProductMedia|(product_id: string, media_id: string)||
|setProductFeatures|(product_id: string, body: SetFeatures)||
|setProductPriceFilter|(product_id: string, params: SetProPrices)||
|deleteOptionPrice|(product_id: string, option_id: string)||
|getInstanceInvoices|(params?: InvoicesParams)||
|getInstanceInvoice|(invoice_id: string)||
|deleteInstanceInvoice|(invoice_id: string)||
|setDeliveryStatus|(invoice_id: string, body: SetDeliveryStatus)||
|getInstanceCustomers|(params?: SearchParams)||
|getInstanceCustomer|(customer_id: string)||
|deleteInstanceCustomer|(customer_id: number)||
|createInstanceCustomer|(params: NewCustomer)||
|updateInstanceCustomer|(customer_id: string, params: UpdateCustomer)||
|acceptInstanceCustomer|(customer_id: string)||
|getCategories|(params?: CategoryParams)||
|createCategory|(params: NewCategory)||
|updateCategory|(params: EditCategory)||
|deleteCategory|(category_id: string)||
|createCategoryFilterGroup|(category_id: string, params: FilterGroup)||
|createCategoryFilter|(category_id: string, params: CategoryFilter)||
|getCategoryFeatures|(category_id: string)||
|deleteCategoryFilter|(category_id: string, filter_id: string)||
|deleteFilterOption|(category_id: string, filter_id: string, option_id: string)||
|setCategoryStatus|(category_id: string, body: CategoryStatus)||
|createBrand|(params: NewBrand)||
|updateBrand|(params: EditBrand)||
|deleteBrand|(brand_id: string)||
|getBrands|()||
|createBannerCategory|(body: NewBannerCat)||
|getBannerCategories|()||
|deleteBannerCategory|(category_id: string)||
|getBanners|(params?: BannerParams)||
|createBanner|(body: NewBanner)||
|deleteBanner|(banner_id: string)||
|updateBanner|(body: EditBanner)||
|getInstanceDeliveryMethods|()||
|createInstanceDeliveryMethod|(body: NewDeliveryMethod)||
|setDeliveryMethodStatus|(method_id: string, body: SetMethodStatus)||
|createNotification|(body: CreateNotif)||
|getInstanceNotifications|(params: Pagination)||
|getSearchFilters|(params?: SearchFilters)||
|sendInviteSms|(params: InviteParams)||
|getTopKeywords|(params: SearchFilters)||
|updateRemainingWithChoices|(body: AutoRemaining)||
|updateRemainingsWithChoices|(body: BatchRemaining)||
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

### Customer:
Method title|Input Arguments|Response (T) Wraped in Promise<AxiosResponse<`T`>>
|---------------------------|-----------------------------|-----------------------------
| getPassword|(mobile: string)| `AuthResponse`| true
| customerVerify|(mobile: string, code: string)| `AuthResponse`| true
| getVerification|(email: string)| `AuthResponse`| true
| emailVerify|(email: string, code: string)| `AuthResponse`| true
| customerLogin|(username: string, password: string)| `AuthResponse`| true
| customerRegister|(body: RegisterCustomer)| `AuthResponse`| true
| resetCustomerPassword|(body: CustomerResetPass)| `void`| true
| getCustomerMe|()| `GetCustomerProfileResposne`| true
| getCustomer|()| `GetCustomerProfileResposne`| true
| updateCustomer|(body: UpdateCustomer)| `SimpleErr`| true
| addProductToCart|(body: AddToCartBody)| `SimpleErr`| true
| toggleProductFavorite|(body: ToggleFavorite)| `SimpleErr`| true
| getCustomerCart|(params: Pagination)| `GetCustomerCartResponse`| true
| updateCartItem|(body: UpdateCartItem)| `any`| true
| deleteCartItem|(cart_item_id: string)| `SimpleErr`| true
| getNotifications|(params?: Pagination)| `{objects: GetCustomerNotificationResponse[];count: number;`}| true
| getCustomerNotification|(notification_id: string)| `GetCustomerNotificationResponse`| true
| getFavorites|(params: Pagination)| `any`| true
| getProductsHistory|(params: Pagination)| `[GetCustomerFavoriteProductResponse]`| true
| getAddresses|()| `GetCustomerAddressResponse[]`| true
| createAddress|(body: NewAddress)| `SimpleErr`| true
| updateAddress|(body: UpdateAddress)| `void`| true
| deleteAddress|(address_id: string)| `SimpleErr`| true
| setCartDelivery|(body: NewAddress, d_method_id?: string, methods?: PaymentMethod)| `SimpleErr`| true
| setAvatar|(avatar_id: string)| `SimpleErr`| true
| getInvoicesHistory|(params?: InvoiceHistory)| `[GetCustomerInvoiceResponse]`| true
| getInvoice|(invoice_id: string)| `GetCustomerInvoiceResponse`| true
| getCustomerCredit|()| `GetCustomerCreditResponse`| true
| getCartPay|()| `PayCustomerCartResponse`| true
| depositCustomerMoney|(body: DepositMoney)| `CustomerDepositResponse`| true
| getCartDeliveryMethods|()| `GetCustomerDeliveryMethodsResponse`| true
| getLatestUnseenNotification|()| `GetCustomerNotificationResponse[]`| true

### Country:
Method title|Input Arguments|Defaults & Limits|Descriptions|Sample output
|---------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------
|getCountries|(params: SearchParams)||
|getIranProvinces|(params: Qsearch)||
|getStateCities|(state_id: string, params: Qsearch)||


## ![contribution](https://img.icons8.com/cotton/40/crowdfunding.png) Contribution:
Contributions are welcome. Please submit an issue if you see something broken or in need of improving.
You can also contact us through the communication channels mentioned in [Tayeh](https://tayeh.ir/) and [Pchas Company](https://pchas.ir/) websites.
Thanks for your support.

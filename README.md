# manufacturer-website-client-side

The Valo Phone is a mobile manufacturer website where a company can build their phone. You can choose your own parts quality .


# Links

## Live Site: [Client Side](http://valophone.web.app/ "Client Side")
## Server Link: [Server Side](https://valophone.herokuapp.com "Server Side")

# Futures 
- User Can Buy Parts
- user Can Pay For Their Order
- Users can review
- Admin can delivery cancel and ship order
- admin can add new parts
- admin can manage user
## **Tasks **
## Main 
- [x] Site Must Be About Manufacturer.

### Home Page
- [x] Homepage Will have 
   - [x] Navbar
  - [x] Hero Banner
  - [x] Parts Section
    - [x] Tools Part Section will have 6 tools with Name, Img, description, minimum order quantity, available quantity, price per unit, buy now button
  - [x] Business Summary Stats
    - [x] Business Stats
  - [x] Customer Testimonials 
  - [x] Footer
  - [x] Two Different Section 

### Purchase Page 
- [x] It will be a private route
- [x] User will redirect to the desire page after login
- [x] Purchase page will show detail information about the parts
- [x] Two Grid Card
  - [x] One side will be about product
  - [x] 1st side, there will be option to change quantity but not more than available and not less than minimum quantity.
  - [x] Other Side will show user name, email from auth state
  - [x] 2nd Side should have option to input user address phone number

### Login Page 
- [x] Login With Email and Password
- [x] Registration Page should name name option and auto update in database
- [x] Save user information on database upon login or create account
- [x] Show logout or user profile picture after login / before login only login button
- [x] One Social Login Option 
  
### Dashboard 
- [x] User will see a dashboard option after login 
- [x] Non Admin will see My Orders, Review, My Profile Section
- [x] User Can update their profile from my profile section 
- [x] On My Order Page they will see their own order 
- [x] User can cancel non paid order
- [x] Warning before cancel
- [x] Payment Button for non paid order
- [x] Payment Page Will show order Descriptions 
- [x] For Paid Order, User will see Trx ID on my order page 
- [x] Status Table paid, unpaid, pending 
- [x] User can add review the review will be shown on home page. 
- [x] My Profile will show user name and and email address
- [x] My Profile will have input fields like education, location, phone number,  linkedin profile. The information will be saved on database upon submit.
- [x] Admin Will see Manage All Order, Add a Product, Manage product,  Manage User
- [x] Admin Can add product with Image BB Upload Link

### Blog Page
- [x] Question answer in blog section
### My Portfolio Route
- [x] Show name, email, education background, skill tech and three live website like. 

### 404 Page
- [x] Meaningful 404 Page 

## Bonus Part

- [x] Readme file should have client and server link
- [x] Add 5 Bullet Point About Website Feaures
- [x] Github Commit
- [x] Make Website responsive 
- [x] No Lorem Ipsum
- [x] use git ignore, .env 
- [x] On Manage order all order will be shown, paid non paid status, admin can update the paid status
- [x] admin can change the order status pending to shipped
- [x] admin can cancel the order (non paid only)
- [x] Confirm Before Delete
- [x] basic JWT
- [x] verify admin
- [x] admin can delete product
- [x] use react query for API Call
- [x] Use React Hook Form


## What to submit 
- [x] Client-side code github repository
- [x] Server-side code github repository
- [x] Live website link
- [x] For our testing purpose, you will need to provide admin credentials (an email address and a password)
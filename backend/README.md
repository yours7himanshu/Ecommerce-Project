<!-- Intro  -->
<h3 align="center">
        <samp>&gt;Welcome to FlipZone! (Backend-side) 🛍️</samp>
</h3>

<p align="center"> 
  <samp>
    <a href="https://formease.app/" target="_blank">「 Google Us 」</a>
    <br>
    「 FlipZone is not just an e-commerce website; it's your gateway to a world of seamless shopping experiences. Discover a range of products, sign up for exclusive deals, and breeze through the checkout process with our user-friendly interface. 」
    <br>
    <br>
  </samp>
</p>

<p align="center">
 <a href="#" target="blank">
  <img src="https://img.shields.io/badge/Website-a09898?style=for-the-badge&logo=github&logoColor=black" alt="flipzone" />
 </a>
 <a href="https://www.linkedin.com/company/formease/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="flipzone"/>
 </a>
 <a href="#" target="_blank">
  <img src="https://img.shields.io/badge/Instagram-fe4164?style=for-the-badge&logo=instagram&logoColor=white" alt="flipzone" />
 </a> 
</p>
<br />

## Languages used to code
![Javascript](https://img.shields.io/badge/Javascript-F0DB4F?style=for-the-badge&labelColor=black&logo=javascript&logoColor=F0DB4F)
![Typescript](https://img.shields.io/badge/Typescript-007acc?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007acc)
![React](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)
![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Nodejs](https://img.shields.io/badge/Nodejs-3C873A?style=for-the-badge&labelColor=black&logo=node.js&logoColor=3C873A)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-f49a2d?style=for-the-badge&logo=MySQL&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-563D7C?style=for-the-badge&logo=PHP&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![CPP](https://img.shields.io/badge/C++-1572B6?style=for-the-badge&logo=cplusplus&logoColor=white)
![Python](https://img.shields.io/badge/Python-366c9e?style=for-the-badge&logo=Python&logoColor=white)
![SASS Badge](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![React Query](https://img.shields.io/badge/-React_Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![VSCode](https://img.shields.io/badge/Visual_Studio-0078d7?style=for-the-badge&logo=visual%20studio&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github&logoColor=white)
<br/>

## **Schema**

-   ### User

    -   `_id` _(auto-generated-unique)_ 
    -   `name`
    -   `email` _(unique)_
    -   `username` _(unique)_
    -   `password`

-   ### Product

    -   `_id` _(auto-generated-unique)_ 
    -   `name`
    -   `description`
    -   `price`
    -   `category`

-   ### Cart

    -   `_id` _(auto-generated-unique)_ 
    -   `userId`
    -   `items`

## **API Router Endpoints**

-   ### User
    -   `/api/v1/u/register` - **POST** - Welcome aboard! Register as a new user.
    -   `/api/v1/u/login` - **POST** - Dive into the FlipZone. Login and receive a JWT token.
    -   `/api/v1/u/logout` - **DELETE** - Time to check out? Logout and expire your JWT.
    -   `/api/v1/u/forgetPassword` - **POST** - Forget your password? No worries! Get an OTP in your inbox to reset it.
    -   `/api/v1/u/changePassword` - **PATCH** - Update your password securely with an OTP and old/new password.

-   ### Product
    -   `/api/v1/p/products` - **POST** - Create a new product
    -   `/api/v1/p/products` - **GET** - Get a list of all products
    -   `/api/v1/p/products/:productId` - **GET** - Get detailed information about a specific product.
    -   `/api/v1/p/products/:productId` - **PATCH** - Update a specific product
    -   `/api/v1/p/products/:productId` - **DELETE** - Delete a specific product

-   ### Cart
    -   `/api/v1/c/:userId` - **GET** - Get user's cart
    -   `/api/v1/c/:userId/add` - **POST** - Add item to cart
    -   `/api/v1/c/:userId/update/:productId` - **PATCH** - Update item quantity in cart
    -   `/api/v1/c/:userId/remove/:productId` - **DELETE** - Remove item from cart

At FlipZone, we believe in making your shopping journey as delightful as possible. Join us today and experience the joy of flipping through an endless array of products. Happy shopping! 🌟
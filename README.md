# My Blogs

## Introduction
I built a simple CRUD of blogs here by Next.js App router.

This project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## How to run

First, run the development server:

```bash
npm install
npm run dev
```

Visit the following pages:
- http://localhost:3000/
- http://localhost:3000/blogs
  
  Initially you will be redirected to the login page. You can log in using these test credentials: `john@grandshipper.com` / `password`.

  After logging in, you will be able to view a list of blogs that I created for demonstration purposes. Additionally, you can add, update, and delete blogs on your own.

  *(For simplicity, I've implemented all CRUD operations using an in-memory cache.)*

![Login](/screenshots/login.png)
![Blogs](/screenshots/blogs.png)
![Create](/screenshots/create.png)
![Show](/screenshots/show.png)

## Main Features

- Login / Logout by email and password
- Authentication with Cookie and JWT

  In real-life authentication scenarios, we invoke an external API with an email and password. The API then returns JWT tokens (like access and refresh tokens), which we use for subsequent calls.

  For this challenge, I have implemented mock authentication that verifies the credentials and returns JWT tokens. These tokens are saved into cookies for persistent client-side sessions.

  During server-side rendering, the application reads the JWT from the cookie and uses it to fetch data from external APIs.

- CRUD of blogs, with dynamic routing
- Static / Dynamic rendering
  - Static Rendering: `/`, `/about-us`
  - Dynamic Rendering: `/login`, `/blogs/~`

```
Route (app)                              Size     First Load JS
┌ ○ /                                    192 B          93.8 kB
├ ○ /_not-found                          871 B          87.7 kB
├ ○ /about-us                            192 B          93.8 kB
├ ƒ /blogs                               192 B          93.8 kB
├ ƒ /blogs/[slug]                        192 B          93.8 kB
├ ƒ /blogs/[slug]/delete                 140 B            87 kB
├ ƒ /blogs/[slug]/edit                   192 B          93.8 kB
├ ƒ /blogs/publish                       192 B          93.8 kB
└ ƒ /login                               192 B          93.8 kB
+ First Load JS shared by all            86.8 kB
  ├ chunks/23-c9fd11bd7f38ece4.js        31.3 kB
  ├ chunks/fd9d1056-2821b0f0cabcd8bd.js  53.6 kB
  └ other shared chunks (total)          1.86 kB


ƒ Middleware                             22.6 kB

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

## Major files

- lib/mockApi.js
- lib/session.js
- components/SignOut.js

I hope this would be enough to showcase all the features of Next.js and my ability! :)

Thank you.
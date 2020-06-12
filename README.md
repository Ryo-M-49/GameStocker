# GameStocker
![](https://img.shields.io/badge/Release-v1.0.0-green.svg)
![](https://img.shields.io/badge/Rails-v6.0.3.1-b82054.svg)
![](https://img.shields.io/badge/React-v16.12.0-blue.svg)
<br>
https://gamestocker.net

# Overview
__Stock Game, Explore New!__<br>
Interactive platform for gamers who want to find and share gaming experiences.<br>
- write a review to store your game experience, which helps other gamers to find a new game!
- read a review of other user and like it if you feel so!
- the more you write a review and recieve a like, the more your status will be grown up!
- if you achive a certain status, you can get reward like discount for games, amazon gift card and more! 

# Actual Screens & Features
|![demo](https://user-images.githubusercontent.com/57619070/83413460-d1aadd00-a456-11ea-8fa4-414519d8f982.gif)|![auth](https://user-images.githubusercontent.com/57619070/84392135-e9434c00-ac34-11ea-95a7-6fc8232cec6e.jpg)|
|---|---|
|__Demo__|__Sign In/Sign Up__ - enables you to create/like a review.|

|![top](https://user-images.githubusercontent.com/57619070/84391058-679eee80-ac33-11ea-93c2-e660d7d8120c.jpg)|![user_review_1](https://user-images.githubusercontent.com/57619070/84392039-c6189c80-ac34-11ea-8fc2-7464936976c6.jpg)|
|---|---|
|__Top__ - you can see recent reviews of all users.|__Review Detail (User)__ - you can see the detail of a selected review.|

|![your_review_1](https://user-images.githubusercontent.com/57619070/84392054-ca44ba00-ac34-11ea-826f-a3bc33bc60e5.jpg)|![rakuten](https://user-images.githubusercontent.com/57619070/84392083-d6c91280-ac34-11ea-8ac8-b520204fc1e2.jpg)|
|---|---|
|__Review Detail (Yours)__ - you can check and edit your review.|__Game Detail__ - you will be redirected to a corresponding game detail of Rakuten Book.|

|![game_list](https://user-images.githubusercontent.com/57619070/84392101-de88b700-ac34-11ea-84a1-29c19837f9e3.jpg)|![search](https://user-images.githubusercontent.com/57619070/84392115-e2b4d480-ac34-11ea-80b3-2b0ff63ee6ae.jpg)|
|---|---|
|__Game List__ - you can find a game you want to write a review about.|__Search__ - you can search a game with a title.|

|![user_page](https://user-images.githubusercontent.com/57619070/84392162-ef392d00-ac34-11ea-8647-51398eb3135a.jpg)|![my_page](https://user-images.githubusercontent.com/57619070/84392150-eba5a600-ac34-11ea-93b7-3ffcb8cd238a.jpg)|
|---|---|
|__User Page__ - you can check the detail of a user.|__My Page__ - you can edit your introduction, name, image, reviews, etc..|

# Technologies
## Backend
- Ruby 2.6.5
- Ruby on Rails 6.0.3.1
- [Rakuten Books Game Search 2017-04-04](https://webservice.rakuten.co.jp/api/booksgamesearch/)

## Main Gem
- devise/devise token auth (Authentication)
- counter_culture (Record Counting)
- dotenv_rails (Environment Path Management)

## Frontend
- react 16.12.0
- redux 4.0.5
- axios 0.19.2
- enzyme 3.11.0
- prop-types 15.7.2
- prettier 1.19.1

## Infrastructure
![Diagram](https://github.com/Ryo-M-49/GameStocker/blob/development/GameStocker%20Diagram.PNG)



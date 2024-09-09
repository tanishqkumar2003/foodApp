# Namaste-React
 This repository contains all the learnings while learning React JS from #Namaste-React Course.  
 Addon feature :: Restaurants can be searched by city name. 

## FoodApp
Order food from the confort of your home, get datails of latest restaurants available in your city.   
Pick a dish, get each and every detail & add it to cart.

## Tech - Stack
1. Frontend Library: React JS
2. Styling: Tailwind CSS
3. Database: Firebase
4. Bundler: Parcel
5. State Management: Redux Toolkit

## Working of project
1. We fetch the restaurants of your city from Swiggy API, getting the live data.
2. Used an API to get city name by using Longitude and Latitude fetched by Swiggy API so as to search reastaurant according to city name.
3. Display them with Area name, Price, Cuisines Category and Ratings.
4. Search Restaurants by Name.
5. Search Restaurants by City.
6. For any restaurant, you can checkout all the different type of dishes available with details and prices per quantity.
7. Add to cart.


## Improvements to make
1. Not responsive for Mobile phones
2. Cart data is not stored anywhere, it should be in local storage for not logged in users to avoid losing on refresh page.


## How to run on your local
1. Clone the repository 
2. Run ```npm init```
3. Run ```npm start```.
4. Make sure you've CORS extension installed in your browser.

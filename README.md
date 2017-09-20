# StockIT

## Heroku Link
* [StockIT Heroku Link](https://stockit8.herokuapp.com/)

## What is StockIT?

* Built using rails in the backend and the ERB template engine to render the frontend, StockIT is an application that allows users to create a portfolio. Users in time will eventually be able to see how much there portfolio has changed since they purchased compared to the various stocks current prices.

## Technical Discussion

* Devise was used for authentication purposes. It allows users to log in and out while giving them the ability to access their stocks.

* The Stock Quote gem was used to git the necessary stock data. An Ajax all was made using Jquery to asynchronously access the stock information the user requested.This information would render the lookup partial that would display the stock results. The results would include a button to add to the users portfolio. If the user adds this it will be sent to the users_stock controller where it will hit the create method to insert the stock into the database and the user will then receive a success message along with the userstock list partial also being updated and displayed.  

## Going forward

* I would like to work on the css and further complete the design portion of this assignment. I would also like to hit an api for articles tied to those specific stocks on a stock show page. Long term it would be for users to be able to add friends and create a stock social media app so users can discuss their portfolios and view others portfolios.





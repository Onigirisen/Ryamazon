# <a href="https://ryamazon.herokuapp.com/">Ryamazon</a>

## Background

Ryamazon is my take on a clone of the Amazon website. Although there was a goal to be pixel perfect as possible, some "artistic" and some "functional" liberties were taken.

On Ryamazon, users will be able to sign up, login, browse the products either by all or based on category. Users will be able to add a items to the cart as well as checkout and finally logout.

## Functionality & MVP

On Ryamazon, users will be able to:

1. Sign up, Sign in and Sign out.
2. User Authentication is fully functional for both the frontend and the backend validations.
3. If there are any errors they will be displayed to the users on the front end and well as the backend.
4. Products on the can be browsed by the user either through the index page which shows a list of all products, the product show page where are specific product will be displayed, or view products by category.
5. The cart functionality is fully functional. Users can add items to the cart, remove items from the cart as well as checkout to a checkout page. The checkout process for payment is not a funtionality however (not yet!).

Bonus MVPs:

- Game starting menu
- Various color themes and backgrounds.
- Different types of board layouts.
- List of high scores (maybe an add-in)

## Technologies Used

Technologies used to develop this app:

- Ruby on Rails
- React / Redux
- Javascript/Jbuilder
- Webpack to bundle js files
- PostgreSQL
- AWS S3 and AWS IAM
- Heroku

## Techinical Implementation Details

## ToDos

The game is still at it's barebones state. The features to make this a playable game still need to be implemented.

- Creating the curoser arrow for the play to be able to shoot towards a direction.
- Creating the random balls to act as projectiles for the player to shoot.
- Implementing collision logic to the balls to detect when the ball shot hits a wall to redirect direction and the grid to detect whether a ball has hit.
- Implementing the neigboring color detection logic to determine whether a cluster of like colors have been hit/whether to keep the clust active or destroy the cluster depending on how many balls of like colors are on the cluster.

## Future Features

Future features to include the following:

1. View and leave reviews on a product.
2. Searching by search bar inputs.

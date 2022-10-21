# README

# <a href="https://ryamazon.herokuapp.com/">Ryamazon</a>

## Background
Ryamazon is my take on a clone of the Amazon website. Although there was a goal to be pixel perfect as possible, some "artistic" and some "functional" liberties were taken. 


On Ryamazon, users will be able to sign up, login, browse the products either by all or based on category. Users will be able to add a items to the cart as well as checkout and finally logout.

## Functionality & MVP
On Ryamazon, users will be able to:
1. Sign up, Sign in and Sign out. 
2. User Authentication is fully functional for both the frontend and the backend validations.
3. If there are any errors they will be displayed to the users on the front end and well as the backend.
4. Products on the can be browsed by the user either through the index page which shows a list of all products, the product show page where are specific      product will be displayed, or view products by category.
5. The cart functionality is fully functional. Users can add items to the cart, remove items from the cart as well as checkout to a checkout page. The        checkout process for payment is not a funtionality however (not yet!).

Bonus MVPs:
- Game starting menu
- Various color themes and backgrounds.
- Different types of board layouts.
- List of high scores (maybe an add-in)

## Technologies Used
Technologies will be used to develop this game:
- Ruby on Rails
- React / Redux
- Javascript/Jbuilder
- Webpack to bundle js files
- PostgreSQL
- AWS S3 and AWS IAM
- Heroku

## Techinical Implementation Details
During development, there arose a unique set of challenges with regards to setting up of the "level" of the game. Each of the placement of the of the balls that were to be knocked down needed to be set up in a grid with each row of balls alternating between rows containing balls that were spaced evenly spaced with a distance of 2 * r(radius) between the center points of the circles and the next row slightly offset setting the x coordinate to create the lattice like placement. The solution to the problem posed was to manually set each level of the in an array (manually setting the colors of the balls that would appear on the grid and their relative positions) and the translate that array into coordinates that could be mapped to the canvas. 

```
calcPos(row, col) {
    const isOddRow = row % 2 === 1;
    const radius = CONFIG.circle.radius;
    let pos_x = isOddRow ? radius*2 : radius, pos_y = radius;
    return [radius * col * 2 + pos_x, radius * row * 2 + pos_y - (6 * row)];
}
```
This function above was used to convert the relative positions of the balls by taking the coordinates of the row and columns from the array and then checking to see if it is an even or an odd row. Based on this information, the mapping and convertion to canvas coordinates would be possible. Based on whether or not the row was even or odd, the starting position of the row would be determined. The offset placement logic is also calculated as the coordinate tranlation is taking place. 

Once the canvas coordinates have been obtained, the below function outlines the simultaneous ball creation and placement of the balls creating the lattice like grid structure. This process was my approach to working around setting up a hexagonal grid structure.

```
generateRows() {
    const radius = CONFIG.circle.radius;
    let grid = [];
    for (let i = 0; i < this.rows.length; i++) {
      const circles = [];
      this.rows[i].forEach((color, j) => {
        const pos = this.calcPos(i, j);
        const cell = new Cell({
          coordinate: [i, j],
          pos_x: pos[0],
          pos_y: pos[1],
          radius,
          color
        });
        circles.push(cell);
      });
      grid.push(circles);
    }
    this.rows = grid;
}
```
Using the grid, we would call on the draw function defined in game_view.js to draw the grid to the canvas.

## ToDos
The game is still at it's barebones state. The features to make this a playable game still need to be implemented.
- Creating the curoser arrow for the play to be able to shoot towards a direction.
- Creating the random balls to act as projectiles for the player to shoot.
- Implementing collision logic to the balls to detect when the ball shot hits a wall to redirect direction and the grid to detect whether a ball has hit.
- Implementing the neigboring color detection logic to determine whether a cluster of like colors have been hit/whether to keep the clust active or destroy the cluster depending on how many balls of like colors are on the cluster.

## Future Features
Future features to include the following:
1. Score tracking.
2. Menu screen. 
3. High score board.


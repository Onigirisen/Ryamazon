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

Users are able to select quantity and add the item to cart as well remove items from the cart. Finally, users will be able to check out the items in the cart.

![](frontend/src/assets/images/empty-cart-background.png)

```javascript
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userId = useSelector((state) => state.session.user?.id);
  const [subTotal, setSubtotal] = useState(0.0);
  const history = useHistory();
  useEffect(() => {
    calculateSubtotal();
  });

  const calculateSubtotal = () => {
    let sum = 0;
    cart.forEach((cartItem) => {
      sum += cartItem.quantity * cartItem.price;
    });

    setSubtotal(Math.round(sum * 100) / 100);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(removeAllItemsFromCart(userId));
    history.push("/cart/checkout");
  };

export const removeAllItemsFromCart = (user_id) => async (dispatch) => {
  const res = await csrfFetch("/api/destroy_cart_items/", {
    method: "DELETE",
    body: JSON.stringify({ user_id }),
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  dispatch(receiveCart(data));
};
```

```ruby
def destroy_cart_items
        @user = User.find(params[:user_id])
        @cart = Cart.where(user_id: params[:user_id]).destroy_all
        render :show
end
```

The above code make it possible to grab the slice of the cart state from the store utilizing the useSelector and on clicking the check out button, a request of removeAllItemsFromCart will be made to the backend to a custom route calling on the destroy_cart_items which will return a response of removing all items from the cart thus clearing the quanity of items in the cart back to zero.

The below code refers to the carts page where when the delete button is clicked will make a request to the backend via removeItemFromCart making a request to the rails api controller calling the function destroy to destroy the item relationship with the user's cart.

```javascript
<button
  className="cart-item-delete-button"
  onClick={(e) => {
    {
      dispatch(removeItemFromCart(userId, cartItem.id));
    }
  }}
>
  Delete
</button>;

export const removeItemFromCart = (user_id, product_id) => async (dispatch) => {
  const res = await csrfFetch(`/api/carts/${user_id}`, {
    method: "DELETE",
    body: JSON.stringify({ product_id }),
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await res.json();
  dispatch(receiveCart(data));
};
```

```ruby
def destroy
        @user = User.find(params[:id])
        @cart = Cart.find_by(user_id: params[:id], product_id: params[:product_id])

        @cart.destroy
        render :show
end
```

Users are able to filter the products by category by clicking on the buttons in the navbar.

![](frontend/src/assets/images/product-category-demo.gif)

## ToDos

- Cleaning up styling of the different pages to make sure there are no flaws seen.
- Finishing up additional functionality to make sure no dead buttons and/or links remain.

## Future Features

Future features to include the following:

1. View and leave reviews on a product.
2. Searching by search bar inputs.

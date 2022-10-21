json.cart @user.cart_items do |cart_item|
    cart = cart_item.carts.select { |item| item.product_id == cart_item.id}
    json.quantity cart[0].quantity
    json.extract! cart_item, :id, :name, :category, :price
    json.photoURL cart_item.photo.url
end  
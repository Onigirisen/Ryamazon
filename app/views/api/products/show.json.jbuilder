json.extract! @product, :id, :name, :description, :category, :price, :average_rating, :count_of_reviews
json.photoURL @product.photo.url

json.reviews do
    json.array! @product.reviews, :user, :id, :title, :body, :rating, :product_id, :created_at
end
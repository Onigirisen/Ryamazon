@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :name, :description, :category, :price, :average_rating, :count_of_reviews
        json.photoURL product.photo.url
    end
end
@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :name, :description, :category, :price
        json.photoURL product.photo.url

    end
end
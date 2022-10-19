puts "hello"
json.extract! @product, :id, :name, :description, :category, :price
json.photoURL @product.photo.url

@reviews.each do |review|
    json.set! review.id do
        p review
        json.extract! review, :id,:user, :title, :body, :rating, :user_id, :product_id, :created_at, :updated_at
    end
end
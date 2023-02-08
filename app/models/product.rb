# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :text             not null
#  price       :float            not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category    :string           not null
#
class Product < ApplicationRecord
    validates :name, :price, :description, :category, presence: true


    has_one_attached :photo
    has_many :carts
    has_many :reviews

    def count_of_reviews
        reviews.count(:rating)
    end

    def average_rating
        reviews.average(:rating)
    end

    def self.search_by_name(search_input)
        Product.where("name ILIKE :search", search: "%#{search_input}%").to_a
    end
end

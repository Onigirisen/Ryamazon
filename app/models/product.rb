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
end

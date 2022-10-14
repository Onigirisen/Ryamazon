class ChangeProductPrice < ActiveRecord::Migration[7.0]
  def change
    change_column :products, :price, :float, null: false
  end
end

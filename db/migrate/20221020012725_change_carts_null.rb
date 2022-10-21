class ChangeCartsNull < ActiveRecord::Migration[7.0]
  def change
    change_table :carts do |t|
      t.remove  :user_id
      t.remove  :product_id
      t.remove  :quantity
      t.integer :user_id, null:false
      t.integer :product_id, null:false
      t.integer :quantity, null:false
    end
    add_index :carts, :product_id
    add_index :carts, :user_id
  end
end

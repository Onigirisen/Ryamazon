class ChangeProduct < ActiveRecord::Migration[7.0]
  def change
    change_column :products, :category, :string, unique: false
  end
end

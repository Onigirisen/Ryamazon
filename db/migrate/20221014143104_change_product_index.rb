class ChangeProductIndex < ActiveRecord::Migration[7.0]
  def change
    change_table :products do |t|
      t.remove :category
      t.string :category, null: false
  end
  add_index :products, :category
  end
end

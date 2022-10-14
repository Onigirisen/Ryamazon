class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.text :name, null: false
      t.float :price, nul:false
      t.text :description, null: false
      t.string :category, null: false
      t.timestamps
    end
    add_index :products, :category, unique: true
  end
end

class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.references :user, null: false, foreign_key: { to_table: :users }
      t.references :product, null: false, foreign_key: { to_table: :products }
      t.integer :rating, null: false
      t.timestamps
    end
  end
end

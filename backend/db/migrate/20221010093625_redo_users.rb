class RedoUsers < ActiveRecord::Migration[7.0]
  def change
    change_table :users do |t|
      t.remove :email 
      t.remove :name 
      t.remove :phone_number 
      t.remove :password_digest 
      t.remove :session_token
      t.remove :created_at
      t.remove :updated_at

      t.string :email, null: false
      t.string :name, null: false
      t.integer :phone_number, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :name, unique: true
    add_index :users, :phone_number, unique: true
    add_index :users, :session_token, unique: true
  end
end

class AddPresenceConstraintUsers < ActiveRecord::Migration[7.0]
  def change
    change_table :users do |t|
      t.change_null :email, false
      t.change_null :name, false
      t.change_null :phone_number, false
      t.change_null :password_digest, false
      t.change_null :session_token, false
    end
  end
end

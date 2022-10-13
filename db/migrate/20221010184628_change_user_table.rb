class ChangeUserTable < ActiveRecord::Migration[7.0]
  def change
    change_table :users do |t|
      t.remove :phone_number
      
  end
  end
end

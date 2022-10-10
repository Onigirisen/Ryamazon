json.user do
    json.extract! @user, :id, :email, :name, :phone_number, :created_at, :updated_at
end
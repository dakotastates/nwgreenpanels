class UserSerializer < ActiveModel::Serializer
    attributes :id, :email, :username, :first_name, :last_name
  
end
  
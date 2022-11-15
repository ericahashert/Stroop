class UserSerializer 
  include FastJsonapi::ObjectSerializer
  attributes :id, :email, :username, :password, :first_name, :last_name, :country, :zip_code, :created_at
  
  has_many :comments
  has_many :posts
end

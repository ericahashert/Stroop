class UserSerializer
  include FastJsonapi::ObjectSerializer
  has_many :comments
  has_many :posts, through: :comments

  attributes :id, :email, :username, :password, :first_name, :last_name, :country, :zip_code, :created_at
end

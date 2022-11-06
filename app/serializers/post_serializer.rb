class PostSerializer < ActiveModel::Serializer
  attributes :id, :post_content

  has_many :comments
  has_many :users, through: :comments
end

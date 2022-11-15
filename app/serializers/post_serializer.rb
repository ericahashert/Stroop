class PostSerializer < ActiveModel::Serializer
  attributes :id, :post_content, :created_at

  has_many :comments
  has_many :users
end

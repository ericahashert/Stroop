class PostSerializer < ActiveModel::Serializer
  attributes :id, :post_content, :"no-test-framework"
end

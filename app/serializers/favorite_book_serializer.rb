class FavoriteBookSerializer < ActiveModel::Serializer
  attributes :id, :user
  has_one :book
end

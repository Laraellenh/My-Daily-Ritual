class BookSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_one :author
  has_one :user
end

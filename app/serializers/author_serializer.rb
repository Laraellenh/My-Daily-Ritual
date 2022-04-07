class AuthorSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :number_of_work
end

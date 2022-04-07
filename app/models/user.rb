class User < ApplicationRecord
    has_many :books
    has_many :favorite_books, through: :books
    has_many :authors, through: :books
end

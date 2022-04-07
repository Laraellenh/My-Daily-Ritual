class Book < ApplicationRecord
    has_many :books
    has_many :favortie_books, through: :books
    has_many :authors, through: :books
end

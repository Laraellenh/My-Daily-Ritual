class CreateFavoriteBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :favorite_books do |t|
      t.belongs_to :user
      t.belongs_to :book, null: false, foreign_key: true

      t.timestamps
    end
  end
end

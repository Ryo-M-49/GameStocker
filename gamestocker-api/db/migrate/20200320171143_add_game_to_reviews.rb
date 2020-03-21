class AddGameToReviews < ActiveRecord::Migration[6.0]
  def change
    add_column :reviews, :gameId, :integer
    add_column :reviews, :title, :string
    add_column :reviews, :caption, :text
    add_column :reviews, :image, :string
    add_column :reviews, :url, :string
  end
end

class ChangeDataGameIdToReviews < ActiveRecord::Migration[6.0]
  def change
    change_column :reviews, :gameId, :integer, limit: 8
  end
end

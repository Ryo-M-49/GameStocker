class CreateLikes < ActiveRecord::Migration[6.0]
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.integer :review_id

      t.timestamps

      t.index :user_id
      t.index :review_id
      t.index [:user_id, :review_id], unique: true
    end
  end
end

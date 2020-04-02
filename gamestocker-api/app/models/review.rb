class Review < ApplicationRecord
  belongs_to :user
  has_many :likes, dependent: :destroy

  default_scope -> { order(created_at: :desc) }
  validates :user_id, presence: true

  def like(user)
    likes.create(user_id: user.id)
  end

  def unlike(user)
    likes.find_by(user_id: user.id).destroy
  end

end

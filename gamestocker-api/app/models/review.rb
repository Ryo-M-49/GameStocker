class Review < ApplicationRecord
  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many :like_users, through: :likes, source: :user

  default_scope -> { order(created_at: :desc) }
  validates :user_id, presence: true

  def like?(user)
    like_users.include?(user)
  end

end

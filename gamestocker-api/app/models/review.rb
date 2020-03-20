class Review < ApplicationRecord
  belongs_to :user
  default_scope -> { order(created_at: :desc) }
  validates :user_id, presence: true
  validates :content, presence: true
  validates :rate, presence: true
  validates :good, presence: true
  validates :bad, presence: true
end

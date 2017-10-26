class Post < ApplicationRecord
  validates :title, :body, :image, presence: true
  validates :title, length: {maximum: 150}
  validates :body, length: {maximum: 500}
end

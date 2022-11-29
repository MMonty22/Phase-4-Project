class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review_text, :rating
  belongs_to :user
  belongs_to :comedian
  validates :review_text, presence: true
  validates :review_text, length: {maximum: 500}
end

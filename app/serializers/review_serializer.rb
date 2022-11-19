class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review_text, :rating
  belongs_to :user
  belongs_to :comedian
end

class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comedian_id, :user_id, :review_text, :rating
  belongs_to :user
  belongs_to :comedian
end

class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :comedian_id, :review_text, :rating
end

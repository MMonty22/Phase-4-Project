class ComedianSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :average_rating, :review_count
end

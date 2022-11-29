class ComedianSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :average_rating
  has_many :reviews
  has_many :users, through: :reviews
  validates :name, presence: true
  validates :bio, length: {maximum: 500}
end

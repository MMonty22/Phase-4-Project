class ComedianSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio
  has_many :reviews
  has_many :users, through: :reviews
end

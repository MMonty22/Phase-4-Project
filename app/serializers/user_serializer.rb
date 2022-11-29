class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :reviews
  has_many :comedians, through: :reviews
  validates :username, uniqueness: true
end

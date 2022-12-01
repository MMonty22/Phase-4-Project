class Comedian < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews
    validates :name, presence: true
    validates :bio, length: {maximum: 500}
end

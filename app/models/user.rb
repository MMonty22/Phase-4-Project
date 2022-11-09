class User < ApplicationRecord
    has_many :reviews
    has_many :comedians, through: :reviews
end

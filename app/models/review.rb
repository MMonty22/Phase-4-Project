class Review < ApplicationRecord
    belongs_to :user
    belongs_to :comedian
    validates :review_text, presence: true
    validates :rating, presence: true
    validates :review_text, length: {maximum: 500}
end

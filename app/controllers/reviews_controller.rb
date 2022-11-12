class ReviewsController < ApplicationController

    def index
        render json: Review.all, status: :created
    end
    
end

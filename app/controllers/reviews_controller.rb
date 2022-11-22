class ReviewsController < ApplicationController

    def index
        reviews = Review.all
        render json: reviews
    end

    def create
        byebug
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = Review.find_by(id: params[:id])
        if review
            review.update(review_params)
            render json: review
        else
            render json: {error: "Review not found"}, status: :not_found
        end
    end

    private

    def review_params
        params.require(:review).permit(:review_text, :rating)
    end

end

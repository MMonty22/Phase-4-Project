class ReviewsController < ApplicationController
    skip_before_action :authorize, only: :index
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        reviews = Review.all
        render json: reviews
    end

    def create
        review = @current_user.reviews.create(review_params)
        if review.valid?
            render json: review, status: :created
        else
            render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        review = Review.find_by(id: params[:id])
        review.update!(review_params)
        render json: review
    end

    def destroy
        review = Review.find_by(id: params[:id])
        if review
            review.destroy
            head :no_content
        else
            render json: {error: "Review not found"}, status: :not_found
        end 
    end

    private

    def review_params
        params.permit(:comedian_id, :review_text, :rating)
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
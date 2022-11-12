class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def index
        render json: User.all, status: :created
    end

    private

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end

end

class ComediansController < ApplicationController

    skip_before_action :authorize, only: :index

    def index
        comedians = Comedian.all
        render json: comedians
    end

    def create
        comedian = Comedian.create(comedian_params)
        if comedian.valid?
            render json: comedian, status: :created
        else
            render json: {errors: comedian.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    
    def comedian_params
        params.permit(:name, :bio)
    end

end

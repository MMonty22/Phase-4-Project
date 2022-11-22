class ComediansController < ApplicationController

    def index
        comedians = Comedian.all
        render json: comedians
    end

    def create
        comedian = Comedian.create(comedian_params)
        render json: comedian, status: :created
    end

    private
    
    def comedian_params
        params.permit(:name, :bio)
    end

end

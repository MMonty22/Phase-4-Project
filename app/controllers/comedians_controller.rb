class ComediansController < ApplicationController

    def index
        comedians = Comedian.all
        render json: comedians, include: :reviews, status: :created
    end

    def show
        
    end

end

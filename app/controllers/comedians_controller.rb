class ComediansController < ApplicationController

    def index
        render json: Comedian.all, status: :created
    end

end

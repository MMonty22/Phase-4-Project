class ComediansController < ApplicationController

    def index
        comedians = Comedian.all
        render json: comedians
    end

end

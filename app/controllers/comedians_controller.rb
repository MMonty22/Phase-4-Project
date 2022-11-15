class ComediansController < ApplicationController

    def index
        comedians = Comedian.all
        render json: comedians.to_json(include: :reviews), status: :created
    end

end

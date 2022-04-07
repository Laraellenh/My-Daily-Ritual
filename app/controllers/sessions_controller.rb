class SessionsController < ApplicationController

    def login
        user = User.find_by(name:params[:username])
        if user&.authenticate(params[:password])
            render json: user, status: :ok
        else
            render json: {error: "Invalid username or password"}, status: :unprocessable_entity
        end
    end
    private
   
end

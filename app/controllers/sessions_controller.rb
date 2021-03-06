class SessionsController < ApplicationController
    skip_before_action :authorized_user, only: [:login]

    def login
        user = User.find_by(username:params[:username])
        if user&.authenticate(params[:password])
            session[:current_user] = user.id
            render json: user, status: :ok 
        else 
            render json: {error: "Invalid Password or Username"}, status: :unprocessable_entity
        end 
    end 

    def destroy
        session.delete :current_user
        
    end 
    # def signup render json: User.create!(user_params), status: created
    # end
    private
   
end

class UsersController < ApplicationController
# note this controller is for the API PIXELA
    skip_before_action :authorized_user, only: [:create]


    def index
        render json: User.all
    end
    def create
        render json: User.create!(user_params), status: created
    end
    def show
        user=User.find_by(session[:current_user])
        if user 
            render json: user, status: :ok
        else
            render json: "No current user", status: :unauthorized
        end
    end
  

    def destroy
        User.find(params[:username]).delete
        head :no_content
    end
    def update
        render json:   User.find(params[user_params]).update
    end
   
    private

    def user_params
        params.permit(:name, :email, :password)
    end 
end

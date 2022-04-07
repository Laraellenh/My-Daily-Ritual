class UsersController < ApplicationController
# note this controller is for the API PIXELA


    # def index
    #     render json: User.all
    # end
    def create
        render json: User.create(:username), status: created
    end
    def show
        user=User.find_by(session[:current_user])
        if user 
            render json: user, status: :ok
        else
            render json: "No current user", status: :unauthorized
        end
    end

    # def destroy
    #     User.find(params[:username]).delete
    #     head :no_content
    # end
    # def update
    #     render json:   User.find(params[:username]).update
    # end
    # private
    # def strong_par
    #     params.require(:token, :username, :agreeTermsOfService, :notMinor )
    # end
end

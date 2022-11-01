class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
        render json: (user), status: :created
    end 

    def show 
        user = User.find(params[:id])
        render json: current_user, status: :ok
    end 
    private

    def user_params
        params.permit(:username, :password, :email, :first_name, :last_name, :country, :postal_code)
    end
end

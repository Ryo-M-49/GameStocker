class UsersController < ApplicationController
    def index
        @user = User.all
        render json: @user
    end

    def create
        @user = User.create(params[:user])
        render json: @user 
    end

    private

        def user_params
            params.require(:user).permit(:fist_name, :last_name, :email, :password, :password_confirmation)
        end
    
end

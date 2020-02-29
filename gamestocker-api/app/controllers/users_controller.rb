class UsersController < ApplicationController
    def index
        @user = User.all
        render json: @user
    end
    
    def show
        @user = User.find(params[:id])
    end

    def new
        @user = User.new
    end

    def create
        @user = User.create(params[:user])
        render json: @user 
    end

    private

        def user_params
            params.require(:user).permit(:name, :email, :password, :password_confirmation)
        end
    
end

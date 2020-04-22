class UsersController < ApplicationController
  def index
    @user = User.all
    render json: @user
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    # @user.file = params["uploaded_image"]
    @user.update(user_params)
    render json: @user
  end

  def destroy
    User.find(params[:id]).destroy
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :image, :introduction)
  end
end

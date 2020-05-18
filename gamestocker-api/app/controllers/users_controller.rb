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
    @user.update(user_params)
    render json: @user
  end

  def show_user_image
    @user = User.find(params[:id])
    render :json => @user.image_url
  end

  def update_user_image
    @user = User.find(params[:id])
    @user.update(image: params[:image])
    image_url = @user.get_image_url()
    @user.update(image_url: image_url)
    render :json => image_url
  end

  def destroy
    User.find(params[:id]).destroy
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :introduction)
  end

end


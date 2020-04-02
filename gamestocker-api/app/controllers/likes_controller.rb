class LikesController < ApplicationController
  before_action :set_user
  before_action :set_user_review, only: [:create]

  def create
    @review.like(@user)
    render json: @review
  end

  def destroy
    @review = Like.find(params[:id]).review
    @review.unlike(@user)
    render json: @review
  end

  private
  def set_user
    @user = User.find(params[:user_id])
  end

  def set_user_review
    @review = @user.reviews.find_by(gameId: params[:review_id])
  end
end

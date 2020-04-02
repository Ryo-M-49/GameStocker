class LikesController < ApplicationController
  before_action :set_user

  def create
    @review = Review.find(params[:review_id])
    @review.like(user)
    render json: @review
  end

  def destroy
    @review = Like.find(params[:id]).review
    @review.unlike(user)
  end

  private
  def set_user
    user = User.find(params[:user_id])
  end

end

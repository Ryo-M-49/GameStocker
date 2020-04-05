class LikesController < ApplicationController
  before_action :set_user
  before_action :set_user_review

  def index
    likes = Like.order(created_at: :desc)
    render json: likes
  end

  def show
    like = Like.find_by(user_id: @user.id, review_id: params[:id])
    if like.nil? then
      render json: { 'isLiked': false, 'like': nil }
    else 
      render json: { 'isLiked': true, 'like': like }
    end

  end

  def create
    @review.likes.create(user_id: @user.id)
    data = {
      'review': @review,
      'user': @user
    }
    render json: data
  end

  def destroy
    @like = Like.find_by(user_id: @user.id, review_id: params[:id])
    @like.destroy
    render json: { 'isLiked': false, 'like': nil }
  end

  private
  def set_user
    @user = User.find(params[:user_id])
  end

  def set_user_review
    @review = @user.reviews.find_by(gameId: params[:review_id])
  end
end

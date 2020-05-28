class LikesController < ApplicationController
  before_action :set_user
  before_action :set_user_review

  def index
    likes = Like.order(created_at: :desc)
    render json: likes
  end

  def show
    like = Like.find_by(user_id: @user.id, review_id: params[:review_id])
    render json: like
  end

  def create
    @review.likes.create(user_id: @user.id)
    like = Like.find_by(user_id: @user.id, review_id: params[:review_id])
    render json: like
  end

  def destroy
    @like = Like.find(params[:id])
    if @like.destroy
      render json: {'status': 'success'}
    else 
      render json: {'status': 'fail'}
    end
  end

  private
  def set_user
    @user = User.find(params[:user_id])
  end

  def set_user_review
    @review = Review.find_by(id: params[:review_id])
  end
end

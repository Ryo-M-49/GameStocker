class ReviewsController < ApplicationController
  before_action :set_user
  before_action :set_user_review, only: [:update, :destroy]

  def index
    @review = Review.all
    render json: @review
  end

  def show
    @review = @user.reviews.find_by(gameId: params[:id])
    render json: @review
  end

  def show_by_user
    @review = @user.reviews.all
    render json: @review
  end

  def create
    @user.reviews.create!(review_params)
    render json: @user
  end

  def update
    @review.update(review_params)
    render json: @review
  end

  def destroy
    @review.destroy
  end

  private

  def review_params
    params.permit(:good, :bad, :rate, :gameId, :title, :caption, :image, :url, :user_id, :likes_count, :id)
  end

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_user_review
    @review = @user.reviews.find(params[:id])
  end
end

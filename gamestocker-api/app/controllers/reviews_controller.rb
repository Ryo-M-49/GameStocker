class ReviewsController < ApplicationController
  before_action :set_user
  before_action :set_user_review, only: [:show, :update, :destroy]

  def index
    @review = @user.reviews.all
    render json: @review
  end

  def show
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
    params.permit(:good, :bad, :rate, :gameId, :title, :caption, :image, :url, :user_id)
  end

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_user_review
    @review = @user.reviews.find_by(gameId: params[:id])
  end
end

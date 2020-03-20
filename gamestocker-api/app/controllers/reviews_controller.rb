class ReviewsController < ApplicationController
  before_action :set_user
  before_action :set_user_review, only: %i[show update destroy]

  def index
    @review = Review.all
    render json: @review
  end

  def show
    render json: @review
  end

  def create
    @user.reviews.create(review_params)
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
    params.permit(:good, :bad, :rate, :gameId, :title, :caption, :image, :url)
  end

  def set_user
    @user = User.find(params[:id])
  end

  def set_user_review
    @review = @user.reviews.find_by(params[:id]) if @review
  end
end

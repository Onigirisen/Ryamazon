class Api::ReviewsController < ApplicationController
    wrap_parameters include: Review.attribute_names + ["userId", "productId"]
    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        if @review.save!
            render :show
        else
            render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
        end

    end

    def index
        if params[:product_id] == nil
            render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
        else
            @reviews = Review.select(:id, :title,:rating, :body, :user_id, :product_id, :created_at, :updated_at).where(product_id: params[:product_id])
            p @reviews
            render :index
        end
    end

    def show
        @review = Review.find_by(id: params[:id])
        if @review
            render :show
        else
            render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review
            @review.update(review_params)
        end
    end

    def destroy
        @review = Review.find(params[:id])
        @review.delete
        render  :show
    end

    private
    def review_params
        params.require(:review).permit(:title, :body, :user_id, :product_id, :rating)
    end
end
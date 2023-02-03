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

    def update
        @review = Review.find(params[:id])
        if @review
            @review.update(review_params)
        end
    end

    def destroy
        @review = Review.find(params[:id])
        @review.delete
        @product = @review.product
        render 'api/products/show'
    end

    private
    def review_params
        params.require(:review).permit(:title, :body, :user_id, :product_id, :rating)
    end
end
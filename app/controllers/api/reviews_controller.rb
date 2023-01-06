class Api::ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)
        @review.save
        @product = @review.product
        render 'api/products/show'
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
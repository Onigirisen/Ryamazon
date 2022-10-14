class Api::ProductsController < ApplicationController
    def index
        @products = Product.all
    end


    def show
        @Product = Products.find(params[:id])
        render :show
    end
end

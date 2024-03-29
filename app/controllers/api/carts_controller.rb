class Api::CartsController < ApplicationController
    
    def create
        @cart = Cart.find_by(user_id: cart_params[:user_id], product_id: cart_params[:product_id])
        if @cart
            @cart = Cart.update(@cart.id, quantity: cart_params[:quantity].to_i + @cart.quantity)
        else
            @cart = Cart.new(user_id: cart_params[:user_id], product_id: cart_params[:product_id], quantity: cart_params[:quantity])
            @cart.save
        end
        @user = User.find(cart_params[:user_id])
        render :show
    end

    def show
        @user = User.find(params[:id])
        @cart = Cart.find_by(user_id: @user[:id])
        render :show
    end

    def update
        @cart = Cart.find_by(id: params[:id], user_id: cart_params[:user_id])
        @user = User.find(cart_params[:user_id])
        if @cart.update(quantity: cart_params[:quantity].to_i)
            render :show
        else
            render json: { errors: @cart.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @user = User.find(params[:id])
        @cart = Cart.find_by(user_id: params[:id], product_id: params[:product_id])

        @cart.destroy
        render :show
    end
   
    def destroy_cart_items
        @user = User.find(params[:user_id])
        @cart = Cart.where(user_id: params[:user_id]).destroy_all
        render :show
    end


    private

  def cart_params
        params.require(:cart).permit(:user_id, :product_id, :quantity)
    end
end
class OrdersController < ApplicationController
  def index
    @orders  = Order.all
  end

  def create
     @order = Order.new(order_params)
    # respond_to do |format|
      if @order.save
        redirect_to orders_path
        # format.js
      end
    # end
  end

  def destroy

  end

  priv
  def order_params
    params.require(:order).permit(:number, :name)
  end
end

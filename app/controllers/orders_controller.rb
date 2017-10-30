class OrdersController < ApplicationController
  http_basic_authenticate_with name: 'admin', password: 'admin', only: :destroy

  def create
    @order = Order.new(order_params)
    respond_to do |format|
      if @order.save
        format.js
      else
        format.js
      end
    end
  end

  def destroy
    @order = Order.find(params[:id])
    @order.destroy

    redirect_to admin_index_path
  end

  private
  def order_params
    params.require(:order).permit(:number, :name)
  end
end

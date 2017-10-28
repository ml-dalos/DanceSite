class OrdersController < ApplicationController
  # http_basic_authenticate_with name: Rails.application.secrets[:login], password: Rails.application.secrets[:password]

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

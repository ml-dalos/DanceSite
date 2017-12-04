class AdminController < ApplicationController
  http_basic_authenticate_with name: 'admin', password: 'admin'

  def index
    @orders = Order.all.reverse_order
  end
end

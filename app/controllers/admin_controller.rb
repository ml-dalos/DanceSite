class AdminController < ApplicationController
  # http_basic_authenticate_with name: Rails.application.secrets.login, password: Rails.application.secrets.password
  def index
    @orders = Order.all
  end
end

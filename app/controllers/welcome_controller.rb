class WelcomeController < ApplicationController
  def index
    @order = Order.new
    @posts = Post.first(3)
  end

  def download
     send_file("#{Rails.root}/public/files/#{params[:file_name]}")
  end

end

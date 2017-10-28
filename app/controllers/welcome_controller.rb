class WelcomeController < ApplicationController
  def index
    @order = Order.new
  end

  def download
     send_file("#{Rails.root}/public/files/#{params[:file_name]}", type: 'doc/docx')
  end

end

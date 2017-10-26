class PostsController < ApplicationController
  http_basic_authenticate_with name: "admin", password: "admin"
  def index
    @posts = Post.all
  end
end

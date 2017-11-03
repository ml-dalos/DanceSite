class PostsController < ApplicationController
  http_basic_authenticate_with name: 'admin', password: 'admin'

  def index
    @posts = Post.first(3)
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      redirect_to posts_path
    else
      render 'edit'
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :image, :body)
  end
end

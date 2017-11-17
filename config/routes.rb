Rails.application.routes.draw do
  resources :admin, only: [:index]
  resources :orders, only: [:create, :destroy]
  scope '/admin' do
    resources :posts, only: [:update, :index]
  end
  root 'welcome#index'
  get 'welcome/index'
  post 'welcome/download'
end

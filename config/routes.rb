Rails.application.routes.draw do
  resources :payments, only: [:new, :create]
  devise_for :users
  get 'video/index'
  root "home#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

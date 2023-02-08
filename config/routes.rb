Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:show, :create, :destroy]
    resources :products, only: [:index, :show] do 
      resources :reviews, only: [:index, :create, :show, :update, :destroy]
    end
    resources :carts, only: [:show, :create, :update, :destroy] 
    delete :destroy_cart_items, controller: "carts"
    get "/search/products/:term", to: "search#search_results"
  end
  get '*path', to: "static_pages#frontend_index"

end

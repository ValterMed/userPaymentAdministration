Rails.application.routes.draw do
  devise_for :users
  devise_for :models
  root 'users#index'
  resources :users do
    collection do
      get 'search'
      get 'payment_method'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

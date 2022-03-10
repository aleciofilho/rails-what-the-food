Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  resources :categories, only: %i[index] do
    resources :ingredients, only: %i[index]
  end

  resources :recipes, only: %i[index show]
end

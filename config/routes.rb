Rails.application.routes.draw do
  devise_for :users
  resources :users, only: %i[show]

  root to: 'pages#home'

  resources :categories, only: %i[index] do
    resources :ingredients, only: %i[index]
  end

  resources :recipes, only: %i[index]
  resources :favorites, only: %i[create destroy]
end

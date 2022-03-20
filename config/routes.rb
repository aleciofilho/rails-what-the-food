Rails.application.routes.draw do
  devise_for :users
  resources :users, only: %i[show]

  root to: 'pages#home'

  resources :pages, only: :index

  resources :categories, only: %i[index] do
    resources :ingredients, only: %i[index]
  end

  delete "favorites/delete/:spoon_id", to: "favorites#destroy_favorite", as: :destroy_favorite

  resources :recipes, only: %i[index]
  resources :fridges, only: %i[show create destroy]
  resources :favorites, only: %i[create destroy]
end

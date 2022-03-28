Rails.application.routes.draw do
  devise_for :users
  resources :users, only: %i[show] do
    resources :fridges, only: %i[show]
  end

  root to: 'pages#home'

  resources :pages, only: :index

  resources :categories, only: %i[index] do
    resources :ingredients, only: %i[index]
  end

  delete "favorites/delete/:spoon_id", to: "favorites#destroy_favorite", as: :destroy_favorite
  post "favorites/toggle/:spoon_id", to: "favorites#toggle_favorite", as: :toggle_favorite

  resources :recipes, only: %i[index]
  resources :fridges, only: %i[create destroy]
  get 'users/:id/fridge', to: 'users#show_fridge', as: :show_fridge
  resources :favorites, only: %i[create destroy]
end

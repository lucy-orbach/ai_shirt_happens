Rails.application.routes.draw do
  get 'sessions/new'

  root  "home#index"
  get 'random_shirt', to: 'random_shirt#random'
  resources :shirts do
    resources :notes, only: :create
  end

  get '/sign-up', to: 'registrations#new'
  post '/sign-up', to: 'registrations#create'

  get '/sign-in', to: 'sessions#new'
  post '/sign-in', to: 'sessions#create'
  delete '/sign-out', to: 'sessions#destroy', as: 'sign_out'

  resources :ownerships, only: [:create, :destroy]
end

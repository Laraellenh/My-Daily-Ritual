Rails.application.routes.draw do
  
  resources :favorite_books
  resources :authors
  resources :favortie_books
  resources :books
  resource :users
  post "/login", to: "sessions#login"
  get '/authorized_user', to: "users#show"
  delete '/logout', to: 'sessions#destroy'
  post "/signup", to: "users#create"
  # resources :users
  # make a new user on pixela api, update, delete
  # post "/v1/users", to: "users#create"
  # put "/v1/users/:username", to: "users#update"
  # delete "/v1/users/:username", to: "users#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
 

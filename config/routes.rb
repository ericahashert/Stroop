Rails.application.routes.draw do
  resources :comments
  resources :posts
  get '/current_user', to: 'current_user#index'
  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  get '/drugdata', to: 'drug_data#index'
  get '/community', to: 'posts#index'
  post '/community', to: 'posts#create'
  patch '/post/:id', to: 'posts#update'
  delete '/community/:id', to: 'posts#destroy'
end

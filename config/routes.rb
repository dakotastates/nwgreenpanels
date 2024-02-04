Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do 
    namespace :v1 do
      resources :users
      resources :projects
      resources :components
      resources :parts
      resources :component_parts
      
      post '/login', to: 'sessions#login'
    end
  end
end

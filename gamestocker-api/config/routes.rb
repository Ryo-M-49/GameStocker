# frozen_string_literal: true

Rails.application.routes.draw do
  get 'likes/create'
  get 'likes/destroy'
  namespace :api do
    mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/auth/registrations'
    }
  end
  resources :users do 
    resources :reviews do 
      collection do
        get :show_by_user
        get :show_by_recent
        get :show_by_like
      end
      resources :likes
    end
  end
end

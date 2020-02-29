# frozen_string_literal: true

Rails.application.routes.draw do
  post '/signup',  to: 'users#create'
  
  resources :users
end

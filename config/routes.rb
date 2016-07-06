Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :users
  resource :session
  resources :events
  resources :comments
  resources :event_tickets
  resources :group_memberships
  resources :groups
  resource :search

end

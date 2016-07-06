Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :users
  resource :session
  resources :events do
    resources :comments
  end
  resources :event_tickets
  resources :group_memberships
  resources :groups
  resource :search

end

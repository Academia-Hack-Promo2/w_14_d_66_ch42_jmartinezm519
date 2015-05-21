Rails.application.routes.draw do
  get "/categories" => "categories#index"
  post "/categories" => "categories#create"
  patch "/categories/:id" => "categories#update"
  delete "/categories/:id" => "categories#destroy"
  get "categories/:id/tasks" => "categories#tasks_categories"
  get "categories/tasks" => "categories#all_tasks_categories"
  get "/tasks" => "tasks#index"
  post "/tasks" => "tasks#create"
  patch "/tasks/:id" => "tasks#update"
  patch "tasks/:id/status" => "tasks#status_update"
  delete "/tasks/:id" => "tasks#destroy"
end

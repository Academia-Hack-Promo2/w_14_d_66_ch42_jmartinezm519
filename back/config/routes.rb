Rails.application.routes.draw do
  get "/categories" => "categories#index"
  post "/categories" => "categories#create"
  put "/categories/:id" => "categories#update"
  delete "/categories/:id" => "categories#destroy"
  get "categories/:id/tasks" => "categories#tasks_categories"
  get "categories_all_tasks" => "categories#all_tasks_categories"
  get "/tasks" => "tasks#index"
  post "/tasks" => "tasks#create"
  put "/tasks/:id" => "tasks#update"
  put "tasks/status/:id" => "tasks#status_update"
  delete "/tasks/:id" => "tasks#destroy"
end

Rails.application.routes.draw do
  
  get "/categories" => "categories#all"
  get "/categories/:id" => "categories#all"
  post "/categories" => "categories#create"
  put "/categories/:id" => "categories#update"
  delete "/categories/:id" => "categories#destroy"

  get "categories/:id/tasks" => "categories#TasksCategories"
  get "categories_all_tasks" => "categories#AllTasksCategories"
  
  get "/tasks" => "tasks#all"
  post "/tasks" => "tasks#create"
  put "/tasks/:id" => "tasks#update"
  delete "/tasks/:id" => "tasks#destroy"
  
end

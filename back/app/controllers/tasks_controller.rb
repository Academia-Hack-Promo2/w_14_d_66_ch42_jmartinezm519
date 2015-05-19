class TasksController < ApplicationController
	def all
    render json: Task.all
  end
  
  def create
  	task = Task.new(permit)
    if task.valid?
      task.save
      render json: task
    else
      render json: task.errors
    end
  end
  
  def update
    if Task.exists?(params[:id].to_i)
      task = Task.update(params[:id],permit)
      render json: task
    else
      render json: task.errors.messages
    end
  end

  def destroy
    
    if Task.exists?((params[:id].to_i))
      task = Task.find((params[:id].to_i))
      task.delete
      render json: task.to_json
    else
      render json: task.errors.messages
    end
  end
  
  def categoriesTasks
    tasks = Task.category(params[:id])
    render json: tasks
  end

  private
  
  def permit
     params.permit(:title, :date, :status, :category_id)
  end
end

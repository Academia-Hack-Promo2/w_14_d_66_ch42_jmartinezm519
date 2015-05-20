class TasksController < ApplicationController
	def index
    tasks = Task.all
    render json:tasks, :except  => [:created_at, :updated_at]
  end

  def create
  	task = Task.new(permit)
    if task.valid?
      task.save
      render json: task, :except  => [:created_at, :updated_at]
    else
      render json: task.errors
    end
  end

  def update
    if Task.exists?(params[:id])
      task = Task.update(params[:id],permit)
      render json: task, :except  => [:created_at, :updated_at]
    else
      render json: "The task doesn't exist"
    end
  end

  def destroy
    if Task.exists?(params[:id])
      task = Task.find(params[:id])
      task.delete
      render json: task,   :except  => [:created_at, :updated_at]
    else
      render json: "The task doesn't exist"
    end
  end

  private

  def permit
     params.permit(:title, :date, :status, :category_id)
  end
end

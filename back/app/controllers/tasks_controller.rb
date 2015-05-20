class TasksController < ApplicationController
	def index
    tasks = Task.all
    render json: tasks, :except => [:created_at, :updated_at]
  end
	
  def create
  	task = Task.new(permit)
    if task.valid?
      task.save
      render json: task, :except => [:title, :status, :date, :category_id, :created_at, :updated_at]
    else
      render json: {"id"=> "null", "error"=> "Mensaje de error"}
    end
  end

  def update
    if Task.exists?(params[:id])
      task = Task.update(params[:id],permit)
      render json: task, :except => [:title, :status, :date, :category_id, :created_at, :updated_at]
    else
      render json:  {"id"=> "null", "error"=> "Mensaje de error"}
    end
  end

  def destroy
    if Task.exists?(params[:id])
      task = Task.find(params[:id])
      task.delete
      render json: {"result":true}
    else
      render json: {"result":false, "error":"La tarea no existe"}
    end
  end

	def status_update
		if Task.exists?(params[:id])
      task = Task.update(params[:id],permit)
      render json: task, :except => [:created_at, :updated_at, :title, :status, :category_id, :date]
    else
      render json: {"id":"null", "error":"La tarea no existe"}
    end
	end

  private

  def permit
     params.permit(:title, :date, :status, :category_id, :id)
  end
end

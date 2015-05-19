class CategoriesController < ApplicationController
	def all
    categories = Category.all
    render json: categories.to_json(

          :except  => [:created_at, :updated_at]
        )
  end
  
  def create
  	category = Category.new(permit)
    if category.valid?
        category.save
        render json: category.to_json(
          :except  => [:created_at, :updated_at]
        )
    else
        render json: category.errors
    end
  end
  
  def update
    if Category.exists?(params[:id])
      category = Category.update(params[:id],permit)
      render json: category.to_json(
          :except  => [:created_at, :updated_at]
        )
    else
      render json: "El elemeneto no existe"
    end
  end

  def destroy
    if Category.exists?(params[:id])
      category = Category.find(params[:id])
      category.delete
      render json: category
    else
      render json: "El elemeneto no existe"
    end
  end

  def TasksCategories
    categorieTask = Category.find(params[:id])
    render json: {category: categorieTask, task: categorieTask.tasks}, :except => [:created_at, :updated_at, :category_id]
  end

  def AllTasksCategories
    taskCategorys = Category.includes(:tasks)
    render json: taskCategorys, :except => [:created_at, :updated_at, :category_id],
    :include => {:tasks => { :only =>[:id, :title, :date, :status]}}
  end
  
  private
  
    def permit
      params.permit(:title)
    end
  
end

class CategoriesController < ApplicationController
	def all
    render json: Category.all
  end
  
  def create
  	category = Category.new(permit)
    if category.valid?
        category.save
        render json: category
    else
        render json: category.errors
    end
  end
  
  def update
    if Category.exists?(permit)
      category = Category.update(params[:id],permit)
      render json: category
    else
      render json: category.errors.messages
    end
  end

  def destroy
    if Category.exists?(permit)
      category = Category.find(permit)
      category.delete
      render json: category.to_json
    else
      render json: category.errors.messages
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
      params.permit(:c_title)
    end
  
end

class CategoriesController < ApplicationController
	def index
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
      render json: "The category doesn't exist"
    end
  end

  def destroy
    if Category.exists?(params[:id])
      category = Category.find(params[:id])
      category.delete
      render json: category
    else
      render json: "The category doesn't exist"
    end
  end

  def tasks_categories
   if Category.exists?(params[:id])
      category_task = Category.find(params[:id])
      render json: category_task, :except => [:created_at, :updated_at, :category_id],
      :include => {:tasks => { :except =>[:created_at, :updated_at, :category_id]}}
    else
      render json: "The category doesn't exist"
    end
  end

  def all_tasks_categories
    task_categories = Category.includes(:tasks)
    render json: task_categories, :except => [:created_at, :updated_at, :category_id],
    :include => {:tasks => { :except =>[:created_at, :updated_at, :category_id]}}
  end

  private

  def permit
    params.permit(:title)
  end

end

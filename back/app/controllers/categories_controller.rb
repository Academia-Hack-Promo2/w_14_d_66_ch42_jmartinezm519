class CategoriesController < ApplicationController
	def index
    @categories = Category.all
  end

  def create
  	category = Category.new(permit)
    if category.valid?
      category.save
      render json: category, :except => [:created_at, :updated_at]
    else
      render json: category.errors
    end
  end

  def update
    if Category.exists?(params[:id])
      category = Category.update(params[:id],permit)
      render json: category, :except => [:created_at, :updated_at]
    else
      render json: {"id":"null", "error":"La categoria no existe"}
    end
  end

  def destroy
    if Category.exists?(params[:id])
      category = Category.find(params[:id])
      category.delete
      render json: category
    else
      render json: {"id":"null", "error":"La categoria no existe"}
    end
  end

  def tasks_categories
    if Category.exists?(params[:id])
      category_task = Category.find(params[:id])
      render json: category_task, :except => [:created_at, :updated_at, :category_id],
      :include => {:tasks => { :except =>[:created_at, :updated_at, :category_id]}}
    else
      render json: {"id":"null", "error":"La categoria no existe"}
    end
  end

  def all_tasks_categories
		@categories = Category.includes(:tasks)
  end

  private

  def permit
    params.permit(:title)
  end

end

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
  
  private
  
    def permit
      params.permit(:title)
    end
  
end

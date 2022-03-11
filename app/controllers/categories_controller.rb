class CategoriesController < ApplicationController
  def index
    @categories = Category.all

    if params[:query].present?
      @ingredients = Ingredient.search_by_name(params[:query])
    end
  end
end

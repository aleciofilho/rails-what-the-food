class CategoriesController < ApplicationController
  def index
    @categories = Category.all
    @ingredients = Ingredient.search_by_name(params[:query]) if params[:query].present?
    @recipes = @spoonacular.recipes(params[:ingredients].sub(/[, ]+/, ',+')) if params[:ingredients]
  end
end

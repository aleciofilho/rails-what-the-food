class RecipesController < ApplicationController
  def index
    @spoonacular = SpoonacularService.new
    @recipes = @spoonacular.recipes(params[:ingredients].sub(/[, ]+/, ',+')) if params[:ingredients]
    # if params[:query].present?
    #   @recipes = Recipe.search_by_name(params[:query])
    # else
    #   # @recipes = Recipe.all
    # end
  end
end

class RecipesController < ApplicationController
  def index
    @spoonacular = SpoonacularService.new
    @recipes = @spoonacular.recipes(params[:ingredients]) if params[:ingredients]
  end

  def show; end
end

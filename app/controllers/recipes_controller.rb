class RecipesController < ApplicationController
  def index
    @spoonacular = SpoonacularService.new
    @recipes = @spoonacular.recipes(params[:ingredients].sub(/[, ]+/, ',+')) if params[:ingredients]
    if params[:query].present?
      @recipes = Recipe.search_by_name(params[:query])
    else
      # @recipes = Recipe.all
    end
  end

  def show
    @spoonacular = SpoonacularService.new
    @recipe = @spoonacular.show(params[:id]) if params[:id]
    @new_recipe = Recipe.where(spoon_id: params[:id])
    if @new_recipe == []
      @new_recipe = Recipe.create(
        name: @recipe['title'],
        description: @recipe['summary'],
        prep_time: @recipe['readyInMinutes'],
        url: @recipe['sourceUrl'],
        likes: @recipe['aggregateLikes'],
        serving: @recipe['servings'],
        spoon_id: @recipe['id'],
        image: @recipe['image']
      )
    end
    @favorite = Favorite.create(user: current_user, recipe: @new_recipe[0])
  end
end

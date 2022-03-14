class FavoritesController < ApplicationController
  def create
    @spoonacular = SpoonacularService.new
    @recipe = @spoonacular.show(params[:recipe][:id]) if params[:recipe][:id]
    @new_recipe = Recipe.where(spoon_id: params[:recipe][:id]).first
    if @new_recipe.nil?
      @new_recipe = Recipe.create(
        name:  @recipe['title'],
        description:  @recipe['summary'],
        prep_time:  @recipe['readyInMinutes'],
        url:  @recipe['sourceUrl'],
        likes:  @recipe['aggregateLikes'],
        serving:  @recipe['servings'],
        spoon_id:  @recipe['id'],
        image:  @recipe['image']
      )
    end
    @favorite = Favorite.create(user: current_user, recipe: @new_recipe)
  end
end

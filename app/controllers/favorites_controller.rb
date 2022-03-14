class FavoritesController < ApplicationController
  def create
    @spoonacular = SpoonacularService.new
    @new_recipe = Recipe.where(spoon_id: params[:recipe][:id]).first

    if @new_recipe.nil?
      @recipe = @spoonacular.show(params[:recipe][:id]) if params[:recipe][:id]
      @new_recipe = Recipe.create(
        name:  @recipe['title'],
        description:  @recipe['summary'][0..280],
        prep_time:  @recipe['readyInMinutes'],
        url:  @recipe['sourceUrl'],
        likes:  @recipe['aggregateLikes'],
        serving:  @recipe['servings'],
        spoon_id:  @recipe['id'],
        image:  @recipe['image']
      )
    end
    @favorite = Favorite.where(user: current_user, recipe: @new_recipe).first
    @favorite = Favorite.create(user: current_user, recipe: @new_recipe) if @favorite.nil?
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy

    redirect_to user_path(current_user)
  end
end

class FavoritesController < ApplicationController
  def create
    @spoonacular = SpoonacularService.new
    @new_recipe = Recipe.find_by(spoon_id: params[:recipe][:id])

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

  def destroy_favorite
    recipe = Recipe.find_by(spoon_id: params[:spoon_id])
    @favorite = Favorite.find_by(user: current_user, recipe: recipe)
    @favorite.destroy
  end

  def toggle_favorite
    recipe = Recipe.find_by(spoon_id: params[:spoon_id])
    @favorite = Favorite.find_by(user: current_user, recipe: recipe)
    if @favorite
      @favorite.destroy
      @text = "destroyed"
    else
      @favorite = Favorite.create(user: current_user, recipe: recipe)
      @text = "created"
    end

    # responto_to do |format|
    #   format.text { render text: @text }
    # end
  end
end

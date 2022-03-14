class FavoritesController < ApplicationController
  def update
    @favorite = Favorite.where(recipe: Recipe.find(recipe['id']), user: current_user)

    if @favorite == []
      @recipe = Recipe.create(name: recipe['title'],
                              description: recipe['title'])
      @favorite = Favorite.create(recipe: Recipe.find(recipe['id']), user: current_user)

    else
      @favorite.destroy_all
    end
  end
end

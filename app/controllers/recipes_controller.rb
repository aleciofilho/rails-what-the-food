class RecipesController < ApplicationController
  def index
    if params[:query].present?
      @recipes = Recipe.search_by_name(params[:query])
    else
      @recipes = Recipe.all
    end
  end

  def show

  end
end

class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[home index]

  def home
    @categories = Category.all
  end

  def index
    @categories = Category.all
    @ingredients = Ingredient.search_by_name(params[:query]) if params[:query].present?
    @recipes = SpoonacularService.new.recipes(params[:ingredients]) if params[:ingredients].present?

    respond_to do |format|
      format.html # Follow regular flow of Rails
      if @ingredients
        format.text { render partial: 'pages/searched_ingredients_buttons', locals: { ingredients: @ingredients }, formats: [:html] }
      else
        format.text { render partial: 'pages/recipes_cards', locals: { recipes: @recipes }, formats: [:html] }
      end
    end
  end
end

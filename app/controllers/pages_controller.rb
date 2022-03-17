class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[home index]

  def home
    @categories = Category.all
  end

  def index
    @categories = Category.all
    @ingredients = Ingredient.search_by_name(params[:query]) if params[:query].present?
    @recipes = SpoonacularService.new.recipes(params[:ingredients]) if params[:ingredients].present?
    if current_user
      user_fridge_string = ""
      current_user.ingredients.each do |ingredient|
        user_fridge_string += "#{ingredient.name},+"
      end
      @user_recipes = SpoonacularService.new.recipes(user_fridge_string[0..-2])
    end

    respond_to do |format|
      format.html # Follow regular flow of Rails
      if @ingredients
        format.text { render partial: 'pages/searched_ingredients_buttons', locals: { ingredients: @ingredients }, formats: [:html] }
      else
        format.text { render partial: 'pages/recipes_cards', locals: { recipes: @recipes }, formats: [:html] }
      end
    end
    @receitas = Recipe.first(10)
  end
end

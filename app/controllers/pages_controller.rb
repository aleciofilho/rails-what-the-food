class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home

  def home
    @categories = Category.all
  end

  def index
    @categories = Category.all
    @ingredients = Ingredient.search_by_name(params[:query]) if params[:query].present?
    @recipes = SpoonacularService.new.recipes(params[:ingredients]) if params[:ingredients]

    respond_to do |format|
      format.html # Follow regular flow of Rails
      format.text { render partial: 'pages/searched_ingredients_buttons', locals: { ingredients: @ingredients }, formats: [:html] }
    end
  end
end

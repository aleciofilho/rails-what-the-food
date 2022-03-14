class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home

  def home
    @categories = Category.all
  end

  def index
    @categories = Category.all
    @ingredients = Ingredient.search_by_name(params[:query]) if params[:query].present?
    @recipes = SpoonacularService.new.recipes(params[:ingredients]) if params[:ingredients]
  end
end

require "json"
require "open-uri"

class SpoonacularService

  def recipes(ingredient)
    url = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=8e744ecd647445a089bee564ac8bcd73&ingredients=#{ingredient}&number=10";
    recipe_serialized = URI.open(url).read
    JSON.parse(recipe_serialized)
  end

  def show(recipe_id)
    url = "https://api.spoonacular.com/recipes/#{recipe_id}/information?apiKey=8e744ecd647445a089bee564ac8bcd73&includeNutrition=false";
    recipe_serialized = URI.open(url).read
    JSON.parse(recipe_serialized)
  end
end

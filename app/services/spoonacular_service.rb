require "json"
require "open-uri"

class SpoonacularService

  def recipes(ingredient)
    url = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=ad1c142c27cb4f82a8078acc4e1522d5&ingredients=#{ingredient}&number=10";
    recipe_serialized = URI.open(url).read
    JSON.parse(recipe_serialized)
  end

  def show(recipe_id)
    url = "https://api.spoonacular.com/recipes/#{recipe_id}/information?apiKey=ad1c142c27cb4f82a8078acc4e1522d5&includeNutrition=false";
    recipe_serialized = URI.open(url).read
    JSON.parse(recipe_serialized)
  end
end

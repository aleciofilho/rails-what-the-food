require "json"
require "open-uri"

class SpoonacularService

  def recipes(ingredient)
    url = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=22b62d5750be4e5ebd66bbcb23d25b52&ingredients=#{ingredient}&number=10&ranking=2";
    recipe_serialized = URI.open(url).read
    JSON.parse(recipe_serialized)
  end

  def show(recipe_id)
    url = "https://api.spoonacular.com/recipes/#{recipe_id}/information?apiKey=22b62d5750be4e5ebd66bbcb23d25b52&includeNutrition=false&ranking=2";
    recipe_serialized = URI.open(url).read
    JSON.parse(recipe_serialized)
  end
end

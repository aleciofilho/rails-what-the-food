require "json"
require "open-uri"

class SpoonacularService

  def recipes(ingredient)
    url = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=#{ENV['SPOON_KEY']}&ingredients=#{ingredient}&number=10&ranking=2&limitLicense=true";
    recipe_serialized = URI.open(url).read
    JSON.parse(recipe_serialized)
  end

  def show(recipe_id)
    url = "https://api.spoonacular.com/recipes/#{recipe_id}/information?apiKey=#{ENV['SPOON_KEY']}&includeNutrition=false";
    recipe_serialized = URI.open(url).read
    JSON.parse(recipe_serialized)
  end
end

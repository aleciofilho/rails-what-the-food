require "json"
require "open-uri"

class SpoonacularService

  def recipes(ingredient)
    url = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=eb83e47907a244ab86a9aeccc94ca035&ingredients=#{ingredient}&number=10";
    recipe_serialized = URI.open(url).read
    JSON.parse(recipe_serialized)
  end
end

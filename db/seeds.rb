require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'ingredients.csv'))
csv = CSV.parse(csv_text, headers: :first_row)

puts 'Creating 1000 ingredients...'

csv.each do |row|
  ingredients = row[0].split(';')[0]
  spoonacular_ids = row[0].split(';')[1]

  Ingredient.create!(name: ingredients, spoonacular: spoonacular_ids)
end

puts 'All done!'

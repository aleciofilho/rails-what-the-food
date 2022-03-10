puts 'Add category name'
category = STDIN.gets.chomp

c = Category.create!(name: category)
3.times do
  puts 'Add ingredient name'
  name = STDIN.gets.chomp

  Ingredient.create!(name: name, category: c)
end

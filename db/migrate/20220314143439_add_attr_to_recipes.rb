class AddAttrToRecipes < ActiveRecord::Migration[6.1]
  def change
    add_column :recipes, :likes, :integer
    add_column :recipes, :serving, :integer
  end
end

class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.text :description
      t.integer :prep_time
      t.string :url

      t.timestamps
    end
  end
end

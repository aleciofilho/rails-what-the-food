class CreatePreparations < ActiveRecord::Migration[6.1]
  def change
    create_table :preparations do |t|
      t.references :ingredient, null: false, foreign_key: true
      t.references :recipe, null: false, foreign_key: true

      t.timestamps
    end
  end
end

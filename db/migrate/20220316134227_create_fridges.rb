class CreateFridges < ActiveRecord::Migration[6.1]
  def change
    create_table :fridges do |t|
      t.references :user, null: false, foreign_key: true
      t.references :ingredient, null: false, foreign_key: true

      t.timestamps
    end
  end
end

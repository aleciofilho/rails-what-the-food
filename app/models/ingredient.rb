class Ingredient < ApplicationRecord
  belongs_to :category
  has_many :recipes, through: :preparations
end

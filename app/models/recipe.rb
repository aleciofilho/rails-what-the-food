class Recipe < ApplicationRecord
  has_many :ingredients, through: :preparations
end

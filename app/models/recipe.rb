class Recipe < ApplicationRecord
  has_many :ingredients, through: :preparations
  has_many :favorites
end

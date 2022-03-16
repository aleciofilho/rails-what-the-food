class Ingredient < ApplicationRecord
  belongs_to :category
  has_many :recipes, through: :preparations
  has_many :fridges
  has_many :users, through: :fridges

  include PgSearch::Model
  pg_search_scope :search_by_name,
    against: [ :name ],
    using: {
      tsearch: { prefix: true }
    }
end

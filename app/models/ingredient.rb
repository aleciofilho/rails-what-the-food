class Ingredient < ApplicationRecord
  belongs_to :category
  has_many :recipes, through: :preparations

  include PgSearch::Model
  pg_search_scope :search_by_name,
    against: [ :name ],
    using: {
      tsearch: { prefix: true }
    }
end

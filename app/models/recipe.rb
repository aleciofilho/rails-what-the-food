class Recipe < ApplicationRecord
  has_many :ingredients, through: :preparations
  has_many :favorites

  include PgSearch::Model
  pg_search_scope :search_by_name,
    against: [ :name ],
    using: {
      tsearch: { prefix: true }
    }
end

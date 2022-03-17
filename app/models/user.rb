class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one_attached :photo

  has_many :recipes, through: :favorites
  has_many :favorites
  has_many :fridges
  has_many :ingredients, through: :fridges

  validates :name, :email, presence: true
end

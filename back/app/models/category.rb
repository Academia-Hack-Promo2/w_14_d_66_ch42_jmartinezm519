class Category < ActiveRecord::Base
  validates :title, length: {minimum: 4, maximun: 15}, uniqueness: true
  has_many :tasks
end

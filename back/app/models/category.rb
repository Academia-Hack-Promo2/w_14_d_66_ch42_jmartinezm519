class Category < ActiveRecord::Base
  validates :title, length: {minimum: 4}, uniqueness: true
end

class Category < ActiveRecord::Base
  validates :title, length: {minimum: 4, maximun: 15}, uniqueness: true
  has_many :tasks
  before_destroy :save_tasks

  def save_tasks
    self.tasks.update_all(category_id: uncategorized)
  end

  def uncategorized
    return category_id = 1
  end
end

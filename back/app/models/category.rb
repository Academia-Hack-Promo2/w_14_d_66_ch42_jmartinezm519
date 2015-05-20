class Category < ActiveRecord::Base
  validates :title, length: {minimum: 4, maximun: 15}, uniqueness: true
  has_many :tasks
  before_destroy :save_tasks

  def save_tasks
  	 tasks = Task.where('category_id = ?', self.id)

  	tasks.each do |task|
  	 	task.category_id = 10
  	 	task.save
  	end
  end

end
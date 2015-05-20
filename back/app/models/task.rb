class Task < ActiveRecord::Base
  enum status: {"Undone" => 0, "Done" => 1}
  validates :title, :date, presence: true
  validates :title, length: {minimum: 5, maximum: 50}
  validates :status, inclusion: {in: :status}
  belongs_to :category
end

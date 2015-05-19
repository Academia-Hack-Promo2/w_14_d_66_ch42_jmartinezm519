class Task < ActiveRecord::Base
  enum status: {"pendiente" => 0, "realizado" => 1}
  validates :title, :date, presence: true
  validates :title, length: {minimum: 5, maximum: 50}
  validates :status inclusion: {in: %w(pendiente realizado 0 1), message: "#{value} valor no admitido"}
  belongs_to :category
end

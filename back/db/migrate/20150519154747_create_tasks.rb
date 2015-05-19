class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.integer :status, limit: 1, default: 0
      t.date :date, null: false
      t.references :category, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end

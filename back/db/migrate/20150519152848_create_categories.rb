class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :title, null: false, limit: 15

      t.timestamps null: false
    end
  end
end

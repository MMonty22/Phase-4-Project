class CreateComedians < ActiveRecord::Migration[6.1]
  def change
    create_table :comedians do |t|
      t.string :name
      t.text :bio
      t.float :average_rating
      t.integer :review_count

      t.timestamps
    end
  end
end

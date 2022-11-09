class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :comedian_id
      t.text :review_text
      t.float :rating

      t.timestamps
    end
  end
end

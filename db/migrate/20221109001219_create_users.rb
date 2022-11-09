class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password
      t.integer :user_review_count

      t.timestamps
    end
  end
end

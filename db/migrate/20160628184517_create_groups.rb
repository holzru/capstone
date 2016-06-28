class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.integer :creator_id, null: false
      t.string :name, null: false
      t.text :description, null: false
      t.timestamps null: false
    end
  end
end

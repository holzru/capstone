class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.timestamps null: false
      t.integer :group_id, null: false
      t.integer :creator_id, null: false
      t.text :description, null: false
      t.string :location, null: false
      t.string :type, null: false
      t.datetime :date, null: false
    end
    add_index :events, :location
    add_index :events, :group_id
  end
end

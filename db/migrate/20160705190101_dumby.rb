class Dumby < ActiveRecord::Migration
  def change
    remove_column :events, :date
    add_column :events, :date, :string, null: false
  end
end

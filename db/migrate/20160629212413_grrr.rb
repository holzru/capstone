class Grrr < ActiveRecord::Migration
  def change
    remove_column :events, :type
    add_column :events, :category, :string, null: false 
  end
end

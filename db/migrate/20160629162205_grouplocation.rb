class Grouplocation < ActiveRecord::Migration
  def change
    add_column :groups, :location, :string, null: false
  end
end

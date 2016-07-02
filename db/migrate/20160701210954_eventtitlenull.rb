class Eventtitlenull < ActiveRecord::Migration
  def change
    remove_column :events, :title
    add_column :events, :title, :string, null: false
  end
end

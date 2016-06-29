class Users < ActiveRecord::Migration
  def change
    remove_column :users, :description
    add_column :users, :description, :text
  end
end

class GroupPic < ActiveRecord::Migration
  def change
    add_column :users, :pic_url, :string
    add_column :groups, :pic_url, :string
    add_column :events, :pic_url, :string
  end
end

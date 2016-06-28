class CreateGroupMemberships < ActiveRecord::Migration
  def change
    create_table :group_memberships do |t|
      t.integer :group_id, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end
    add_index :group_memberships, :user_id
    add_index :group_memberships, :group_id
  end
end

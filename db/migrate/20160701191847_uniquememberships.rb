class Uniquememberships < ActiveRecord::Migration
  def change
    add_index :group_memberships, [:group_id, :user_id], unique: true
    add_index :event_tickets, [:event_id, :user_id], unique: true
  end
end

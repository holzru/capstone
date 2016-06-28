class CreateEventTickets < ActiveRecord::Migration
  def change
    create_table :event_tickets do |t|
      t.integer :event_id, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end
    add_index :event_tickets, :user_id
    add_index :event_tickets, :event_id
  end
end

# == Schema Information
#
# Table name: event_tickets
#
#  id         :integer          not null, primary key
#  event_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class EventTicket < ActiveRecord::Base
  validates :event_id, :user_id, presence: true
  validates :event_id, uniqueness: { scope: :user_id }
  belongs_to :event
  belongs_to :user
end

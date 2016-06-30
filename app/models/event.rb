# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  group_id    :integer          not null
#  creator_id  :integer          not null
#  description :text             not null
#  location    :string           not null
#  date        :datetime         not null
#  pic_url     :string
#  category    :string           not null
#

class Event < ActiveRecord::Base
  validates :group_id, :creator_id, :description, :location, :category, :date, presence: true

  belongs_to :group

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  has_many :event_tickets,
    foreign_key: :event_id,
    class_name: :EventTicket

  has_many :attendees,
    through: :event_tickets,
    source: :user


end

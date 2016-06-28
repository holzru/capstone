# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  description     :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  has_many :created_groups,
    foreign_key: :creator_id,
    class_name: :Group

  has_many :group_memberships,
    foreign_key: :user_id,
    class_name: :GroupMembership

  has_many :groups,
    through: :group_memberships,
    source: :group

  has_many :event_tickets,
    foreign_key: :user_id,
    class_name: :EventTicket

  has_many :created_events,
    foreign_key: :creator_id,
    class_name: :Event

end

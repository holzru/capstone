# == Schema Information
#
# Table name: groups
#
#  id          :integer          not null, primary key
#  creator_id  :integer          not null
#  name        :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  location    :string           not null
#  pic_url     :string
#

class Group < ActiveRecord::Base
  validates :name, :description, :location, :creator_id, presence: true

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  has_many :memberships,
    foreign_key: :group_id,
    class_name: :GroupMembership

  has_many :members,
    through: :memberships,
    source: :user

  has_many :events

end

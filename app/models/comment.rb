# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  event_id   :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ActiveRecord::Base
  validates :author_id, :event_id, :body, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :event
end

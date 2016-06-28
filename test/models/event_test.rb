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
#  type        :string           not null
#  date        :datetime         not null
#

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

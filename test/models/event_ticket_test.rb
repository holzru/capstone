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

require 'test_helper'

class EventTicketTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

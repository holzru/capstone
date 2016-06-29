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
#

require 'test_helper'

class GroupTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

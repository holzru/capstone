class GroupMembershipsController < ApplicationController
  before_action :require_logged_in

  def create
    @membership = GroupMembership.new(membership_params)
    @membership.user_id = current_user.id
    if @membership.save
      render json: @membership
    else
      render json: @membership.errors.full_messages
    end
  end

  def destroy
    @membership = GroupMembership.find(params[:id])
    @membership.destroy if @membership.user_id == current_user.id
  end

  def membership_params
    params.permit(:group_id)
  end
end

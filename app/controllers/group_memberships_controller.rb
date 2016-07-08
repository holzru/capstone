class GroupMembershipsController < ApplicationController
  before_action :require_logged_in

  def create
    @membership = GroupMembership.new(membership_params)
    @membership.user_id = current_user.id
    if @membership.save
      render json: @membership
    else
      render json: {errors: @membership.errors.full_messages}, status: 422
    end
  end

  def destroy
    @membership = GroupMembership.where(user_id: current_user.id, group_id: params[:group_id])[0]
    @membership.destroy if @membership.user_id == current_user.id
    render json: @membership
  end

  def membership_params
    params.require(:membership).permit(:group_id)
  end
end

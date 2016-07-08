class GroupsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy, :edit, :update]
  def create
    @group = Group.new(group_params)
    @group.creator_id = current_user.id
    if @group.save
      GroupMembership.create!(user_id: current_user.id, group_id: @group.id)
      render json: @group
    else
      render json:  {errors: @group.errors.full_messages}, status: 422
    end
  end

  def index
    @groups = Group.all
    render json: @groups
  end

  def show
    @group = Group.find(params[:id])
    render json: {group: @group, members: @group.members, creator: @group.creator, events: @group.events}
  end

  def edit
    @group = Group.find(params[:id])
    render json: @group
  end

  def update
    @group = Group.find(params[:id])
    if @group.creator_id == current_user.id
      if @group.update(group_params)
        render json: @group
      else
        render json: {errors: @group.errors.full_messages}, status: 422
      end
    else
      render json: {errors: "Not yours to edit"}
    end
  end

  def destroy
    @group = Group.find(params[:group][:id])
    if @group.creator_id == current_user.id
      @group.destroy
    else
      render json: {errors: "Not yours to delete"}
    end
  end

  protected
  def group_params
    params.require(:group).permit(:name, :description, :location, :pic_url, :id)
  end
end

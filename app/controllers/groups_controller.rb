class GroupsController < ApplicationController
  def create
    @group = Group.new(group_params)
    @group.creator_id = current_user.id
    if @group.save
      render json: @group
    else
      render json: @group.errors.full_messages
    end
  end

  def index
    @groups = Group.all
    render json: @groups
  end

  def show
    @group = Group.find(params[:id])
    render json: @group
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
        render json: @group.errors.full_messages
      end
    else
      render json: "Not yours to fix"
    end
  end

  def destroy
    @group = Group.find(params[:id])
    if @group.creator_id == current_user.id
      @group.destroy
    else
      render json: "Not yours to delete"
    end
  end

  protected
  def group_params
    params.require(:group).permit(:name, :descrption, :location)
  end
end

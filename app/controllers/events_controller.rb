class EventsController < ApplicationController
  def create
    @event = Event.new(event_params)
    @event.creator_id = current_user.id
    if @event.save
      render json: @event
    else
      render json: @event.errors.full_messages
    end
  end

  def index
    @events = Event.all
    if (params[:group][:group_id])
      @events = Event.where("group_id", params[:group][:group_id])
    end
    render json: @events
  end

  def show
    @event = Event.find(params[:id])
    render json: @event
  end

  def edit
    @event = Event.find(params[:id])
    render json: @event
  end

  def update
    @event = Event.find(params[:id])
    if @event.creator_id == current_user.id
      if @event.update(event_params)
        render json: @event
      else
        render json: @event.errors.full_messages
      end
    else
      render json: "Not yours to fix"
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
  end

  protected
  def event_params
    params.require(:event).permit(:group_id, :description, :location, :type, :date)
  end
end

class EventsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy, :edit, :update]
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
    if (params[:group][:id])
      @events = Event.where(group_id: params[:group][:id])
    end
    render json: @events
  end

  def show
    @event = Event.find(params[:id])
    @event_comments = []
    @event.comments.each do |comment|
      @event_comments << {comment: comment, author: comment.author}
    end
    render json: {event: @event, group: @event.group, attendees: @event.attendees, creator: @event.creator, comments: @event_comments}
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
    params.require(:event).permit(:id, :group_id, :description, :location, :type, :date, :title, :category, :pic_url)
  end
end

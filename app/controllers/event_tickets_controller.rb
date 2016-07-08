class EventTicketsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def index
    if params[:eventTickets][:id]
      @event = Event.find(params[:eventTickets][:id])
      render json: @event.attendees
    else
      @events = Event.all
      render json: @events
    end
  end

  def create
    @ticket = EventTicket.new(ticket_params)
    @ticket.user_id = current_user.id
    if @ticket.save
      render json: @ticket
    else
      render json: {errors: @ticket.errors.full_messages}, status: 422
    end
  end

  def destroy
    @ticket = EventTicket.where(user_id: current_user.id, event_id: params[:event_id])[0]
    @ticket.destroy if @ticket.user_id == current_user.id
    render json: @ticket.event_id
  end

  def ticket_params
    params.require(:ticket).permit(:event_id)
  end
end

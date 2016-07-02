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
      render json: @ticket.errors.full_messages
    end
  end

  def destroy
    @ticket = Ticket.find(params[:id])
    @ticket.destroy if @ticket.user_id == current_user.id
  end

  def ticket_params
    params.require(:ticket).permit(:event_id)
  end
end

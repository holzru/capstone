class EventTicketsController < ApplicationController
  before_action :require_logged_in

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
    params.permit(:event_id)
  end
end

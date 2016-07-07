class SearchesController < ApplicationController

  def show
    query = params[:query]

    @groups= Group.where("name ILIKE ?", "%#{query}%")

    @users = User.where("username ILIKE ?", "%#{query}%")

    @events = Event.where("title ILIKE ?", "%#{query}%")

    render json: {groups: @groups, users: @users, events: @events}
  end

end

class SearchesController < ApplicationController

  def show
    query = params[:query]

    @groups= Group.where("name LIKE ? OR name LIKE ?", "%#{query.capitalize}%", "%#{query}%")

    @users = User.where("username LIKE ? OR username LIKE ?", "%#{query.capitalize}%", "%#{query}%")

    @events = Event.where("title LIKE ? OR title LIKE ?", "%#{query.capitalize}%", "%#{query}%")

    render json: {groups: @groups, users: @users, events: @events}
  end

end

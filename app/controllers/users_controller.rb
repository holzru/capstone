class UsersController < ApplicationController
  def create
		@user = User.new(user_params)

		if @user.save
			login(@user)
			render json: @user
		else
			render json: @user.errors, status: 422
		end
	end

  def update
    @user = current_user

		if @user.update(user_params)
			render json: @user
		else
			render json: @user.errors, status: 422
		end
  end

  def show
    @user = User.find(params[:user][:id])
    render json: {user: @user, user_groups: @user.groups, created_groups: @user.created_groups, created_events: @user.created_events}
  end

	protected

	def user_params
		params.require(:user).permit(:username, :password, :description, :pic_url)
	end

end

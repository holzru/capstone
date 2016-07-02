class UsersController < ApplicationController
  def create
		@user = User.new(user_params)

		if @user.save
			login(@user)
			render "users/show"
		else
			render json: @user.errors, status: 422
		end
	end

  def show
    @user = User.find(params[:user][:id])
    render json: {user: @user, user_groups: @user.groups}
  end

	protected

	def user_params
		params.require(:user).permit(:username, :password)
	end

end

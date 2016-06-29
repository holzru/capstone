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
    @user = User.find(params[:id])
    render json: @user
  end

	protected

	def user_params
		params.require(:user).permit(:username, :password)
	end

end

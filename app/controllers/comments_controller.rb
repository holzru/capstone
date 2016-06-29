class CommentsController < ApplicationController
before_action :require_logged_in, only: [:create, :edit, :update, :destroy]

  def create
    @comment = Comment.new(comment_params)
    @comment.auhor_id = current_user.id
    if @comment.save
      render json: @comment
    else
      # render json: @comment.errors.full_messages
      render 'shared/errors', @comment.errors.full_messages
    end
  end

  def edit
    @comment = Comment.find(params[:id])
    render json: @comment
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      render json: @comment
    else
      render 'shared/errors', @comment.errors.full_messages
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
  end

  protected
  def comment_params
    params.permit(:body, :event_id)
  end
end

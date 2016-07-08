class CommentsController < ApplicationController
before_action :require_logged_in, only: [:create, :edit, :update, :destroy]

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    if @comment.save
      render json: @comment
    else
      # render json: @comment.errors.full_messages
      render json: {errors: @comment.errors.full_messages}
    end
  end

  def index
    @comments = Comment.find_by_event_id(params[:event_id])
    @output = []
    @comments.each do |comment|
      @output << {comment: comment, author: comment.author}
    end
    render json: @output
  end

  def edit
    @comment = Comment.find(params[:id])
    render json: @comment
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.author_id == current_user.id && @comment.update(comment_params)
      render json: @comment
    else
      render json: {errors: @comment.errors.full_messages}
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render json: @comment.event_id
  end

  protected
  def comment_params
    params.require(:comment).permit(:body, :event_id)
  end
end

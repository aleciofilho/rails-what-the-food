class UsersController < ApplicationController
  def show
    @categories = Category.all
    @user = current_user
  end
end

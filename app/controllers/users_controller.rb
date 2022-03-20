class UsersController < ApplicationController
  def show
    @categories = Category.all
    @user = current_user
  end

  def show_fridge
    @user = current_user
    @categories = Category.all
  end
end

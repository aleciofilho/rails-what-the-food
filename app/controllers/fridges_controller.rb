class FridgesController < ApplicationController

  def create
    @ingredients = params[:ingredients].split(',')
    @fridge = Fridge.new(fridge_params)
    @fridge.user = current_user

    respond_to do |format|
      format.html # Follow regular flow of Rails
      if @ingredients
        format.text { render partial: 'users/teste', locals: { ingredients: @ingredients }, formats: [:html] }
      end
    end
  end

  private

  def fridge_params
    params.require(:fridge).permit(:ingredient)
  end
end

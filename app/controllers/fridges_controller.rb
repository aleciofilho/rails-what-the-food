class FridgesController < ApplicationController

  def create
    @ingredients = params[:ingredients]
    @fridge = Fridge.new(fridge_params)
    @fridge.user = current_user

    flash[:alert] = @fridge
    flash[:alert] = @ingredients
  end

  private

  def fridge_params
    params.require(:fridge).permit(:ingredient)
  end
end

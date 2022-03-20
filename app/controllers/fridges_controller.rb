class FridgesController < ApplicationController
  def create
    @ingredients = params[:ingredients].split(',')
    @ingredients.each do |ingredient|
      unless current_user.ingredients.pluck(:name).include?(ingredient)
        @fridge = Fridge.new
        @ingredient = Ingredient.find_by(name: ingredient)
        @fridge.ingredient = @ingredient
        @fridge.user = current_user
        @fridge.save!
      end
    end

    redirect_to show_fridge_path(current_user)
    # if @fridge.save
    #   respond_to do |format|
    #     format.html # Follow regular flow of Rails

    #     format.text { render partial: 'users/teste', locals: { ingredient: @ingredient }, formats: [:html] }
    #   end
    # end
  end

  def destroy
    @fridge = Fridge.find(params[:id])
    @fridge.destroy

    redirect_to show_fridge_path(current_user)
  end
end

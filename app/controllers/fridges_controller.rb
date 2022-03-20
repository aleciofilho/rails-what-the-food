class FridgesController < ApplicationController
  def create
    @ingredients = params[:ingredients].split(',')
    @ingredients.each do |ingredient|
      @ingredient = Ingredient.find_by(name: ingredient)
      @fridge = Fridge.new
      @fridge.ingredient = @ingredient
      @fridge.user = current_user
      @fridge.save!
    end

    redirect_to user_path(current_user)

    # if @fridge.save
    #   respond_to do |format|
    #     format.html # Follow regular flow of Rails

    #     format.text { render partial: 'users/teste', locals: { ingredient: @ingredient }, formats: [:html] }
    #   end
    # end
  end

  def show
    
  end

  def destroy
    @fridge = Fridge.find(params[:id])
    @fridge.destroy

    redirect_to user_path(current_user)
  end
end

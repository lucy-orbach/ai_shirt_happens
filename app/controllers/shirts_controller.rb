class ShirtsController < ApplicationController
  skip_before_action :authenticate!, only: [:index, :show]
  def index
    @shirts = Shirt.all
  end

  def show
    @shirt = Shirt.find(params[:id])
    @recommendations  = current_user.recommended_shirts(4)
    respond_to do |format|
      format.json { render json: @shirt }
      format.xml { render xml: @shirt }
      format.html
    end
  end

  def new
    @shirt = Shirt.new
  end

  def create
    @shirt = Shirt.create(safe_params)
    redirect_to @shirt
  end

  def edit
    @shirt = Shirt.find(params[:id])
  end

  def update
    @shirt = Shirt.find(params[:id])
    @shirt.update(safe_params)
    redirect_to @shirt
  end

  private
  def safe_params
    safe_params = params.require(:shirt).permit(:name, :url, tag_ids: [], tags_attributes: [:name])
  end
end

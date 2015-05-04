class ShirtsController < ApplicationController
  def index
    @shirts = Shirt.all
  end

  def show
    @shirt = Shirt.find(params[:id])
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
    safe_params = params.require(:shirt).permit(:name, :url, tag_ids: [])
    @shirt = Shirt.create(safe_params)
    redirect_to @shirt
  end

  def edit
    @shirt = Shirt.find(params[:id])
  end

  def update
    safe_params = params.require(:shirt).permit(:name, :url, tag_names: [])
    @shirt = Shirt.find(params[:id])
    @shirt.update(safe_params)
    redirect_to @shirt
  end
end

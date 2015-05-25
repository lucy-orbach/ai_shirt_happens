class OwnershipsController < ApplicationController
  def create
    shirt = Shirt.find(params[:shirt_id])
    current_user.shirts << shirt
    current_user.like(shirt)
    @recommendations  = current_user.recommended_shirts(4)
    
    respond_to do |format|
      format.html { redirect_to shirt}
      format.js { render :template => "/shirts/create.js.erb" }
    end
   
  end
end

# respond_to do |format|
#       format.html { redirect_to shirt}
#       format.js {  }
#     end

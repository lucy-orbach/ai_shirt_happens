class HomeController < ApplicationController
  skip_before_filter :authenticate!
  def index
  	@shirts = Shirt.all
    render "page", :layout => false
  end
end

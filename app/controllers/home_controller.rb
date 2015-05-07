class HomeController < ApplicationController
  skip_before_filter :authenticate!
  def index
    render "page"
  end
end

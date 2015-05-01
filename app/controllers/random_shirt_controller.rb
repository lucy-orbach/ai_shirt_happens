class RandomShirtController < ApplicationController
  def random
    random_site = ["http://riptapparel.com", "http://teefury.com", 'http://shirt.woot.com'].sample
    redirect_to random_site
  end
end

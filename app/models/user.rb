class User < ActiveRecord::Base
  has_secure_password
  recommends :shirts
end

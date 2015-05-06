class User < ActiveRecord::Base
  has_secure_password
  has_many :ownerships
  has_many :shirts, through: :ownerships
end

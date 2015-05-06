class Shirt < ActiveRecord::Base
  has_many :labels
  has_many :tags, through: :labels
  has_many :ownerships # user_id, shirt_id
  has_many :owners, through: :ownerships, source: :user
  # has_many :users, through: :ownerships
end

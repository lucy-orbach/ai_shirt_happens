class Shirt < ActiveRecord::Base
  has_many :labels
  has_many :tags, through: :labels
  has_many :ownerships # user_id, shirt_id
  has_many :owners, through: :ownerships, source: :user
  has_many :notes
  has_many :commenters, through: :notes, source: :user
  accepts_nested_attributes_for :tags, reject_if: -> (attributes){attributes[:name].blank?}
end

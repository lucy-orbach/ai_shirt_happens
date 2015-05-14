class Ownership < ActiveRecord::Base
  belongs_to :user
  belongs_to :shirt
  validates :shirt_id, uniqueness: {scope: :user_id, message: "is already in your collection"}
end

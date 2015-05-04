class Tag < ActiveRecord::Base
  has_many :labels
  has_many :shirts, through: :labels
end

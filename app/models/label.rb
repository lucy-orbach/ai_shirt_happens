class Label < ActiveRecord::Base
  belongs_to :shirt
  belongs_to :tag
end

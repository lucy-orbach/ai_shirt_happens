class Note < ActiveRecord::Base
  belongs_to :shirt
  belongs_to :author, foreign_key: :user_id, class_name: User
end

class PartList < ApplicationRecord
  belongs_to :project
  belongs_to :component
end

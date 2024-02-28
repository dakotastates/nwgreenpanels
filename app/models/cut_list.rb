class CutList < ApplicationRecord
  belongs_to :project
  belongs_to :dimension
  belongs_to :part
end

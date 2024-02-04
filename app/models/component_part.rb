class ComponentPart < ApplicationRecord
  belongs_to :component
  belongs_to :dimension
  belongs_to :part

  accepts_nested_attributes_for :part, :dimension

  # def part_attributes=(hash)
  #   self.part = Part.find_or_create_by(hash)
  # end

  # def dimension_attributes=(hash)
  #   self.dimension = Dimension.find_or_create_by(hash)
  # end

end

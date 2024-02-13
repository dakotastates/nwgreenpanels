class Part < ApplicationRecord
    belongs_to :user, optional: true

    has_many :component_parts
    has_many :components, through: :component_parts

    # def part=(hash)
    #     self.part = Part.find_or_create_by(hash)
    # end


    # validates :name, presence: true, uniqueness: true
end

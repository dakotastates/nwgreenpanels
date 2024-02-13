class Dimension < ApplicationRecord 
    # belongs_to :component_part
    belongs_to :user, optional: true
    has_many :component_parts
    has_many :components, through: :component_parts

    # validates :dimension, presence: true, uniqueness: true
end

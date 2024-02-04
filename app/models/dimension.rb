class Dimension < ApplicationRecord 
    # belongs_to :component_part
    belongs_to :user, optional: true
    has_many :component_parts, dependent: :destroy
    has_many :components, through: :component_parts
end

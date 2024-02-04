class Part < ApplicationRecord
    belongs_to :user, optional: true

    has_many :component_parts, dependent: :destroy
    has_many :components, through: :component_parts


    # validates :name, presence: true, uniqueness: true
end

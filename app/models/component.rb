class Component < ApplicationRecord
    # attr_accessible :name, :description, image_url, component_number,
    belongs_to :user, optional: true

    # has_and_belongs_to_many :parts
    has_many :notes
    has_many :component_parts
    has_many :parts, through: :component_parts
    has_many :dimensions, through: :component_parts

    accepts_nested_attributes_for :component_parts, allow_destroy: true
    # accepts_nested_attributes_for :component_parts, :parts, :dimensions





    # validates :name, presence: true, uniqueness: true
end

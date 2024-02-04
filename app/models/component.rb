class Component < ApplicationRecord
    # attr_accessible :name, :description, image_url, component_number,
    belongs_to :user, optional: true

    # has_and_belongs_to_many :parts
    has_many :component_parts
    has_many :parts, through: :component_parts
    has_many :dimensions, through: :component_parts

    accepts_nested_attributes_for :component_parts
    # accepts_nested_attributes_for :component_parts, :parts, :dimensions

    # def component_parts_attributes=(array)
    #     array.each do |item|
    #         component_parts.build(item)
    #     end
    # end



    # validates :name, presence: true, uniqueness: true
end

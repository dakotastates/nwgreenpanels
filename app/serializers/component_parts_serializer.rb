class ComponentPartsSerializer < ActiveModel::Serializer
    attributes :id, :quantity, :part, :dimension
    # belongs_to :component
    # has_many :parts, serializer: PartSerializer
    # has_many :dimensions

end
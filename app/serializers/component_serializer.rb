class ComponentSerializer < ActiveModel::Serializer
    attributes :id, :name, :description, :image_url, :component_number, :component_parts
    # has_many :component_parts
    def component_parts
        ActiveModel::SerializableResource.new(object.component_parts, each_serializer: ComponentPartsSerializer)
    end


end
  
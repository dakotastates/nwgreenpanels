class PartListsSerializer < ActiveModel::Serializer
    attributes :id, :quantity, :component

    def component
        ActiveModel::SerializableResource.new(object.component, each_serializer: ComponentSerializer)
    end
end
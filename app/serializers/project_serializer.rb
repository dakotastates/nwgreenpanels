class ProjectSerializer < ActiveModel::Serializer
    attributes :id, :title, :description, :notes, :cut_lists

    def cut_lists
        ActiveModel::SerializableResource.new(object.cut_lists, each_serializer: CutListsSerializer)
    end

    
end
  
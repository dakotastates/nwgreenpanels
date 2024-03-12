class ProjectSerializer < ActiveModel::Serializer
    attributes :id, :title, :description, :notes, :cut_lists, :part_lists

    def cut_lists
        ActiveModel::SerializableResource.new(object.cut_lists, each_serializer: CutListsSerializer)
    end

    def part_lists
        ActiveModel::SerializableResource.new(object.part_lists, each_serializer: PartListsSerializer)
    end
end
  
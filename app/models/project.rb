class Project < ApplicationRecord
  belongs_to :user 
  has_many :notes, :dependent => :destroy
  has_many :cut_lists, :dependent => :destroy
  has_many :part_lists, :dependent => :destroy
  # has_one_attached :image

  accepts_nested_attributes_for :cut_lists, :part_lists, allow_destroy: true
  # has_one :cut_list
  # has_one :cut_list, :dependent => :destroy
  # validates :title, presence: true, uniqueness: true

  # def image_url
  #   Rails.application.routes.url_helpers.url_for(image) if image.attached?
  # end

  # def image_url
  #   Rails.application.routes.url_helpers.rails_blob_path(self.image, only_path: true)
  # end
end

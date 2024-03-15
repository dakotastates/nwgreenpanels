class Project < ApplicationRecord
  belongs_to :user 
  has_many :notes, :dependent => :destroy
  has_many :cut_lists, :dependent => :destroy
  has_many :part_lists, :dependent => :destroy

  accepts_nested_attributes_for :cut_lists, :part_lists, allow_destroy: true
  # has_one :cut_list
  # has_one :cut_list, :dependent => :destroy
  # validates :title, presence: true, uniqueness: true
end

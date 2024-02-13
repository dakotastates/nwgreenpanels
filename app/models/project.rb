class Project < ApplicationRecord
  belongs_to :user 
  has_many :notes, :dependent => :destroy
  # has_one :cut_list, :dependent => :destroy
  # validates :title, presence: true, uniqueness: true
end

class User < ApplicationRecord
    has_secure_password
    has_many :projects
    has_many :components
    has_many :parts
    validates :email, presence: true, uniqueness: true
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
end

class RemoveUserFromParts < ActiveRecord::Migration[7.0]
  def change
    remove_column :parts, :user_id
  end
end

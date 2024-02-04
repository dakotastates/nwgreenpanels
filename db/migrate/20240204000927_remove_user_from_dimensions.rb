class RemoveUserFromDimensions < ActiveRecord::Migration[7.0]
  def change
    remove_column :dimensions, :user_id
  end
end

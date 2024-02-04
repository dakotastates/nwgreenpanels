class CreateParts < ActiveRecord::Migration[7.0]
  def change
    create_table :parts do |t|
      t.string :name
      t.string :description
      t.string :image_url
      t.string :part_number
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

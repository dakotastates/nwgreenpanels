class CreateComponents < ActiveRecord::Migration[7.0]
  def change
    create_table :components do |t|
      t.string :name
      t.string :description
      t.string :image_url
      t.string :component_number
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

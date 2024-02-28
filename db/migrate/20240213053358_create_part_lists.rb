class CreatePartLists < ActiveRecord::Migration[7.0]
  def change
    create_table :part_lists do |t|
      t.references :project, null: false, foreign_key: true, type: :uuid
      t.integer :quantity
      t.references :component, null: false, foreign_key: true

      t.timestamps
    end
  end
end

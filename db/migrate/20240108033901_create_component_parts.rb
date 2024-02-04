class CreateComponentParts < ActiveRecord::Migration[7.0]
  def change
    create_table :component_parts do |t|
      t.integer :quantity
      t.references :dimension, null: false, foreign_key: true
      t.references :part, null: false, foreign_key: true
      t.references :component, null: false, foreign_key: true

      t.timestamps
    end
  end
end

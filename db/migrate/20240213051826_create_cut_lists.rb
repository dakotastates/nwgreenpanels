class CreateCutLists < ActiveRecord::Migration[7.0]
  def change
    create_table :cut_lists do |t|
      t.references :project, null: false, foreign_key: true, type: :uuid
      t.integer :quantity
      t.references :dimension, null: false, foreign_key: true
      t.references :part, null: false, foreign_key: true

      t.timestamps
    end
  end
end

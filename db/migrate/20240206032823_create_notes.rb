class CreateNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :notes do |t|
      t.string :title
      t.string :note
      t.references :project, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end

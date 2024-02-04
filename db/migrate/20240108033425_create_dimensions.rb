class CreateDimensions < ActiveRecord::Migration[7.0]
  def change
    create_table :dimensions do |t|
      t.string :dimension
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

class CreateSubstances < ActiveRecord::Migration[7.0]
  def change
    create_table :substances do |t|
      t.string :name
      t.string :types
      t.string :ways_taken
      t.string :short_term_effects
      t.string :long_term_effects
      t.string :health_issues
      t.string :combined_with_alcohol

      t.timestamps
    end
  end
end

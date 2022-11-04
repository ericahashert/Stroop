class CreateDrugData < ActiveRecord::Migration[7.0]
  def change
    create_table :drug_data do |t|

      t.timestamps
    end
  end
end

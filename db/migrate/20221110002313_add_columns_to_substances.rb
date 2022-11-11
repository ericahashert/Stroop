class AddColumnsToSubstances < ActiveRecord::Migration[7.0]
  def change
    add_column :substances, :description, :string
    add_column :substances, :commercial_name, :string
  end
end

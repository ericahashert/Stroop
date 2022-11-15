class SubstanceSerializer < ActiveModel::Serializer
  attributes :id, :name, :types, :ways_taken, :short_term_effects, :long_term_effects, :health_issues, :combined_with_alcohol, :description, :commercial_name
end

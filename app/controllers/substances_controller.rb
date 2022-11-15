class SubstancesController < ApplicationController
    def index
        render json: Substance.all
    end

    def create
        substance = Substance.create(substance_params)
        render json: substance, status: :created
    end

    private
    
    def substance_params
        params.permit(:name, :types, :ways_taken, :short_term_effects, :long_term_effects, :health_issues, :combined_with_alcohol, :description, :commercial_name)
    end

end

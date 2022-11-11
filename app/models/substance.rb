class Substance 

    # attr_accessor :name, :forms, :ways_taken, :short_term_effects, :long_term_effects, :health_issues, :combined_with_alcohol, :description, :commercial_name
  
    # @@all = []
  
    # def initialize
    #   @@all << self
    # end
  
    # def self.all
    #   @@all
    # end
  
    # def self.reset_all
    #   @@all.clear
    # end

    def self.create_from_collection(substances)
        substances.each do |substance_hash|
            Substance.create(substance_hash)
        end
    end

  end

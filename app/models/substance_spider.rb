require 'pry'
require 'nokogiri'
require 'open-uri'
require 'active_support/core_ext/hash/conversions'

require_relative './substance.rb'

class SubstanceSpider
    def create_substance_hash
        nih_url = 'https://nida.nih.gov/research-topics/commonly-used-drugs-charts'
        html = open(nih_url)
        doc = Nokogiri::HTML(html)

        substances = []

        table = doc.xpath("//dt/node()")
        
        
        table.each do |drug|
            substance = {
            :name => drug.text,
            :types => drug.parent.next_element.css("table:first-of-type").css("tr[2] > td:nth-child(2)").text.strip,
            :ways_taken => drug.parent.next_element.css("table:first-of-type").css("tr[2] > td:nth-child(3)").text.strip,
            :short_term_effects => drug.parent.next_element.css("table:nth-of-type(2)").css("tr[2] > td:nth-child(2)").text.strip,
            :long_term_effects => drug.parent.next_element.css("table:nth-of-type(2)").css("tr[3] > td:nth-child(2)").text.strip,
            :health_issues => drug.parent.next_element.css("table:nth-of-type(2)").css("tr[4] > td:nth-child(2)").text.strip,
            :combined_with_alcohol => drug.parent.next_element.css("table:nth-of-type(2)").css("tr[5] > td:nth-child(2)").text.strip,
            :description => drug.parent.next_element.css("p:first-of-type").text.strip,
            :commercial_name => drug.parent.next_element.css("table:first-of-type").css("tr[2] > td:first-child").text.strip
            }
            substances << substance
        end
        substances
    end
end
require 'pry'
require 'nokogiri'
require 'open-uri'

require_relative './substance.rb'

class SubstanceSpider
    def create_substance_hash
        nih_url = 'https://nida.nih.gov/research-topics/commonly-used-drugs-charts'
        html = open(nih_url)
        doc = Nokogiri::HTML(html)

        substances = {}

        table = doc.css('.path-node').css('.dialog-off-canvas-main-canvas').css('.l-page-container').css('.content').css('.content-inner').css('.main').css('.main-wrapper').css('.layout-center-content').css('.content-river').css('#block-nida-vic-adaptive-system-main').css('.ckeditor-accordion')

        table.each do |drug|
            substances = {
            :name => drug.css("dt").children.text,
            :forms => drug.css("dd > table:first-of-type").css("tr[2] > td:nth-child(2)").text,
            :ways_taken => drug.css("dd > table:first-of-type").css("tr[2] > td:nth-child(3)").text,
            :short_term_effects => drug.css("dd > table:nth-of-type(2)").css("tr[2] > td:nth-child(2)").text,
            :long_term_effects => drug.css("dd > table:nth-of-type(2)").css("tr[3] > td:nth-child(2)").text,
            :health_issues => drug.css("dd > table:nth-of-type(2)").css("tr[4] > td:nth-child(2)").text,
            :combined_with_alcohol => drug.css("dd > table:nth-of-type(2)").css("tr[5] > td:nth-child(2)").text,
            :description => drug.css("dd").css("p:first-of-type").text,
            :commercial_name => drug.css("dd > table:first-of-type").css("tr[2] > td:first-child").text
            }
        end
        substances
    end
end



#   def make_courses
#     self.get_courses.each do |post|
#       course = Course.new
#       course.title = post.css("h2").text
#       course.schedule = post.css(".date").text
#       course.description = post.css("p").text
#     end
#   end

#   def print_courses
#     self.make_courses
#     Course.all.each do |course|
#       if course.title && course.title != ""
#         puts "Title: #{course.title}"
#         puts "  Schedule: #{course.schedule}"
#         puts "  Description: #{course.description}"
#       end
#     end
#   end
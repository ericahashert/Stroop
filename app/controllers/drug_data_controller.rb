require 'rest-client'

class DrugDataController < ApplicationController

    # URL = "https://download.open.fda.gov/drug/event/all_other/drug-event-0001-of-0004.json.zip"
    
# api_key=uy5KK69dg8aqDcvq3i333sgWiMDvGXqr9WgZQRka"

    # def index
    #     response = RestClient.get(URL)
    #     render json: response
    # end
end

# uri = URI(url)
# http = Net::HTTP.new(uri.host, uri.port)
# http.use_ssl = true

# request = Net::HTTP::Post.new(uri.path, {'Content-Type' => 'application/json'})

# request.body = {} # SOME JSON DATA e.g {msg: 'Why'}.to_json

# response = http.request(request)

# body = JSON.parse(response.body) # e.g {answer: 'because it was there'}
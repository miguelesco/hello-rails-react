class V1::GreetingController < ApplicationController
  def index 
    @greeting = Greeting.all
    render json: { :greetings => @greeting}.to_json
  end
end

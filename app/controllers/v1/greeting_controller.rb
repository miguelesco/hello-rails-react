class V1::GreetingController < ApplicationController
  def index 
    render json: { :greeting => [
      {
        :id => 1,
        :content => "Hello"
      },
    ] }.to_json
  end
end

require 'jwt'

module JwtToken 

    extend ActiveSupport::Concern 
    SECRET_KEY = Rails.application.secrets.secret_key_base. to_s

    def encode_token(payload)
        JWT.encode(payload, SECRET_KEY)
    end 

    def decoded_token(token)
        
        decoded = JWT.decode(token, SECRET_KEY)[0]
        HashWithIndifferentAccess.new decoded
    end


end
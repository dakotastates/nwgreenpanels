class Api::V1::SessionsController < ApplicationController
    def login 
        @user = User.find_by(email: user_login_params[:email])
        
        if @user&.authenticate(user_login_params[:password])
          token = encode_token({ user_id: @user.id })
          
          render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
        else
          render json: { message: 'Invalid Email or password' }, status: :unauthorized
        end
      end

    private

    def user_login_params
        # params { user: {username: 'Chandler Bing', password: 'hi' } }
        params.permit(:email, :password)
    end
end
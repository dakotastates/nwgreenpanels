class Api::V1::UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:create]
    before_action :find_user, only: [:show, :update, :destroy]

    def index 
        
        @users = User.all 
        
        render json: @users, status: 200
    end 

    def show 
        if User.exists?(params[:id])
            render json: @user, status: 200 
        else 
            render json: {notice: 'User does not exist' }
        end
    end 

    def create 
        @user = User.new(user_params)
        if @user.save 
            @token = encode_token({ user_id: @user.id })
            render json:{user: @user, jwt: @token}, status: 201
        else 
            render json: { error: @user.errors.full_messages }, status: :not_acceptable
        end
    end 

    def update 
        unless @user.update(user_params)
            render json:{errors: @user.errors.full_messages}
        end
    end 

    def destroy 
        @user.destroy
    end 

    private 

    def user_params 
        params.permit(:email, :username, :password, :first_name, :last_name)
    end 

    def find_user 
        @user = User.find(params[:id])
    end
end

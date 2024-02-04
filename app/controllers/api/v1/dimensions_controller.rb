class Api::V1::DimensionsController < ApplicationController
    skip_before_action :authenticate_user, only: [:create]
    before_action :find_part, only: [:show, :update, :destroy]

    def index 
        
        @dimensions = Dimension.all 
        
        render json: @dimensions, status: 200
    end 

    def show 
        if Dimension.exists?(params[:id])
            render json: @dimension, status: 200 
        else 
            render json: {notice: 'dimension does not exist' }
        end
    end 

    def create 
        @dimension = Dimension.new(dimension_params)
        if @dimension.save 
            render json:{dimension: @dimnesion}, status: 201
        else 
            render json: { error: @dimension.errors.full_messages }, status: :not_acceptable
        end
    end 

    def update 
        unless @dimension.update(dimension_params)
            render json:{errors: @dimension.errors.full_messages}
        end
    end 

    def destroy 
        @dimension.destroy
    end 

    private 

    def dimension_params 
        params.require(:dimension).permit(:dimension)
    end 

    def find_dimension
        @dimension = Dimension.find(params[:id])
    end
end

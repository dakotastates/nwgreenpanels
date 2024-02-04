class Api::V1::PartsController < ApplicationController
    skip_before_action :authenticate_user, only: [:create]
    before_action :find_part, only: [:show, :update, :destroy]

    def index 
        
        @parts = Part.all 
        
        render json: @parts, status: 200
    end 

    def show 
        if Parts.exists?(params[:id])
            render json: @part, status: 200 
        else 
            render json: {notice: 'Part does not exist' }
        end
    end 

    def create 
        @part = Part.new(part_params)
        if @part.save 
            render json:{part: @part}, status: 201
        else 
            render json: { error: @part.errors.full_messages }, status: :not_acceptable
        end
    end 

    def update 
        unless @part.update(part_params)
            render json:{errors: @part.errors.full_messages}
        end
    end 

    def destroy 
        @part.destroy
    end 

    private 

    def part_params 
        params.require(:part).permit(:name, :description, :part_number, image_url)
    end 

    def find_part
        @part = Part.find(params[:id])
    end
end

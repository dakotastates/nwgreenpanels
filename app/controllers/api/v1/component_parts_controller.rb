class Api::V1::ComponentPartsController < ApplicationController
    # skip_before_action :authenticate_user, only: [:create]
    before_action :find_component_part, only: [:show, :update, :destroy]

    def index 
        
        @component_parts = ComponentPart.all 
        
        render json: @component_parts, status: 200
    end 

    def show 
        if ComponentPart.exists?(params[:id])
            render json: @component_parts, status: 200 
        else 
            render json: {notice: 'Component Part does not exist' }
        end
    end 

    def create 
        @component_part = @current_user.component_parts.new(component_part_params)
        if @component_part.save 
            render json:{component_part: @component_part}, status: 201
        else 
            render json: { error: @component_part.errors.full_messages }, status: :not_acceptable
        end
    end 

    def update 
        unless @component_part.update(component_part_params)
            render json:{errors: @component_part.errors.full_messages}
        end
    end 

    def destroy 
        @component_part.destroy
    end 

    private 

    def component_part_params 
        params.require(:component_part).permit(:quantity, :component_id)
    end 

    def find_component_part 
        @component_part = ComponentPart.find(params[:id])
    end
end

class Api::V1::ComponentsController < ApplicationController
    # skip_before_action :authenticate_user, only: [:create]
    before_action :find_component, only: [:show, :update, :destroy]

    def index 
        
        @components = Component.all 
        
        render json: @components, status: 200
    end 

    def show 
        if Component.exists?(params[:id])
            render json: @component, status: 200 
        else 
            render json: {notice: 'Component does not exist' }
        end
    end 

    def create 
        # binding.break
        @component = @current_user.components.new(component_params)
        # binding.break

        if @component.save 
            render json: @component, status: 201
        else 
            render json: { error: @component.errors.full_messages }, status: :not_acceptable
        end
    end 

    def update 
        unless @component.update(component_params)
            render json:{errors: @component.errors.full_messages}
        end
    end 

    def destroy 
        @component.destroy
        render json: {component: @component, result: :ok }
    end 

    private 

    def component_params 
        params.require(:component).permit(:name, :description, 
            component_parts_attributes: [:id, :quantity, _destroy,
                part_attributes: [:id, :name], 
                dimension_attributes: [:id, :dimension]
            ]
        )
    end 

    def find_component 
        @component = Component.find(params[:id])
    end
end

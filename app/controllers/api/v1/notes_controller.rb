class Api::V1::NotesController < ApplicationController
    skip_before_action :authenticate_user, only: [:create]
    before_action :find_note, only: [:show, :update, :destroy]

    def index 
        
        @notes = Note.all 
        
        render json: @notes, status: 200
    end 

    def show 
        if Note.exists?(params[:id])
            render json: @note, status: 200 
        else 
            render json: {notice: 'Note does not exist' }
        end
    end 

    def create 
        @note = Note.new(note_params)
        if @note.save 
            render json:{note: @note}, status: 201
        else 
            render json: { error: @note.errors.full_messages }, status: :not_acceptable
        end
    end 

    def update 

        if @note.update(note_params)
            render json: @note
        else
            render json:{errors: @note.errors.full_messages}
        end
    end 

    def destroy 
        @note.destroy
    end 

    private 

    def note_params 
        params.require(:note).permit(:title, :note, :project_id)
    end 

    def find_note
        @note = Note.find(params[:id])
    end
end

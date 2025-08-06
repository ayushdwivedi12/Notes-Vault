import { PenSquareIcon, Trash2Icon } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router";
import { formatDate } from "../lib/utils";
import { useConfirm } from "../hooks/useConfirm";
import api from "../lib/axios"
import toast from "react-hot-toast";

const NoteCard = ({ note,setNotes }) => {

  const navigate = useNavigate();

  const {confirm} = useConfirm();

  const handleDelete = async(e,id)=>{
e.preventDefault(); // get rid of navigation 
confirm({
  message:"Are you Sure you Want to Delete this Note ?",
  onConfirm: async()=>{
    try{
      await api.delete(`/notes/${id}`);
      setNotes((prev)=>prev.filter((note)=>note._id !== id));
      toast.success("Note Deleted Successfully");
    navigate("/")
    }catch(error){
      console.log("Error in handleDelete",error);
      toast.error("Failed to Delete Note");
    }
  }
})
  }

  return (
    <Link
      to={`/notes/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200  border-t-4 border-solid border-[#00FF9D]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-end gap-1">
            <PenSquareIcon className="size-4" />
            <button className="btn btn-ghost btn-xs text-error">
              <Trash2Icon className="size-4" onClick={(e)=>handleDelete(e,note._id)}/>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;

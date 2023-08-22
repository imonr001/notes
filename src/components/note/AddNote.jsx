import React from "react";
import supabase from "../../supabaseClient";
import MyModal from "../MyModal";

function AddNote(props) {
  console.log(props.noteTitle + props.noteText);

  async function addNoteHandler() {
    try {
      const { data } = await supabase.auth.getUser();

      if (data.error) throw data.error;

      const res = await supabase
        .from("entries")
        .upsert([
          {
            email: data.user.email,
            body: props.noteText,
            title: props.noteTitle,
            date: props.currentDate,
            id: data.user.id,
          },
        ]).select();
        // .match({email:data.user.email,id:data.user.id});
      // can add pop up here for success
      console.log(res.status);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div>
      <div className="bg-gray-100 text-right p-2 pr-1   ">
        <button
          className=" border-8 border-blue-500 bg-blue-500 text-white rounded-lg text-2xl "
          type="button"
          onClick={addNoteHandler}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddNote;

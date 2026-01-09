import { useState } from "react";
import { postUser } from "../service/user-api";

export function Form() {
  const [title, setTitle] = useState("Title");
  const [image, setImage] = useState("");

  const handleSubmit = async () => {
   

    await postUser({ title, image });

    alert("User Created");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="p-10 flex flex-col gap-5 items-center">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="border p-2"
            type="text"
            placeholder="Title"
          />
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border p-2"
            type="file"
            placeholder="Image"
          />
          <button
          
            type="submit"
            className=" cursor-pointer bg-blue-700 text-white px-10 py-2 rounded-2xl"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

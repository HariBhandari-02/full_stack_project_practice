export function GetForm() {
  return (
    <>
      <form action="">
        <div className="p-10 flex flex-col gap-5 items-center">
          <p>..........from database.........</p>
          <input className="border p-2" type="text" placeholder="Title" />
          <input
            className="border p-2"
            type="file"
            placeholder="passImageword"
          />
          <button className=" bg-blue-700 text-white px-10 py-2 rounded-2xl">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

import React from "react";
import { useFormik } from "formik";
import Playlist from "./Playlist";

function Body() {
  const formik = useFormik({
    initialValues: {
      playlistLink: ""
    },
    onSubmit: (values) => {
      console.log("Submitted:", values.playlistLink);
      // You can send the link to your server for further processing here
    }
  });

  // Function to clear the input field
  const handleClearInput = () => {
    formik.setFieldValue("playlistLink", ""); // Clear the input field
  };

  return (
    <>
      <div className="max-w-auto  mx-auto mt-8 p-4  rounded-lg ">
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Find the length of any{" "}
          <span className="text-red-600">YouTube Playlist :</span>
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4 relative">
            <input
              type="text"
              id="playlistLink"
              name="playlistLink"
              className="w-full px-3 py-2 bg-gray-700 text-white border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter YouTube Playlist Link"
              onChange={formik.handleChange}
              value={formik.values.playlistLink}
              autoFocus
            />
            {formik.values.playlistLink && (
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-500"
                onClick={handleClearInput}
              >
                X
              </button>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
          >
            Analyze
          </button>
        </form>
      </div>
      <Playlist />
    </>
  );
}

export default Body;

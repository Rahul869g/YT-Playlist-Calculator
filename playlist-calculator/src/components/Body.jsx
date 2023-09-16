import React from "react";
import { useFormik } from "formik";

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

  return (
    <div className="max-w-auto  mx-auto mt-10 p-4 bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">
        Find the length of any YouTube playlist:
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="playlistLink"
            name="playlistLink"
            className="w-full px-3 py-2 bg-gray-700 text-white border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter YouTube Playlist Link"
            onChange={formik.handleChange}
            value={formik.values.playlistLink}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
        >
          Analyze
        </button>
      </form>
    </div>
  );
}

export default Body;

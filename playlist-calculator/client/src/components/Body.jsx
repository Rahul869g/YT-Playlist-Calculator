import { useState, useEffect } from "react";
import axios from "../api/axios";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import Playlist from "./Playlist";
import useContent from "../hooks/useContent";
import { motion } from "framer-motion"; // Import motion from framer-motion

function Body() {
  const LINK_URL = "/link";
  const { data, setData } = useContent();
  const highImage = data.thumbs && data.thumbs[0] && data.thumbs[0].medium.url;

  const params = useParams();
  const playlistId = params.PlaylistId;

  const [submitted, setSubmitted] = useState(false); // State to track if the form has been submitted

  // Function to extract playlistId from the input URL
  const extractPlaylistId = (url) => {
    const playlistIdMatch = url.match(/[?&]list=([^&]+)/);
    if (playlistIdMatch && playlistIdMatch[1]) {
      return playlistIdMatch[1];
    }
    return null;
  };

  const formik = useFormik({
    initialValues: {
      playlistLink: ""
    },
    onSubmit: async (values) => {
      const enteredUrl = values.playlistLink;
      const enteredPlaylistId = extractPlaylistId(enteredUrl);

      if (enteredPlaylistId) {
        console.log("Extracted Playlist ID:", enteredPlaylistId);

        try {
          const response = await axios.post(LINK_URL, {
            id: enteredPlaylistId // Use the extracted playlistId
          });
          console.log(response.data.data);
          setData(response.data.data);
          setSubmitted(true); // Set submitted to true after successful form submission
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log("Invalid YouTube Playlist URL");
      }
    }
  });

  // Function to clear the input field
  const handleClearInput = () => {
    formik.setFieldValue("playlistLink", ""); // Clear the input field
  };

  return (
    <>
      <div className="max-w-auto mx-auto mt-8 p-4 px-20 rounded-lg ">
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Find the length of any{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text font-extrabold">
            YouTube Playlist :
          </span>
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col md:flex-row"
        >
          <div className="mb-4 md:mb-0 md:mr-2 relative flex-grow">
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
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue md:ml-2"
          >
            Analyze
          </button>
        </form>
      </div>
      {/* Conditionally render the image after form submission */}
      {submitted && (
        <motion.div
          className="flex justify-around  items-center"
          initial={{ opacity: 0, x: -50 }} // Initial animation properties
          animate={{ opacity: 1, x: 0 }} // Animation properties when component enters
          transition={{ duration: 0.5 }} // Animation duration
        >
          <div className="flex-col">
            <Playlist />
          </div>
          <motion.div
            className="mt-14"
            initial={{ opacity: 0, y: 50 }} // Initial animation properties
            animate={{ opacity: 1, y: 0 }} // Animation properties when component enters
            transition={{ duration: 0.5 }} // Animation duration
          >
            {highImage && (
              <img className="" src={highImage} alt="Playlist Thumbnail" />
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default Body;

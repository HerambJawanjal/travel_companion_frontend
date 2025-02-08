import React, { useEffect, useState } from "react";
import { getImages } from "../../services/travel_api";

const Card = (props) => {
  const { place } = props; // Destructure place from props
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      if (place?.properties?.name) {
        try {
          const img = await getImages(place.properties.name);
          console.log("Fetched Image Data:", img);
          if (img?.query?.pages && Object.keys(img.query.pages).length > 0) {
            const firstpage = img.query.pages;
            const firstimg = Object.values(firstpage)[0]?.imageinfo?.[0]?.url;
            if (firstimg) {
              setImage(firstimg);
            } else {
              console.error("Image URL not found");
            }
          }
        } catch (error) {
          console.error("Error fetching image:", error);
        }
      }
    };
    fetchImage();
  }, [place]);

  console.log(image);

  if (!place.properties.name) {
    return <></>;
  }

  return (
    <div className="flex h-full w-auto items-center justify-center">
      <div className=" m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center flex-wrap">
        <a
          href={`https://www.openstreetmap.org/?mlat=${place?.geometry?.coordinates[1]}&mlon=${place?.geometry?.coordinates[0]}`}
        >
          <img
            className="p-3 rounded-t-lg"
            src={image} // Placeholder image
            alt={place?.properties?.name || "Place Image"}
          />
        </a>
        <div className="p-5">
          <a
            href={`https://www.openstreetmap.org/?mlat=${place?.geometry?.coordinates[1]}&mlon=${place?.geometry?.coordinates[0]}`}
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {place?.properties?.name || "Place Name"}{" "}
              {/* Display place name */}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {place?.properties?.address_line2 || "Address not available"}{" "}
            {/* Display address */}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {place?.properties?.historic?.inscription ||
              "No historic description available"}{" "}
            {/* Display inscription */}
          </p>
          <a
            href={
              place?.properties?.wiki_and_media?.wikipedia
                ? `https://en.wikipedia.org/wiki/${
                    place?.properties?.wiki_and_media?.wikipedia.split(":")[1]
                  }`
                : "#"
            }
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

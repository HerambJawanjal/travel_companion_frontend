import React, { useEffect, useState } from "react";
import { getImages } from "../../services/travel_api";

const Card = (props) => {
  const { place } = props; 
  const [image, setImage] = useState(null);
  const [imageSize, setImageSize] = useState("h-40 w-full object-cover");

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
              const imgElement = new Image();
              imgElement.src = firstimg;

              imgElement.onload = () => {
                if (imgElement.width > 500 || imgElement.height > 500) {
                  setImageSize("h-40 w-full object-cover"); 
                } else {
                  setImageSize("h-auto w-auto"); 
                }
              };

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

  if (!place?.properties?.name) return null;

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-full m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center">
        <a
          className="w-full p-3 rounded-t-lg bg-current"
          href={`https://www.openstreetmap.org/?mlat=${place?.geometry?.coordinates[1]}&mlon=${place?.geometry?.coordinates[0]}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full h-40 overflow-hidden flex items-center justify-center">
            <img className={imageSize} src={image} alt={place?.properties?.name || "Place Image"} />
          </div>
        </a>

        <div className="p-5 text-center">
          <a
            href={`https://www.openstreetmap.org/?mlat=${place?.geometry?.coordinates[1]}&mlon=${place?.geometry?.coordinates[0]}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {place?.properties?.name || "Unknown Place"}
            </h5>
          </a>
          <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
            {place?.properties?.address_line2 || "Address not available"}
          </p>
          <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
            {place?.properties?.historic?.inscription || "No historic description available"}
          </p>

          {place?.properties?.wiki_and_media?.wikipedia && (
            <a
              href={`https://en.wikipedia.org/wiki/${place.properties.wiki_and_media.wikipedia.split(":")[1]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
                aria-hidden="true"
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

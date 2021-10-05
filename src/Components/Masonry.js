import React from "react";
import Masonry from "react-responsive-masonry";
import { isEmpty } from "lodash";
import { Typography } from "@material-ui/core";
import { Fragment } from "react";
import Color from "color-thief-react";

const Loading = () => (
  <div
    style={{
      width: "400px",
      height: "300px",
    }}
  >
    Loading...
  </div>
);

export const MasonryComponent = (props) => {
  const { photos } = props;

  return (
    <Fragment>
      {!isEmpty(photos) ? (
        <Masonry columnsCount={3} gutter="10px">
          {photos.map((image, i) => (
            <Color src={image.urls.small} crossOrigin="anonymous" format="hex">
              {({ data, loading }) => {
                if (loading) return <Loading />;
                return (
                  <div
                    style={{
                      width: "400px",
                      height: "300px",
                      background: data,
                    }}
                  ></div>
                );
              }}
            </Color>
          ))}
        </Masonry>
      ) : (
        <Typography>Enter a word to see Colors of Word</Typography>
      )}
    </Fragment>
  );
};

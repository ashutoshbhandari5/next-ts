import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const PhotoIdPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      UserId {id} PhotoIdPage {photoId}
    </div>
  );
};

export default PhotoIdPage;

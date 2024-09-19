import React from 'react';

const ModalZoom = ({ photo }) => {
  return (
    <>
      <dialog open={!!photo}>
        <p>gasçlgas</p>
        <form method="dialog">
          <button>ok</button>
        </form>
      </dialog>
    </>
  );
};

export default ModalZoom;
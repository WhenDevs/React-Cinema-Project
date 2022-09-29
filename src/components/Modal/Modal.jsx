import React, { useState } from 'react';
import './modal.css';

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modl');
  } else {
    document.body.classList.remove('active-modl');
  }

  return (
    <div>
      <div className="banner-control">
        <button
          className="banner-control__btn banner-control__btn-main open-btn"
          onClick={toggleModal}
        >
          Watch
        </button>
        <button className="banner-control__btn banner-control__btn-more">More information</button>
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay" onClick={e => e.stopPropagation()}>
            <div className="modal-content">
              <h2>Hello Modal</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus hic alias nam
                voluptas dicta architecto autem non! Natus, incidunt tempora ut officiis, hic
                mollitia quae aspernatur laudantium veniam officia voluptates quam molestias
                repellat libero explicabo minima pariatur doloribus ducimus similique quo eius
                sapiente. Numquam quo amet reprehenderit, eos veritatis aspernatur!
              </p>
              <button className="close-modal" onClick={toggleModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

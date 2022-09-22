import React from 'react';

// Import Marketing Images
import { soon, dune } from '../assets/index';

function Marketing() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="marketing">
            <div className="marketing-item">
              <div className="marketing__link">
                <img className="marketing__img" src={dune} alt="" />
              </div>
            </div>
            <div className="marketing-item">
              <div className="marketing__link">
                <img className="marketing__img" src={soon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Marketing;
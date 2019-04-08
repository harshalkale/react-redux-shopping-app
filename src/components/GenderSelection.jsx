import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './GenderSelection.less';

export default function GenderSelection({ genders = [] }) {
  return (
    <div className="GenderSelection">
      <div className="row">
        {genders.map(({ id, name, className, text }) => (
          <Link
            to={`/${name}`}
            key={id}
            className={classNames([
              'col-md',
              'GenderSelection-genderBlock',
              className,
            ])}>
            <span className="GenderSelection-text">{text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

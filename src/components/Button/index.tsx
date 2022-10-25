import React from 'react';
import classnames from 'classnames/bind';
import styles from './Button.module.scss';

type Props = {};
const cx = classnames.bind(styles);

const Button = (props: Props) => {
  return <button className={cx('primary')}>Button</button>;
};

export default Button;

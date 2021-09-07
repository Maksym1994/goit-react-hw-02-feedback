import s from 'components/Notification/Notification.module.css';

const Notification = ({ message }) => {
  return <h2 className={s.notification}>{message}</h2>;
};

export default Notification;

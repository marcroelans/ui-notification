import Notification from './notification';

/**
 * init a notification
 * @param {String} title
 * @param {String} subtitle
 * @param {Object} config
 * @return {Class}
 */
const init = (title, subtitle, config = {}) => new Notification(
  title,
  subtitle,
  config,
);

export default init;

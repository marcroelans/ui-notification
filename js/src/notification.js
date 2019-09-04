import { h } from 'create-element-lib';

class Notification {
  constructor(title, subtitle, root = document.querySelector('body'), options = {}) {

    if (!title || !subtitle) {
      throw new Error('Cannot create component Notification');
    }

    this.title = title;
    this.subtitle = subtitle;
    this.options = options;
    this.notification = null;
    this.root = root;

    this.createNotification();
    this.render();
  }

  createNotification() {
    this.notification = h('div', {class: 'js--notification'}, [
      h('div', {class: 'box'}, [
        h('p', {class: 'title'}, [ this.title ]),
        h('p', {class: 'subtitle'}, [ this.subtitle ])
      ])
    ]);
  }

  render() {
    if(this.notification){
      this.root.appendChild(this.notification);

      var elNotification = document.querySelectorAll('js--notification');
      elNotification.forEach(function (item){
        console.log(item);
        item.classList.add("is-active");
      });
    }
    setTimeout(() => {
      this.destroy();
    }, 3000);
  }

  destroy() {
    if(this.notification){

      var elNotification = document.querySelectorAll('js--notification');
      elNotification.forEach(function (item){
        item.classList.remove("is-active");
      });

      setTimeout(() => {
        this.notification.parentElement.removeChild(this.notification);
      }, 350);
    }
  }
}

export default Notification;

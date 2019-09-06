import { h } from 'create-element-lib';

class Notification {
  constructor(title, subtitle, config = {}) {
    if (!title || !subtitle) {
      throw new Error('Cannot create component Notification');
    }
    this.title = title;
    this.subtitle = subtitle;
    this.config = config;
    this.options = this.applyOptions();
    this.template = null;


    this.createTemplate();
    this.render();
  }

  applyOptions() {
    const defaultOption = {
      root: document.querySelector('body'),
      shadow: false,
      closable: true,
      duration: null,
      shouldDestroy: true,
    };

    return Object.assign({}, defaultOption, this.config);
  }

  createTemplate() {
    let shadow;
    let button;

    if (this.options.shadow) {
      shadow = h('div', { class: 'shadow' });
    }

    if (this.options.closable) {
      button = h('button', {
        class: 'button',
        click: () => {
          this.destroy();
        },
      }, ['Schließen']);
    }

    this.template = h('div', { class: 'js--notification' }, [
      shadow,
      h('div', { class: 'box' }, [
        h('p', { class: 'title' }, [this.title]),
        h('p', { class: 'subtitle' }, [this.subtitle]),
        button,
      ]),
    ]);
  }

  render() {
    if (!this.template || !this.options.root) {
      return;
    }

    if (this.options.beforeRender) {
      this.options.beforeRender(this, this.template);
    }

    this.options.root.appendChild(this.template);

    if (this.options.afterRender) {
      this.options.afterRender(this, this.template);
    }

    if (this.options.duration > 0) {
      setTimeout(() => {
        this.destroy();
      }, this.options.duration);
    }
  }

  destroy() {
    if (!this.template) {
      return;
    }

    if (this.options.beforeDestroy) {
      this.options.beforeDestroy(this, this.template);
    }

    if (this.options.shouldDestroy) {
      this.template.parentElement.removeChild(this.template);
    }


    if (this.options.afterDestroy) {
      this.options.afterDestroy(this);
    }
  }
}

export default Notification;

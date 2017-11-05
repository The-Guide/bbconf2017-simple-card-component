class SimpleCard extends Bbconf2017LitElement(HTMLElement) {
  get styleTemplate() {
    return html`
      <style>
        :host {
          background: var(--primary-background, #fff);
          border-radius: var(--border-radius, 4px);

          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                      0 1px 5px 0 rgba(0, 0, 0, 0.12),
                      0 3px 1px -2px rgba(0, 0, 0, 0.2);
          position: relative;

          display: block;
          box-sizing: border-box;
          line-height: 1.5;
          font-weight: normal;
          width: 100%;
        }

        #header ::slotted(*), #main ::slotted(*) {
          padding: calc(var(--spacer-vertical, 8px) * 3) calc(var(--spacer-horizontal, 8px) * 3);
        }

        #header ::slotted(img), #main ::slotted(img), #footer ::slotted(img) {
          padding: 0;
          object-fit: cover;
          width: 100%;
          height: 200px;
          border-bottom: none;
          display: block;
        }

        #header {
          color: var(--primary-text-color, inherit);
        }

        #header ::slotted(*:first-of-type) {
          border-bottom: 1px solid var(--divider-color, #d5d5d5);
        }

        #header ::slotted(img:first-child) {
          border-radius: var(--border-radius, 4px) var(--border-radius, 4px) 0 0;
        }

        #header ::slotted(h1),
        #header ::slotted(h2),
        #header ::slotted(h3),
        #header ::slotted(h4),
        #header ::slotted(h5),
        #header ::slotted(h6) {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }

        #footer ::slotted(*:first-of-type) {
          display: block;
          border-top: 1px solid var(--divider-color, #d5d5d5);
        }

        #footer ::slotted(*:last-child) {
          --lion-bar-border-bottom: none;
        }
      </style>
    `;
  }

  get headerTemplate() {
    return html`
      <header id="header">
        <slot name="header" id="headerslot"></slot>
      </header>
    `;
  }

  get bodyTemplate() {
    return html`
      <main id="main">
        <slot id="mainslot"></slot>
      </main>
    `;
  }

  get footerTemplate() {
    return html`
      <footer id="footer">
        <slot name="footer" id="footerslot"></slot>
      </footer>
    `;
  }

  render() {
    return html`
      ${this.styleTemplate}
      ${this.headerTemplate}
      ${this.bodyTemplate}
      ${this.footerTemplate}
    `;
  }
}

customElements.define('simple-card',SimpleCard);

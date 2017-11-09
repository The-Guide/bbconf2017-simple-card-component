class SimpleCard extends Bbconf2017LitElement(HTMLElement) {
  get styleTemplate() {
    return html`
     <style>
        :host {
          background: #fff;
          border-radius: 4px;
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
        #header ::slotted(*), 
        #main ::slotted(*), 
        #footer ::slotted(*){
           padding: 24px 24px;
        }
        #header {
          color: inherit;
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
        <slot name="main" id="mainslot"></slot>
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

customElements.define('simple-card', SimpleCard);

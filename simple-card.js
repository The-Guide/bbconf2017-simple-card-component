class SimpleCard extends Bbconf2017LitElement(HTMLElement) {
  // connectedCallback() {
  //   console.log('simple-card element added to the DOM!')
  // }

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
      ${this.headerTemplate}
      ${this.bodyTemplate}
      ${this.footerTemplate}
    `;
  }
}

customElements.define('simple-card', SimpleCard);

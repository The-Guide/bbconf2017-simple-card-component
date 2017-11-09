class SimpleCard extends Bbconf2017LitElement(HTMLElement) {
  get headerTemplate() {
    return html`
      <header id="header">
        <slot name="header" id="headerslot"></slot>
      </header>
  `}
  get bodyTemplate() {
    return html`
      <main id="main">
        <slot name="main" id="mainslot"></slot>
      </main>
  `}
  get footerTemplate() {
    return html`
      <footer id="footer">
        <slot name="footer" id="footerslot"></slot>
      </footer>
  `}

  connectedCallback() {
    console.log('simple-card element added to the DOM!')
  }
}

customElements.define('simple-card', SimpleCard);

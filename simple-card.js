class SimpleCard extends HTMLElement {
 connectedCallback(){
   console.log('simple-card element added to the DOM!')
 }
}

customElements.define('simple-card',SimpleCard);

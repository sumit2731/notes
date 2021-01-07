class ConfirmLink extends HTMLAnchorElement {

  connectedCallback() {
    this.addEventListener('click', event => {
      if (!confirm('Do you really want to leave?')) {
        event.preventDefault();
      }
    });
  }
}
/* 
As our custome element is extending built in a tag, we need to provide this third argument
*/
customElements.define('uc-confirm-link', ConfirmLink, { extends: 'a' });

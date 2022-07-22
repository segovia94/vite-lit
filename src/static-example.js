import { html, LitElement } from 'lit'

/**
 * An example of some static html.
 */
export class StaticExample extends LitElement {

  render() {
    return html`
      <section>
        <header>
          <h2>I am static text that can't be changed</h2>
        </header>
        <p>However, because I am a web component, I can be reused many times.</p>
      </section>
    `
  }

}

window.customElements.define('static-example', StaticExample)

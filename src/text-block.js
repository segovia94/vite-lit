import { html, css, LitElement } from 'lit'

/**
 * An block to wrap text.
 *
 * @slot - This element has a slot
 * @csspart wrapper - The wrapping block.
 */
export class TextBlock extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .wrapper {
        padding: 1rem;
        background-color: gray;
      }
    `
  }

  render() {
    return html`
      <div class="wrapper" part="wrapper">
        <slot></slot>
      </div>
    `
  }

}

window.customElements.define('text-block', TextBlock)

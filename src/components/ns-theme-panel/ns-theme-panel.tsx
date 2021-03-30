import { Component, Host, h, Prop, Element, State } from '@stencil/core';

const iframeStyles = {
  width: '100%',
  height: '99vh'
}
@Component({
  tag: 'ns-theme-panel',
  styleUrl: 'ns-theme-panel.scss',
  shadow: true,
})
export class NsThemePanel {
  @Element() el: HTMLElement;
  @Prop({ reflect: true }) selected = false;

  @State()
  loading = true;

  loaded = false;
  iframe: HTMLIFrameElement;
  href: string;


  async componentWillUpdate() {
    if (this.selected && !this.loaded) {
      this.iframe.src = this.el.dataset.href;
      this.iframe.onload = () => {
        this.loading = false;
        this.loaded = true;
      }
      this.iframe.onerror = () => {
        this.loading = false;
      }
    }
  }

  render() {
    return (
      <Host
        class={
          { 'active': this.selected }
        }
        aria-hidden={this.selected ? 'false' : 'true'}>
        <div class={{
          'ns-theme__panel': true,
          'loading': this.loading,
          'active': this.selected,
          'ui': true,
          'segment': true
        }}>

          <iframe
            data-src={this.href}
            ref={(el) => {
              this.iframe = el;
            }}
            class="ns-theme__panel-frame"
            seamless
            style={iframeStyles}>
            <p>Your browser does not support iframes.</p>
          </iframe>

        </div>

      </Host>
    );
  }

}

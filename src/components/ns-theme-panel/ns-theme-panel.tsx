import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ns-theme-panel',
  styleUrl: 'ns-theme-panel.scss',
  shadow: true,
})
export class NsThemePanel {
  @Prop() selected = false;
  @Prop() loading = false;

  render() {
    return (
      <Host aria-hidden={this.selected ? 'false' : 'true'}>
        <div class={{
          'ns-theme__panel': true,
          'loading': this.loading,
          'ui': true,
          'segment': true
        }}>
          <slot></slot>
        </div>

      </Host>
    );
  }

}

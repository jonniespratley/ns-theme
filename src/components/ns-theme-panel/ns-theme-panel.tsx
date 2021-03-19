import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ns-theme-panel',
  styleUrl: 'ns-theme-panel.scss',
  shadow: true,
})
export class NsThemePanel {
  @Prop() selected: boolean;

  render() {
    return (
      <Host aria-hidden={this.selected ? 'false' : 'true'}>
        <div class={{
        'ns-theme__panel': true,
        'active': this.selected
      }}>
        <slot></slot>
        </div>

      </Host>
    );
  }

}

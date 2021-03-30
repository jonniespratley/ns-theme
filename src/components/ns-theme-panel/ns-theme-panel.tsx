import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ns-theme-panel',
  styleUrl: 'ns-theme-panel.scss',
  shadow: true,
})
export class NsThemePanel {
  @Prop({ reflect: true }) selected = false;
  @Prop({ reflect: true }) loading = false;

  render() {
    return (
      <Host aria-hidden={this.selected ? 'false' : 'true'}>
        <div class={{
          'ns-theme__panel': true,
          'loading': this.loading,
          'active': this.selected,
          'ui': true,
          'segment': true
        }}>
          <slot></slot>
        </div>

      </Host>
    );
  }

}

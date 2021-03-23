import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ns-spinner',
  styleUrl: 'ns-spinner.scss',
  shadow: true,
})
export class NsSpinner {
  
  @Prop() width: number = 100;
  @Prop() height: number = 100;

  render() {
    return (
      <Host>
        <div class="ns-theme-spinner">
            <svg viewBox="0 0 100 100" height={this.height} width={this.width}>
              <circle class="circle1" cx="50" cy="50" r="45"></circle>
              <circle class="circle2" cx="50" cy="50" r="45" transform="rotate(-45,50,50)"></circle>
            </svg>          
        </div>
      </Host>
    );
  }

}

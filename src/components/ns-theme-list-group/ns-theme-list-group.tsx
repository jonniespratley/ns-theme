import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { TabItem } from '../props';

@Component({
  tag: 'ns-theme-list-group',
  styleUrl: 'ns-theme-list-group.scss',
  shadow: false,
})
export class NsThemeListGroup {
  @Prop() items: TabItem[];
  @Event() tabClick: EventEmitter<TabItem>;
  onClickHandler(item: TabItem) {
    item.selected = true;
    this.tabClick.emit(item);
  }
  render() {
    return (
      <Host>
        <slot></slot>
        <ul class="list-group">
          {this.items && this.items.map((item) => (
            <li class={{ 'list-item': true, 'list-item--button': true, 'list-item--active': item.selected }}>
              <div class="list-item__content" onClick={() => {
                this.onClickHandler(item);
              }} role="button">
                <span class="list-item__subtitle">{item.title || 'App'}</span>
                <span class="list-item__title">{item.label}</span>
              </div>
              <div class="list-item__actions">
                <button title={`Open in ${item.label} New Window`}>
                  <i class="gedi-new-window"></i>
                </button>
                <button title={`Close ${item.label} Tab`} onClick={() => {
                  document.dispatchEvent(new CustomEvent('closeTab', { detail: item }));
                }}>
                  <i class="gedi-close"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Host>
    );
  }
}

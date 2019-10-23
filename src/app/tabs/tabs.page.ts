import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  navMobile: boolean;
  public innerWidth: Number;

  @HostListener('window:resize', ['$event'])
  onresize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 900) {
      this.toggleNav();
    } else {
      this.navMobile = false
    }
  }

  private toggleNav(): void {
    this.navMobile = true;
  }

}

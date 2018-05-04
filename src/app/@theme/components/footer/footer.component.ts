import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a href="https://www.linkedin.com/in/alex-lim-036250137/" target="_blank">Alex Lim</a></b> 2017</span>
    <div class="socials">
      <a target="_blank" class="ion ion-ios-email"><small>onetoday1030@gmail.com</small></a><br/>
      <a target="_blank" class="ion ion-social-skype"><small>live:2a59fb153ba75842</small></a>
    </div>
  `,
})
export class FooterComponent {
}

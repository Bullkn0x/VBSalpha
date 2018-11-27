import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { UserService } from 'services/user';
import { Inject } from 'util/injector';
import { GuestApiService } from 'services/guest-api';
import { I18nService } from 'services/i18n';
import electron from 'electron';
import { PlatformAppsService, EAppPageSlot } from 'services/platform-apps';
import { AppTechSupportService } from 'services/platform-tech-support';
import Utils from 'services/utils';

@Component({})
export default class AppTechSupport extends Vue {
  @Inject() userService: UserService;
  @Inject() platformAppsService: PlatformAppsService;
  @Inject() AppTechSupportService: AppTechSupportService;
  @Inject() guestApiService: GuestApiService;
  @Inject() i18nService: I18nService;

  @Prop() params: {
    appId?: string;
  };

  $refs: {
    appTechWebview: Electron.WebviewTag;
  };

  mounted() {
    this.$refs.appTechWebview.addEventListener('dom-ready', () => {
      if (Utils.isDevMode()) {
        this.$refs.appTechWebview.openDevTools();
      }
      this.guestApiService.exposeApi(
        this.$refs.appTechWebview.getWebContents().id,
        {
          reloadProductionApps: this.reloadProductionApps,
          openLinkInBrowser: this.openLinkInBrowser,
          onPaypalAuthSuccess: this.onPaypalAuthSuccessHandler
        }
      );
    });
  }

  async onPaypalAuthSuccessHandler(callback: Function) {
    this.AppTechSupportService.bindsPaypalSuccessCallback(callback);
  }

  async openLinkInBrowser(url: string) {
    electron.remote.shell.openExternal(url);
  }

  async reloadProductionApps() {
    this.platformAppsService.installProductionApps();
  }

  get loggedIn() {
    return this.userService.isLoggedIn();
  }

  get TechSupportURL() {
    return this.userService.TechSupportURL(this.params.appId);
  }
}

import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { appLocators } from "../tests/locators/subscription.locator";
import { testData } from "../utils/testData";
import { ENV } from "../utils/env";
import { DashboardPage } from "./dashboardPage";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Login as admin user
  async login(username?: string, password?: string): Promise<DashboardPage> {
    await this.navigateTo(ENV.adminURL);
    await this.fill(appLocators.adminEmailInput, username || testData.admin.email);
    await this.fill(appLocators.adminPasswordInput, password || testData.admin.password);
    await this.click(appLocators.adminSigninButton);
    await this.verifyVisible(appLocators.customersLink);
    await this.verifyUrl(`${ENV.baseURL}/admin`);
    return new DashboardPage(this.page);
  }
}
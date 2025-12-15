import { Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";
import { appLocators } from "../tests/locators/subscription.locator";
import { ENV } from "../utils/env";

export class ProductEditPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Update product name
  async updateProductName(newProductName: string): Promise<void> {
    await this.click(appLocators.product.nameInput);
    await this.fill(appLocators.product.nameInput, newProductName);
    await this.click(appLocators.product.saveButton);
  }

  // Verify product name is updated
  async isProductNameUpdated(expectedName: string): Promise<boolean> {
    try {
      await expect(this.locator(appLocators.product.nameInput)).toHaveValue(expectedName);
      //await expect(this.page.getByText("Product saved successfully!")).toBeVisible();
      return true;
    } catch {
      return false;
    }
  }

  // Upload product images
  async uploadProductImages(imagePath: string = ENV.updatedFileUploadPath): Promise<void> {
  
    await this.page.locator('span.remove.cursor-pointer').click();

  const fileInput = this.page.locator('input[type="file"]');

  await fileInput.setInputFiles(imagePath);

  // Verify image uploaded (optional check)
  await expect(this.page.locator('img')).toBeVisible();
  }

  // Verify image update was successful
  async isImageUpdatedSuccessfully(): Promise<boolean> {
    try {
      await this.click(appLocators.product.saveButton);
      await expect(this.page.getByText("Product saved successfully!")).toBeVisible();
      await expect(this.page.locator('img').first()).toBeVisible();
      return true;
    } catch {
      return false;
    }
  }

  // Get product ID from URL
  async getProductId(): Promise<number> {
    const url = this.page.url();
    const match = url.match(/\/edit\/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  }
}
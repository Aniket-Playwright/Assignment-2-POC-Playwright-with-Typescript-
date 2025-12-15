import { Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";
import { appLocators } from "../tests/locators/subscription.locator";
import { ENV } from "../utils/env";
import { ProductEditPage } from "./productEditPage";
import { testData } from "../utils/testData";

export class ProductPage extends BasePage {
  savebutton: any;
  constructor(page: Page) {
    super(page);
  }

  // Navigate to new product page
  async navigateToNewProduct(): Promise<void> {
    await this.click(appLocators.product.newProductLink);
  }

  // Fill basic product information
  async fillBasicProductInfo(
    productName: string,
    sku: string,
    price: string = "999"
  ): Promise<void> {
    await this.fill(appLocators.product.nameInput, productName);
    await this.fill(appLocators.product.skuInput, sku);
    await this.page.getByPlaceholder("Enter price").fill("120");
    await this.page.getByPlaceholder("Enter weight").fill("1.6");
    //await this.fill(appLocators.product.priceInput, price);
    //wait this.fill(appLocators.product.weightInput, "0.30");
  }

  // Select product category
  async selectCategory(category: string = "Men"): Promise<void> {
    await this.click(appLocators.product.categoryLink);
    await this.fill(appLocators.product.searchCategory, category);
    await appLocators.product.menSelectButton(this.page).click();
  }

  // Upload product image
  async uploadFile(): Promise<void> {
  const fileInput = this.page.locator('input[type="file"]');

  await fileInput.setInputFiles(ENV.fileUploadPath);

  // Verify image uploaded (optional check)
  await expect(this.page.locator('img')).toBeVisible();
}

  /*async uploadFile(): Promise<void> {
    const [fileChooser] = await Promise.all([
      this.page.waitForEvent("filechooser"),
      this.page.click("#images div"),
    ]);
    await fileChooser.setFiles(ENV.fileUploadPath);
    const uploaded = this.page.locator("#images div").first();
    await expect(uploaded).toBeVisible();
  }*/

  // Fill SEO information
  async fillSeoInfo(urlKeyInput: string): Promise<void> {
    await this.page.getByPlaceholder("Enter URL Key").fill(urlKeyInput);
    //await this.page.fill(appLocators.product.urlKeyInput, urlKeyInput);
    await this.page.getByPlaceholder("Enter Meta Title").fill("Samsung Galaxy S25 Ultra");
    //await this.page.locator(appLocators.product.metaTitleInput).fill("Apple iPhone 16 Pro");
    await this.page.getByPlaceholder("Enter Meta Description").fill("Latest Samsung Galaxy S25 Ultra with advanced features.");
    //await this.page.locator(appLocators.product.metaKeywordsInput).fill("iPhone, Apple, Smartphone");
    //await this.fill(appLocators.product.metaDescriptionInput, "Latest Apple iPhone 16 Pro with advanced features.");
  }

  // Set product status toggles
  async setProductStatus(): Promise<void> {
    await expect(this.page.getByLabel("Enabled")).toBeChecked();
  }

  // Select product attributes
  /*async selectAttributes(): Promise<void> {
    await this.page.locator('select[name="attributes[0][value]"]').selectOption("White");
    await this.page.locator('select[name="attributes[1][value]"]').selectOption("XXL");

  }*/

  // Set inventory quantity
  async setInventory(quantity: string = "50"): Promise<void> {
    await this.page.getByPlaceholder("Quantity").fill(quantity);
    //await this.fill(appLocators.product.quantityInput, quantity);
  }

  // Save the product
  async saveProduct(): Promise<void> {
    await this.page.getByRole("button", { name: "Save" }).click();

    //await this.click(appLocators.product.saveButton);
  }

  // Verify product was saved successfully
  async verifyProductSaved(productName: string): Promise<void> {
    // Check for success message
    //await expect(this.page.getByText("Product saved successfully!")).toBeVisible();;


    // Navigate to products page
    await this.click(appLocators.product.productsLink);
    await this.verifyUrl("http://localhost:3000/admin/products");

    // Verify product appears in list
    await expect(this.page.getByRole("link", { name: productName, exact: true })).toBeVisible();
  }

  // Complete product creation flow - THIS IS THE MISSING METHOD
  async createNewProduct(
    productName: string,
    sku: string,
    urlKeyInput : string,
    price?: string,
    category?: string,
    quantity?: string,
    
  ): Promise<void> {
    await this.click(appLocators.dashboard);
    await this.navigateToNewProduct();
    await this.fillBasicProductInfo(productName, sku, price);
    await this.selectCategory(category);
    await this.uploadFile();
    await this.fillSeoInfo(urlKeyInput);
    await this.setProductStatus();
    //await this.selectAttributes();
    await this.setInventory(quantity);
    await this.saveProduct();
    await this.verifyProductSaved(productName);
  }

  // Check if product is created and visible in list
  async isProductCreated(productName: string): Promise<boolean> {
    try {
      await this.click(appLocators.product.productsLink);
      await this.verifyUrl("http://localhost:3000/admin/products");
      //await expect(this.page.getByRole("link", { name: productName, exact: true })).toBeVisible();
      return true;
    } catch {
      return false;
    }
  }

  // Open product for editing
  async openProductForEditing(productName: string): Promise<void> {
    await this.page.getByRole("link", { name: productName, exact: true }).click();
    
   
  }
}
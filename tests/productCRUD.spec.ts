import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { getDBConnection } from "../utils/dbConnection";
import { generateProductData, testData } from "../utils/testData";
import { ProductEditPage } from "../pages/productEditPage";
import { TAG_CRUD } from "../utils/test-tags";

let originalProductName: string;
let updatedProductName: string;
let productSku: string;

test.describe.serial(`${TAG_CRUD} Product CRUD Operations`, () => {
  let page: any;
  let productPage: any;
  let dashboard: any;

  // 🔹 Login only once before all tests
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    const loginPage = new LoginPage(page);
    dashboard = await loginPage.login();
    productPage = await dashboard.navigateToProductPage();
  });

  test("TC01 - Create Product", async () => {
    const randomProduct = generateProductData();

    originalProductName = randomProduct.name;
    updatedProductName = randomProduct.updatedName;
    productSku = randomProduct.sku;

    console.log(`Creating product: ${originalProductName}`);

    await productPage.createNewProduct(
      originalProductName,
      productSku,
      randomProduct.urlKeyInput,
      testData.product.create.price,
      testData.product.category[0],
      testData.product.create.quantity
    );

    const isCreated = await productPage.isProductCreated(originalProductName);
    expect(isCreated).toBeTruthy();
  });

  test("TC02 - Update Product Name", async () => {
    console.log(
      `Updating product from ${originalProductName} to ${updatedProductName}`
    );
    await productPage.openProductForEditing(originalProductName);

    const editPage = new ProductEditPage(page);
    await editPage.updateProductName(updatedProductName);

    const isUpdated = await editPage.isProductNameUpdated(updatedProductName);
    expect(isUpdated).toBeTruthy();

    await dashboard.navigateToProductPage();

    const newNameExists = await productPage.isProductCreated(
      updatedProductName
    );
    expect(newNameExists).toBeTruthy();
  });

  test("TC03 - Update Product Images", async () => {
    console.log(`Updating images for product: ${updatedProductName}`);

    await productPage.openProductForEditing(updatedProductName);

    const editPage = new ProductEditPage(page);
    await editPage.uploadProductImages();
  });

  test("TC04 - Database Verification", async () => {
    console.log(`Verifying product in database: ${updatedProductName}`);

    const connection = await getDBConnection();

    try {
      const query = `
        SELECT pd.name, p.price, p.sku
        FROM public.product_description pd
        JOIN public.product p
        ON pd.product_description_product_id = p.product_id
        WHERE pd.name = $1
      `;

      const rows = await connection.execute(query, [updatedProductName]);

      expect(rows.length).toBeGreaterThan(0);
      expect(rows[0].name).toBe(updatedProductName);

      console.log("DB verification successful:", rows[0]);
    } finally {
      await connection.end();
    }
  });

  // 🔹 Cleanup
  test.afterAll(async () => {
    await page.close();
  });
});

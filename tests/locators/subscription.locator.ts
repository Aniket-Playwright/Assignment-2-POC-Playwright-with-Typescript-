import { Locator, Page } from "@playwright/test";

export type RoleLocator = {
  role: Parameters<Page["getByRole"]>[0];
  name?: string;
  exact?: boolean;
};

export const appLocators = {
  // Navigation
  navSignup: ".self-center",

  // Signup
  linkCreateAccount: { role: "link", name: "Create an account" } as RoleLocator,
  fullNameInput: { role: "textbox", name: "Full Name" } as RoleLocator,
  emailInput: { role: "textbox", name: "Email" } as RoleLocator,
  passwordInput: { role: "textbox", name: "Password" } as RoleLocator,
  signupButton: { role: "button", name: "SIGN UP" } as RoleLocator,

  // Admin login
  adminEmailInput: { role: "textbox", name: "Email" } as RoleLocator,
  adminPasswordInput: { role: "textbox", name: "Password" } as RoleLocator,
  adminSigninButton: { role: "button", name: "SIGN IN" } as RoleLocator,

  nextButton: ".next",

  // Pages
  coupon: { role: "link", name: "Coupons" } as RoleLocator,
  customersLink: { role: "link", name: "Customers", exact: true } as RoleLocator,

  // Customers page
  customerStatus: "text=StatusEnabled",
  startDate: { role: "textbox", name: "Start date" } as RoleLocator,
  endDate: { role: "textbox", name: "End date" } as RoleLocator,

  // Coupon Management
  newCouponLink: { role: "link", name: "New Coupon" } as RoleLocator,
  couponCodeInput: { role: "textbox", name: "Enter coupon code" } as RoleLocator,
  couponDescriptionInput: { role: "textbox", name: "Description" } as RoleLocator,
  discountAmountInput: { role: "textbox", name: "Discount amount" } as RoleLocator,

  freeShippingCheckbox: (page: Page) =>
    page.locator("label").filter({ hasText: "Free shipping?" }).locator("span"),

  discountTypeRadio: (page: Page, type: string) =>
    page.locator(`label:has-text("${type}") span`).first(),

  minPurchaseAmountInput: { role: "textbox", name: "Enter minimum purchase amount" } as RoleLocator,
  minPurchaseQtyInput: { role: "textbox", name: "Enter minimum purchase qty" } as RoleLocator,

  customerGroupDropdown: ".css-8mmkcg",
  customerGroupOption: (group: string) =>
    ({ role: "option", name: group } as RoleLocator),

  customerEmailsInput: { role: "textbox", name: "Enter customer emails" } as RoleLocator,
  purchasedAmountInput: { role: "textbox", name: "Enter purchased amount" } as RoleLocator,
  couponSaveButton: { role: "button", name: "Save" } as RoleLocator,

  successMessage: (page: Page, text: string) =>
    page.getByRole("alert").getByText(text, { exact: true }),

  backButton: (page: Page) =>
    page.getByRole("link").filter({ hasText: /^$/ }).first(),

  couponCell: (code: string) =>
    ({ role: "cell", name: code, exact: true } as RoleLocator),

  dynamicCustomerEmailCell: (email: string): RoleLocator => ({
    role: "cell",
    name: email,
    exact: true,
  }),

  dashboard: { role: "link", name: "Dashboard" } as RoleLocator,

  // Product Management
  product: {
    newProductLink: { role: "link", name: "New Product", exact: true } as RoleLocator,
    productsLink: { role: "link", name: "Products", exact: true } as RoleLocator,

    successMessage: {
      role: "alert",
      name: "Product saved successfully!",
    } as RoleLocator,

    nameInput: { role: "textbox", name: "Name" } as RoleLocator,
    skuInput: { role: "textbox", name: "SKU" } as RoleLocator,
    priceInput: { role: "textbox", name: "Price" } as RoleLocator,
    weightInput: { role: "textbox", name: "Weight" } as RoleLocator,
    //deleteButton: { role: "button", class: "remove cursor-pointer text-critical fill-current" } as RoleLocator,

    categoryLink: { role: "link", name: "Select category" } as RoleLocator,
    searchCategory: { role: "textbox", name: "Search categories" } as RoleLocator,

    menSelectButton: (page: Page) =>
      page.locator("div").filter({ hasText: /^MenSelect$/ }).getByRole("button"),

    taxClassDropdown: "#taxClass",
    urlKeyInput: "#urlKey",
    metaTitleInput: "#metaTitle",
    metaKeywordsInput: "#metaKeywords",

    metaDescriptionInput: { role: "textbox", name: "Meta description" } as RoleLocator,

    disabledToggle: 'label:has-text("Disabled") span',
    enabledToggle: 'label:has-text("Enabled") span',
    visibleToggle: 'label:has-text("Visible") span',

    quantityInput: { role: "textbox", name: "Quantity" } as RoleLocator,
    saveButton: { role: "button", name: "Save" } as RoleLocator,

    selectColor: (page: Page) => page.locator('select[name="attributes[0][value]"]'),
    selectSize: (page: Page) => page.locator('select[name="attributes[1][value]"]'),

    searchInput: (page: Page) =>
      page.getByRole("heading", { name: "Status Product type" }).getByPlaceholder("Search"),
  },
};

export function getLocator(page: Page, locator: RoleLocator | string): Locator {
  if (typeof locator === "string") {
    return page.locator(locator);
  }

  const { role, name, exact } = locator;
  return page.getByRole(role, { name, exact });
}

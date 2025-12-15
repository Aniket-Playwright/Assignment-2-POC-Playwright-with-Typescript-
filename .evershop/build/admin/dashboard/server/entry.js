import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Area } from '@evershop/evershop/components/common';
import { renderHtml } from '@evershop/evershop/components/common';
import e4be48100db1ffb514ea467a4e1f539a0 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import e53bfcc43edd1f27724baa8fa1b0e8690 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/GlobalCss.js';
import e3b55b96e45c0eb98453893b53a9ddced from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/Layout.js';
import ed73447a6e7f6173a7e116ef6ccb84ea3 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/Meta.js';
import eed51ab6d717ede2067dffeb16c24c385 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import ee7c7ae3a6a31403ad708538815788ded from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import e641dc257c2849b262cbade107935b1e1 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/all/ShippingSettingMenu.js';
import e15d50f081e0ed522fb38f06eb1475c4d from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CmsMenuGroup.js';
import edc7cc76ef2604ccf3ff4ee3554bb1fb6 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CopyRight.js';
import e4a0cf81159f1e47210f9546b31edca00 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Logo.js';
import e50fa6a681d52ead55063b9bb8ed5e596 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Navigation.js';
import ee7737b226cf3b007fc1e274ffd137822 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Notification.js';
import e97b2df7bab75bb0fc6a690f8cd228221 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/QuickLinks.js';
import e97ea2a3341bc73b24f1f2b210cc7fcd0 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/SearchBox.js';
import e8c1069946cbc13a9e89bc67a94ebc220 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Version.js';
import e92ed67e60eba7bcc40b84e6e35958f33 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/dashboard/Layout.js';
import e9364c1dcff32c3fca155f9b63ee74f19 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/dashboard/PageHeading.js';
import eccde414bc67b1c1ea4f07f7bce4f729e from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import e1f474153af26f92f05ea1563a755a379 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import e279f8848eb189f874d805e6087c30263 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/dashboard/Bestsellers.js';
import e48a771efbbc844c2c177553e8367ddfc from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/dashboard/Lifetimesales.js';
import e215dfb1aa9831cb0b2d9a663c3d3252b from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/dashboard/Statistic.js';
import e89b834014769f19484ff05a9c4b21e8d from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import ea24892d34754e495a40d75768cd1a34f from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import e82d7aa3a197b6edcbad7f9b82800a888 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import efb63de35b236e64b3767bb9cfbcdaa48 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import eaf2910ea372f061209536e2ec5ea8eeb from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
import ee3915e2878f103e35efdf3ee6223b9f3 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/tax/pages/admin/all/TaxSettingMenu.js';
import collection_products from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/catalog/components/CollectionProductsSetting.js';
import text_block from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/components/TextBlockSetting.js';
import basic_menu from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/components/BasicMenuSetting.js';
import banner from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/components/BannerSetting.js';
import simple_slider from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/components/SlideshowSetting.js';
export default renderHtml;
Area.defaultProps.components = {
  header: {
    e4be48100db1ffb514ea467a4e1f539a0: {
      id: 'e4be48100db1ffb514ea467a4e1f539a0',
      sortOrder: 50,
      component: { default: e4be48100db1ffb514ea467a4e1f539a0 }
    },
    e4a0cf81159f1e47210f9546b31edca00: {
      id: 'e4a0cf81159f1e47210f9546b31edca00',
      sortOrder: 10,
      component: { default: e4a0cf81159f1e47210f9546b31edca00 }
    },
    e97ea2a3341bc73b24f1f2b210cc7fcd0: {
      id: 'e97ea2a3341bc73b24f1f2b210cc7fcd0',
      sortOrder: 20,
      component: { default: e97ea2a3341bc73b24f1f2b210cc7fcd0 }
    }
  },
  head: {
    e53bfcc43edd1f27724baa8fa1b0e8690: {
      id: 'e53bfcc43edd1f27724baa8fa1b0e8690',
      sortOrder: 5,
      component: { default: e53bfcc43edd1f27724baa8fa1b0e8690 }
    },
    ed73447a6e7f6173a7e116ef6ccb84ea3: {
      id: 'ed73447a6e7f6173a7e116ef6ccb84ea3',
      sortOrder: 5,
      component: { default: ed73447a6e7f6173a7e116ef6ccb84ea3 }
    }
  },
  body: {
    e3b55b96e45c0eb98453893b53a9ddced: {
      id: 'e3b55b96e45c0eb98453893b53a9ddced',
      sortOrder: 10,
      component: { default: e3b55b96e45c0eb98453893b53a9ddced }
    },
    ee7737b226cf3b007fc1e274ffd137822: {
      id: 'ee7737b226cf3b007fc1e274ffd137822',
      sortOrder: 10,
      component: { default: ee7737b226cf3b007fc1e274ffd137822 }
    }
  },
  adminMenu: {
    eed51ab6d717ede2067dffeb16c24c385: {
      id: 'eed51ab6d717ede2067dffeb16c24c385',
      sortOrder: 20,
      component: { default: eed51ab6d717ede2067dffeb16c24c385 }
    },
    e15d50f081e0ed522fb38f06eb1475c4d: {
      id: 'e15d50f081e0ed522fb38f06eb1475c4d',
      sortOrder: 60,
      component: { default: e15d50f081e0ed522fb38f06eb1475c4d }
    },
    e97b2df7bab75bb0fc6a690f8cd228221: {
      id: 'e97b2df7bab75bb0fc6a690f8cd228221',
      sortOrder: 10,
      component: { default: e97b2df7bab75bb0fc6a690f8cd228221 }
    },
    eccde414bc67b1c1ea4f07f7bce4f729e: {
      id: 'eccde414bc67b1c1ea4f07f7bce4f729e',
      sortOrder: 40,
      component: { default: eccde414bc67b1c1ea4f07f7bce4f729e }
    },
    e1f474153af26f92f05ea1563a755a379: {
      id: 'e1f474153af26f92f05ea1563a755a379',
      sortOrder: 30,
      component: { default: e1f474153af26f92f05ea1563a755a379 }
    },
    e89b834014769f19484ff05a9c4b21e8d: {
      id: 'e89b834014769f19484ff05a9c4b21e8d',
      sortOrder: 50,
      component: { default: e89b834014769f19484ff05a9c4b21e8d }
    },
    efb63de35b236e64b3767bb9cfbcdaa48: {
      id: 'efb63de35b236e64b3767bb9cfbcdaa48',
      sortOrder: 500,
      component: { default: efb63de35b236e64b3767bb9cfbcdaa48 }
    }
  },
  quickLinks: {
    ee7c7ae3a6a31403ad708538815788ded: {
      id: 'ee7c7ae3a6a31403ad708538815788ded',
      sortOrder: 20,
      component: { default: ee7c7ae3a6a31403ad708538815788ded }
    },
    ea24892d34754e495a40d75768cd1a34f: {
      id: 'ea24892d34754e495a40d75768cd1a34f',
      sortOrder: 30,
      component: { default: ea24892d34754e495a40d75768cd1a34f }
    }
  },
  settingPageMenu: {
    e641dc257c2849b262cbade107935b1e1: {
      id: 'e641dc257c2849b262cbade107935b1e1',
      sortOrder: 15,
      component: { default: e641dc257c2849b262cbade107935b1e1 }
    },
    e82d7aa3a197b6edcbad7f9b82800a888: {
      id: 'e82d7aa3a197b6edcbad7f9b82800a888',
      sortOrder: 10,
      component: { default: e82d7aa3a197b6edcbad7f9b82800a888 }
    },
    eaf2910ea372f061209536e2ec5ea8eeb: {
      id: 'eaf2910ea372f061209536e2ec5ea8eeb',
      sortOrder: 5,
      component: { default: eaf2910ea372f061209536e2ec5ea8eeb }
    },
    ee3915e2878f103e35efdf3ee6223b9f3: {
      id: 'ee3915e2878f103e35efdf3ee6223b9f3',
      sortOrder: 20,
      component: { default: ee3915e2878f103e35efdf3ee6223b9f3 }
    }
  },
  footerLeft: {
    edc7cc76ef2604ccf3ff4ee3554bb1fb6: {
      id: 'edc7cc76ef2604ccf3ff4ee3554bb1fb6',
      sortOrder: 10,
      component: { default: edc7cc76ef2604ccf3ff4ee3554bb1fb6 }
    },
    e8c1069946cbc13a9e89bc67a94ebc220: {
      id: 'e8c1069946cbc13a9e89bc67a94ebc220',
      sortOrder: 20,
      component: { default: e8c1069946cbc13a9e89bc67a94ebc220 }
    }
  },
  adminNavigation: {
    e50fa6a681d52ead55063b9bb8ed5e596: {
      id: 'e50fa6a681d52ead55063b9bb8ed5e596',
      sortOrder: 10,
      component: { default: e50fa6a681d52ead55063b9bb8ed5e596 }
    }
  },
  content: {
    e92ed67e60eba7bcc40b84e6e35958f33: {
      id: 'e92ed67e60eba7bcc40b84e6e35958f33',
      sortOrder: 10,
      component: { default: e92ed67e60eba7bcc40b84e6e35958f33 }
    },
    e9364c1dcff32c3fca155f9b63ee74f19: {
      id: 'e9364c1dcff32c3fca155f9b63ee74f19',
      sortOrder: 5,
      component: { default: e9364c1dcff32c3fca155f9b63ee74f19 }
    }
  },
  leftSide: {
    e279f8848eb189f874d805e6087c30263: {
      id: 'e279f8848eb189f874d805e6087c30263',
      sortOrder: 20,
      component: { default: e279f8848eb189f874d805e6087c30263 }
    },
    e215dfb1aa9831cb0b2d9a663c3d3252b: {
      id: 'e215dfb1aa9831cb0b2d9a663c3d3252b',
      sortOrder: 10,
      component: { default: e215dfb1aa9831cb0b2d9a663c3d3252b }
    }
  },
  rightSide: {
    e48a771efbbc844c2c177553e8367ddfc: {
      id: 'e48a771efbbc844c2c177553e8367ddfc',
      sortOrder: 10,
      component: { default: e48a771efbbc844c2c177553e8367ddfc }
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: { default: collection_products }
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: { default: text_block }
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: { default: basic_menu }
    },
    banner: {
      id: 'banner',
      sortOrder: 0,
      component: { default: banner }
    },
    simple_slider: {
      id: 'simple_slider',
      sortOrder: 0,
      component: { default: simple_slider }
    }
  }
} 
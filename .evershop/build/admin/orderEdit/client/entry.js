
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateAdmin} from '@evershop/evershop/components/common';
      
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
import e20eb09ba0faf4d65e7936510c2f36cfc from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cod/pages/admin/orderEdit/CaptureButton.js';
import eccde414bc67b1c1ea4f07f7bce4f729e from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import e1f474153af26f92f05ea1563a755a379 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import e17294aea63beb2ab412eb3559466aceb from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Activities.js';
import e8d0de68724a45c2bb79c00dfd7782e46 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/AddTrackingButton.js';
import eff962c485bc99c54aeb0069bf55608de from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/CancelButton.js';
import ec50f8b1732461d2112b09cec9ea9e827 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Customer.js';
import eb5043948ee2902ff00558accb94f3216 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/CustomerNotes.js';
import e5f5e5c0346e0aecd4bdd1d75db41eb23 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Items.js';
import e65e472f953d1756ff88c281e2f2db0b3 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Layout.js';
import ee82e738ff09aea319883ec204278e756 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/MarkDeliveredButton.js';
import ecceb444e595d3f3b1ad8e147d0577f63 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/PageHeading.js';
import e47e09a45d5f62ddcfc75cf66852e7951 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Payment.js';
import e299d9218413889504d1c900bced83987 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/ShipButton.js';
import ecdff7cadfe66965c3daef2983bb07e77 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Status.js';
import e78b7ddecf15a56cc11bc77cde475695d from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/TrackingButton.js';
import e7c626ec5ad0867004d57a1b20c49b73c from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/paypal/pages/admin/orderEdit/PaypalCaptureButton.js';
import e89b834014769f19484ff05a9c4b21e8d from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import ea24892d34754e495a40d75768cd1a34f from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import e82d7aa3a197b6edcbad7f9b82800a888 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import efb63de35b236e64b3767bb9cfbcdaa48 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import eaf2910ea372f061209536e2ec5ea8eeb from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
import ef60ca8900cfc7ce014a9c59d1beb762b from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/stripe/pages/admin/orderEdit/StripeCaptureButton.js';
import e66806480e78269a45811b217be83546e from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/stripe/pages/admin/orderEdit/StripeRefundButton.js';
import ee3915e2878f103e35efdf3ee6223b9f3 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/tax/pages/admin/all/TaxSettingMenu.js';
import collection_products from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/catalog/components/CollectionProductsSetting.js';
import text_block from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/components/TextBlockSetting.js';
import basic_menu from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/components/BasicMenuSetting.js';
import banner from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/components/BannerSetting.js';
import simple_slider from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/components/SlideshowSetting.js';
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
  orderPaymentActions: {
    e20eb09ba0faf4d65e7936510c2f36cfc: {
      id: 'e20eb09ba0faf4d65e7936510c2f36cfc',
      sortOrder: 10,
      component: { default: e20eb09ba0faf4d65e7936510c2f36cfc }
    },
    e7c626ec5ad0867004d57a1b20c49b73c: {
      id: 'e7c626ec5ad0867004d57a1b20c49b73c',
      sortOrder: 10,
      component: { default: e7c626ec5ad0867004d57a1b20c49b73c }
    },
    ef60ca8900cfc7ce014a9c59d1beb762b: {
      id: 'ef60ca8900cfc7ce014a9c59d1beb762b',
      sortOrder: 10,
      component: { default: ef60ca8900cfc7ce014a9c59d1beb762b }
    },
    e66806480e78269a45811b217be83546e: {
      id: 'e66806480e78269a45811b217be83546e',
      sortOrder: 10,
      component: { default: e66806480e78269a45811b217be83546e }
    }
  },
  leftSide: {
    e17294aea63beb2ab412eb3559466aceb: {
      id: 'e17294aea63beb2ab412eb3559466aceb',
      sortOrder: 30,
      component: { default: e17294aea63beb2ab412eb3559466aceb }
    },
    e5f5e5c0346e0aecd4bdd1d75db41eb23: {
      id: 'e5f5e5c0346e0aecd4bdd1d75db41eb23',
      sortOrder: 10,
      component: { default: e5f5e5c0346e0aecd4bdd1d75db41eb23 }
    },
    e47e09a45d5f62ddcfc75cf66852e7951: {
      id: 'e47e09a45d5f62ddcfc75cf66852e7951',
      sortOrder: 20,
      component: { default: e47e09a45d5f62ddcfc75cf66852e7951 }
    }
  },
  order_actions: {
    e8d0de68724a45c2bb79c00dfd7782e46: {
      id: 'e8d0de68724a45c2bb79c00dfd7782e46',
      sortOrder: 5,
      component: { default: e8d0de68724a45c2bb79c00dfd7782e46 }
    },
    ee82e738ff09aea319883ec204278e756: {
      id: 'ee82e738ff09aea319883ec204278e756',
      sortOrder: 10,
      component: { default: ee82e738ff09aea319883ec204278e756 }
    },
    e299d9218413889504d1c900bced83987: {
      id: 'e299d9218413889504d1c900bced83987',
      sortOrder: 10,
      component: { default: e299d9218413889504d1c900bced83987 }
    },
    e78b7ddecf15a56cc11bc77cde475695d: {
      id: 'e78b7ddecf15a56cc11bc77cde475695d',
      sortOrder: 15,
      component: { default: e78b7ddecf15a56cc11bc77cde475695d }
    }
  },
  pageHeadingRight: {
    eff962c485bc99c54aeb0069bf55608de: {
      id: 'eff962c485bc99c54aeb0069bf55608de',
      sortOrder: 35,
      component: { default: eff962c485bc99c54aeb0069bf55608de }
    }
  },
  rightSide: {
    ec50f8b1732461d2112b09cec9ea9e827: {
      id: 'ec50f8b1732461d2112b09cec9ea9e827',
      sortOrder: 15,
      component: { default: ec50f8b1732461d2112b09cec9ea9e827 }
    },
    eb5043948ee2902ff00558accb94f3216: {
      id: 'eb5043948ee2902ff00558accb94f3216',
      sortOrder: 10,
      component: { default: eb5043948ee2902ff00558accb94f3216 }
    }
  },
  content: {
    e65e472f953d1756ff88c281e2f2db0b3: {
      id: 'e65e472f953d1756ff88c281e2f2db0b3',
      sortOrder: 10,
      component: { default: e65e472f953d1756ff88c281e2f2db0b3 }
    },
    ecceb444e595d3f3b1ad8e147d0577f63: {
      id: 'ecceb444e595d3f3b1ad8e147d0577f63',
      sortOrder: 5,
      component: { default: ecceb444e595d3f3b1ad8e147d0577f63 }
    }
  },
  pageHeadingLeft: {
    ecdff7cadfe66965c3daef2983bb07e77: {
      id: 'ecdff7cadfe66965c3daef2983bb07e77',
      sortOrder: 200,
      component: { default: ecdff7cadfe66965c3daef2983bb07e77 }
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
ReactDOM.hydrate(
        React.createElement(HydrateAdmin, null),
        document.getElementById('app')
      );
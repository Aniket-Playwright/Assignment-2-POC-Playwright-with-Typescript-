
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateFrontStore} from '@evershop/evershop/components/common';
      
import ed212d73f71fec8ea82bcb5bc4019ef42 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/Base.js';
import e0160d060559bb318180aacd3110320b7 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/Breadcrumb.js';
import e39ac1377914e465aa3ba0b85b7b65b51 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/GlobalCss.js';
import e4f6b4f4e880a01e2bc6720e76dc35dda from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/HeadTags.js';
import e4e6d96402bda7d15e820aa31cdd07219 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/Logo.js';
import eec4ef6b95f195595d9582227e6893007 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/Notification.js';
import e40ddad51de371d54f41c77a5bcbaa112 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/all/SearchBox.js';
import ed10bd39c46a7b994f4dd36ebeb8014a0 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/all/MiniCartIcon.js';
import ec3e4422fb7e73dd723e4e6ba64efde21 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/all/CustomerIcon.js';
import e59e3db5ba61c104efeb1f052c6b7b9c8 from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/login/LoginPage.js';
import collection_products from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/catalog/components/CollectionProducts.js';
import text_block from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/components/TextBlock.js';
import basic_menu from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/components/BasicMenu.js';
import banner from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/components/Banner.js';
import simple_slider from 'file:///D:/Automation_Playwright/Evershop_Assi02/node_modules/@evershop/evershop/dist/modules/cms/components/Slideshow.js';
Area.defaultProps.components = {
  body: {
    ed212d73f71fec8ea82bcb5bc4019ef42: {
      id: 'ed212d73f71fec8ea82bcb5bc4019ef42',
      sortOrder: 1,
      component: { default: ed212d73f71fec8ea82bcb5bc4019ef42 }
    },
    eec4ef6b95f195595d9582227e6893007: {
      id: 'eec4ef6b95f195595d9582227e6893007',
      sortOrder: 10,
      component: { default: eec4ef6b95f195595d9582227e6893007 }
    }
  },
  content: {
    e0160d060559bb318180aacd3110320b7: {
      id: 'e0160d060559bb318180aacd3110320b7',
      sortOrder: 0,
      component: { default: e0160d060559bb318180aacd3110320b7 }
    },
    e59e3db5ba61c104efeb1f052c6b7b9c8: {
      id: 'e59e3db5ba61c104efeb1f052c6b7b9c8',
      sortOrder: 10,
      component: { default: e59e3db5ba61c104efeb1f052c6b7b9c8 }
    }
  },
  head: {
    e39ac1377914e465aa3ba0b85b7b65b51: {
      id: 'e39ac1377914e465aa3ba0b85b7b65b51',
      sortOrder: 5,
      component: { default: e39ac1377914e465aa3ba0b85b7b65b51 }
    },
    e4f6b4f4e880a01e2bc6720e76dc35dda: {
      id: 'e4f6b4f4e880a01e2bc6720e76dc35dda',
      sortOrder: 5,
      component: { default: e4f6b4f4e880a01e2bc6720e76dc35dda }
    }
  },
  headerMiddleCenter: {
    e4e6d96402bda7d15e820aa31cdd07219: {
      id: 'e4e6d96402bda7d15e820aa31cdd07219',
      sortOrder: 10,
      component: { default: e4e6d96402bda7d15e820aa31cdd07219 }
    }
  },
  headerMiddleRight: {
    e40ddad51de371d54f41c77a5bcbaa112: {
      id: 'e40ddad51de371d54f41c77a5bcbaa112',
      sortOrder: 5,
      component: { default: e40ddad51de371d54f41c77a5bcbaa112 }
    },
    ed10bd39c46a7b994f4dd36ebeb8014a0: {
      id: 'ed10bd39c46a7b994f4dd36ebeb8014a0',
      sortOrder: 20,
      component: { default: ed10bd39c46a7b994f4dd36ebeb8014a0 }
    },
    ec3e4422fb7e73dd723e4e6ba64efde21: {
      id: 'ec3e4422fb7e73dd723e4e6ba64efde21',
      sortOrder: 10,
      component: { default: ec3e4422fb7e73dd723e4e6ba64efde21 }
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
        React.createElement(HydrateFrontStore, null),
        document.getElementById('app')
      );
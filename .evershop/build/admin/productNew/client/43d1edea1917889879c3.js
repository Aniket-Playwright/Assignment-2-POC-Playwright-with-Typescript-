/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 38625:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
// EXTERNAL MODULE: ./node_modules/immer/dist/immer.mjs
var immer = __webpack_require__(1932);
;// ./node_modules/@evershop/evershop/dist/components/common/context/app.js


const AppStateContext = react.createContext({});
const AppContextDispatch = react.createContext({});
function app_AppProvider({ value, children }) {
    const [data, setData] = react.useState(value);
    const [fetching, setFetching] = react.useState(false);
    const fetchPageData = async (url) => {
        setFetching(true);
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const dataResponse = await response.json();
            // Update the entire context using immer
            setData((0,immer/* produce */.jM)(data, (draft) => {
                Object.assign(draft, dataResponse.eContext);
                return draft;
            }));
        }
        catch (error) {
        }
        finally {
            setFetching(false);
        }
    };
    react.useEffect(() => {
        window.onpopstate = async () => {
            // Get the current url
            const url = new URL(window.location.href, window.location.origin);
            url.searchParams.append('ajax', 'true');
            await fetchPageData(url.toString());
        };
    }, []);
    const contextDispatchValue = (0,react.useMemo)(() => ({ setData, fetchPageData }), [setData, fetchPageData]);
    const contextValue = (0,react.useMemo)(() => ({ ...data, fetching }), [data, fetching]);
    return (react.createElement(AppContextDispatch.Provider, { value: contextDispatchValue },
        react.createElement(AppStateContext.Provider, { value: contextValue }, children)));
}
const useAppState = () => react.useContext(AppStateContext);
const useAppDispatch = () => React.useContext(AppContextDispatch);
//# sourceMappingURL=app.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/Area.js


function Area_Area(props) {
    const context = useAppState();
    const { id, coreComponents, wrapperProps, noOuter, wrapper, className, components } = props;
    const areaComponents = (() => {
        const areaCoreComponents = coreComponents || [];
        const widgets = context.widgets || [];
        const wildCardWidgets = (components === null || components === void 0 ? void 0 : components['*']) || {};
        const assignedWidgets = [];
        widgets.forEach((widget) => {
            const w = wildCardWidgets[widget.type];
            if (widget.areaId.includes(id) && w !== undefined) {
                assignedWidgets.push({
                    id: widget.id,
                    sortOrder: widget.sortOrder,
                    props: widget.props,
                    component: w.component
                });
            }
        });
        const cs = (components === null || components === void 0 ? void 0 : components[id]) === undefined
            ? areaCoreComponents.concat(assignedWidgets)
            : areaCoreComponents
                .concat(Object.values(components[id]))
                .concat(assignedWidgets);
        return cs.sort((obj1, obj2) => (obj1.sortOrder || 0) - (obj2.sortOrder || 0));
    })();
    const { propsMap } = context;
    let WrapperComponent = react.Fragment;
    if (noOuter !== true) {
        if (wrapper !== undefined) {
            WrapperComponent = wrapper;
        }
        else {
            WrapperComponent = 'div';
        }
    }
    let areaWrapperProps = {};
    if (noOuter === true) {
        areaWrapperProps = {};
    }
    else if (typeof wrapperProps === 'object' && wrapperProps !== null) {
        areaWrapperProps = { className: className || '', ...wrapperProps };
    }
    else {
        areaWrapperProps = { className: className || '' };
    }
    return (react.createElement(WrapperComponent, { ...areaWrapperProps }, areaComponents.map((w, index) => {
        const C = w.component.default;
        const { id } = w;
        const propsData = context.graphqlResponse;
        const propKeys = id !== undefined ? propsMap[id] || [] : [];
        const componentProps = propKeys.reduce((acc, map) => {
            const { origin, alias } = map;
            acc[origin] = propsData[alias];
            return acc;
        }, {});
        if (w.props) {
            Object.assign(componentProps, w.props);
        }
        // Check if C is a React component
        if (react.isValidElement(C)) {
            return react.createElement(react.Fragment, { key: index }, C);
        }
        if (typeof C === 'string') {
            return react.createElement(C, { key: index, ...componentProps });
        }
        return typeof C === 'function' ? (react.createElement(C, { key: index, areaProps: props, ...componentProps })) : null;
    })));
}
Area_Area.defaultProps = {
    className: undefined,
    coreComponents: [],
    noOuter: false,
    wrapper: 'div',
    wrapperProps: {}
};

/* harmony default export */ const common_Area = (Area_Area);
//# sourceMappingURL=Area.js.map
// EXTERNAL MODULE: ./node_modules/@urql/core/dist/urql-core.mjs
var urql_core = __webpack_require__(8714);
;// ./node_modules/@evershop/evershop/dist/components/common/Button.js


const Button = ({ title, outline = false, variant = 'primary', onAction, url = undefined, isLoading = false, type = 'button', className: _className = '' }) => {
    const className = ['button', variant];
    if (outline === true)
        className.push('outline');
    if (isLoading === true)
        className.push('loading');
    if (_className)
        className.push(_className);
    const onActionFunc = (e) => {
        e.preventDefault();
        if (isLoading === true)
            return;
        onAction && onAction();
    };
    if (!url) {
        return (react.createElement("button", { type: type, onClick: (e) => {
                if (type !== 'submit') {
                    e.preventDefault();
                    onActionFunc(e);
                }
                else {
                    e.stopPropagation();
                }
            }, className: className.join(' ') },
            react.createElement("span", null, title),
            isLoading === true && (react.createElement("svg", { style: {
                    background: 'rgb(255, 255, 255, 0)',
                    display: 'block',
                    shapeRendering: 'auto'
                }, width: "2rem", height: "2rem", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" },
                react.createElement("circle", { cx: "50", cy: "50", fill: "none", stroke: "#5c5f62", strokeWidth: "10", r: "43", strokeDasharray: "202.63272615654165 69.54424205218055" },
                    react.createElement("animateTransform", { attributeName: "transform", type: "rotate", repeatCount: "indefinite", dur: "1s", values: "0 50 50;360 50 50", keyTimes: "0;1" }))))));
    }
    else {
        return (react.createElement("a", { href: url, className: className.join(' ') },
            react.createElement("span", null, title)));
    }
};
/* harmony default export */ const common_Button = (Button);
//# sourceMappingURL=Button.js.map
;// ./node_modules/@evershop/evershop/dist/lib/util/assign.js
/**
 * This function take 2 objects and merge the second one to the first one
 *
 * @param   {object}  object  The main object
 * @param   {object}  data    The object to be merged
 *
 */
function assign_assign(object, data) {
    if (typeof object !== 'object' || object === null) {
        throw new Error('`object` must be an object');
    }
    if (typeof data !== 'object' || data === null) {
        throw new Error('`data` must be an object');
    }
    Object.keys(data).forEach((key) => {
        if (data[key] &&
            data[key].constructor === Array &&
            object[key] &&
            object[key].constructor === Array) {
            object[key] = object[key].concat(data[key]);
        }
        else if (typeof object[key] !== 'object' ||
            typeof data[key] !== 'object' ||
            object[key] === null) {
            object[key] = data[key];
        }
        else {
            assign_assign(object[key], data[key]);
        }
    });
}
//# sourceMappingURL=assign.js.map
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// ./node_modules/@evershop/evershop/dist/components/admin/Card.js


function Card({ title, actions = [], subdued = false, children }) {
    return (react.createElement("div", { className: subdued ? 'card shadow subdued' : 'card shadow' },
        (title || actions.length > 0) && (react.createElement("div", { className: "flex justify-between card-header" },
            title && react.createElement("h2", { className: "card-title" }, title),
            actions.length > 0 && (react.createElement("div", { className: "flex space-x-2" }, actions.map((action, index) => {
                const className = {
                    primary: 'text-primary',
                    critical: 'text-critical',
                    interactive: 'text-interactive',
                    secondary: 'text-secondary'
                };
                return (react.createElement("div", { key: index, className: "card-action" },
                    react.createElement("a", { href: "#", onClick: (e) => {
                            e.preventDefault();
                            if (action.onAction)
                                action.onAction.call(null);
                        }, className: className[action.variant ? action.variant : 'interactive'] }, action.name)));
            }))))),
        children));
}
Card.defaultProps = {
    actions: [],
    subdued: false,
    title: ''
};
const Session = function Session({ actions = [], title, children }) {
    return (react.createElement("div", { className: "card-section border-b box-border" },
        (title || actions.length > 0) && (react.createElement("div", { className: "flex justify-between card-section-header mb-2" },
            title && react.createElement("h3", { className: "card-session-title" }, title),
            actions.length > 0 && (react.createElement("div", { className: "flex space-x-2" }, actions.map((action, index) => {
                const className = {
                    primary: 'text-primary',
                    critical: 'text-critical',
                    interactive: 'text-interactive',
                    secondary: 'text-secondary'
                };
                return (react.createElement("div", { key: index, className: "card-action" },
                    react.createElement("a", { href: "#", onClick: (e) => {
                            e.preventDefault();
                            if (action.onAction)
                                action.onAction.call(null);
                        }, className: className[action.variant ? action.variant : 'interactive'] }, action.name)));
            }))))),
        react.createElement("div", { className: "card-session-content pt-lg" }, children)));
};
Session.defaultProps = {
    actions: [],
    title: '',
    children: null
};
Card.Session = Session;

//# sourceMappingURL=Card.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/modal/Alert.js








const AlertContext = react.createContext();
const useAlertContext = () => React.useContext(AlertContext);
function reducer(state, action) {
    switch (action.type) {
        case 'close':
            return { ...state, showing: false, closing: false };
        case 'closing':
            return { ...state, showing: true, closing: true };
        case 'open':
            return { ...state, showing: true, closing: false };
        default:
            throw new Error();
    }
}
const alertReducer = (0,immer/* produce */.jM)((draff, action) => {
    switch (action.type) {
        case 'open':
            draff = { ...action.payload };
            return draff;
        case 'remove':
            return {};
        case 'update':
            assign_assign(draff, action.payload);
            return draff;
        default:
            throw new Error();
    }
});
function Alert_Alert({ children }) {
    const [alert, dispatchAlert] = (0,react.useReducer)(alertReducer, {});
    const [state, dispatch] = (0,react.useReducer)(reducer, {
        showing: false,
        closing: false
    });
    const openAlert = ({ heading, content, primaryAction, secondaryAction }) => {
        dispatchAlert({
            type: 'open',
            payload: {
                heading,
                content,
                primaryAction,
                secondaryAction
            }
        });
        dispatch({ type: 'open' });
    };
    return (react.createElement(AlertContext.Provider, { value: {
            dispatchAlert,
            openAlert,
            closeAlert: () => dispatch({ type: 'closing' })
        } },
        children,
        state.showing === true &&
            react_dom.createPortal(react.createElement("div", { className: state.closing === false
                    ? 'modal-overlay fadeIn'
                    : 'modal-overlay fadeOut', onAnimationEnd: () => {
                    if (state.closing) {
                        dispatch({ type: 'close' });
                        dispatchAlert({ type: 'remove' });
                    }
                } },
                react.createElement("div", { key: state.key, className: "modal-wrapper flex self-center justify-center", "aria-modal": true, "aria-hidden": true, tabIndex: -1, role: "dialog" },
                    react.createElement("div", { className: "modal" },
                        react.createElement("button", { type: "button", className: "modal-close-button text-icon", onClick: () => dispatch({ type: 'closing' }) },
                            react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.5rem", className: "w-6 h-6", viewBox: "0 0 20 20", fill: "currentColor" },
                                react.createElement("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }))),
                        react.createElement(Card, { title: alert.heading },
                            react.createElement(Card.Session, null, alert.content),
                            (alert.primaryAction !== undefined ||
                                alert.secondaryAction !== undefined) && (react.createElement(Card.Session, null,
                                react.createElement("div", { className: "flex justify-end space-x-2" },
                                    alert.primaryAction && (react.createElement(common_Button, { ...alert.primaryAction })),
                                    alert.secondaryAction && (react.createElement(common_Button, { ...alert.secondaryAction }))))))))), document.body)));
}
Alert_Alert.propTypes = {
    children: prop_types.node.isRequired
};

//# sourceMappingURL=Alert.js.map
// EXTERNAL MODULE: ./node_modules/urql/dist/urql.es.js
var urql_es = __webpack_require__(57496);
;// ./node_modules/@evershop/evershop/dist/components/common/react/client/Hydrate.js





function Hydrate_Hydrate({ client }) {
    return (react.createElement(urql_es/* Provider */.Kq, { value: client },
        react.createElement(app_AppProvider, { value: window.eContext },
            react.createElement(Alert_Alert, null,
                react.createElement(common_Area, { id: "body", className: "wrapper" })))));
}
//# sourceMappingURL=Hydrate.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/react/client/HydrateAdmin.js



const client = (0,urql_core/* createClient */.UU)({
    url: '/api/admin/graphql'
});
function HydrateAdmin() {
    return react.createElement(Hydrate_Hydrate, { client: client });
}
//# sourceMappingURL=HydrateAdmin.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/react/client/HydrateFrontStore.js



const HydrateFrontStore_client = (0,urql_core/* createClient */.UU)({
    url: '/api/graphql'
});
function HydrateFrontStore() {
    return React.createElement(Hydrate, { client: HydrateFrontStore_client });
}
//# sourceMappingURL=HydrateFrontStore.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/react/server/Server.js



function Server_ServerHtml({ css, js, appContext }) {
    return (React.createElement(React.Fragment, null,
        React.createElement("head", null,
            React.createElement("meta", { charSet: "utf-8" }),
            React.createElement("script", { dangerouslySetInnerHTML: { __html: appContext } }),
            css.map((source, index) => (React.createElement("style", { key: index, dangerouslySetInnerHTML: { __html: source } }))),
            React.createElement(Area, { noOuter: true, id: "head" })),
        React.createElement("body", { id: "body" },
            React.createElement("div", { id: "app", className: "bg-background" },
                React.createElement(Alert, null,
                    React.createElement(Area, { id: "body", className: "wrapper" }))),
            js.map((src, index) => (React.createElement("script", { src: src, key: index }))))));
}
/* harmony default export */ const Server = ((/* unused pure expression or super */ null && (Server_ServerHtml)));
//# sourceMappingURL=Server.js.map
// EXTERNAL MODULE: ./node_modules/react-dom/server.browser.js
var server_browser = __webpack_require__(65848);
;// ./node_modules/@evershop/evershop/dist/components/common/react/server/render.js




function renderHtml(js, css, contextData, langeCode) {
    const source = renderToString(React.createElement(AppProvider, { value: JSON.parse(contextData) },
        React.createElement(ServerHtml, { js: js, css: css, appContext: `var eContext = ${contextData}` })));
    return `<!DOCTYPE html><html id="root" lang="${langeCode}">${source}</html>`;
}

//# sourceMappingURL=render.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/index.js








/* harmony default export */ const common = ((/* unused pure expression or super */ null && (Area)));
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.js + 5 modules
var react_toastify_esm = __webpack_require__(13269);
;// ./node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js




function AdminUser({ adminUser, logoutUrl, loginPage }) {
    const [showLogout, setShowLogout] = react.useState(false);
    const show = (e) => {
        e.preventDefault();
        setShowLogout(!showLogout);
    };
    const logout = async () => {
        const response = await fetch(logoutUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200) {
            window.location.href = loginPage;
        }
        else {
            react_toastify_esm/* toast */.oR.error('Logout failed');
        }
    };
    if (!adminUser) {
        return null;
    }
    const { fullName } = adminUser;
    return (react.createElement("div", { className: "admin-user flex flex-grow justify-end items-center" },
        react.createElement("div", { className: "flex justify-items-start gap-2 justify-center" },
            react.createElement("div", { className: "relative" },
                react.createElement("a", { className: "first-letter", href: "#", onClick: (e) => show(e) }, fullName[0]),
                showLogout && (react.createElement("div", { className: "logout bg-background shadow p-5" },
                    react.createElement("div", null,
                        react.createElement("div", null,
                            "Hello ",
                            react.createElement("span", { className: "text-primary" },
                                fullName,
                                "!")),
                        react.createElement("div", { className: "mt-2" },
                            react.createElement("a", { className: "text-critical", href: "#", onClick: (e) => {
                                    e.preventDefault();
                                    logout();
                                } }, "Logout")))))))));
}
AdminUser.propTypes = {
    adminUser: prop_types_default().shape({
        email: (prop_types_default()).string.isRequired,
        fullName: (prop_types_default()).string.isRequired
    }),
    loginPage: (prop_types_default()).string.isRequired,
    logoutUrl: (prop_types_default()).string.isRequired
};
AdminUser.defaultProps = {
    adminUser: null
};
const layout = {
    areaId: 'header',
    sortOrder: 50
};
const query = (/* unused pure expression or super */ null && (`
  query Query {
    adminUser: currentAdminUser {
      adminUserId
      fullName
      email
    },
    logoutUrl: url(routeId: "adminLogoutJson"),
    loginPage: url(routeId: "adminLogin")
  }
`));
//# sourceMappingURL=AdminUser.js.map
;// ./node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/GlobalCss.js

function GlobalCss() {
    return null;
}
const GlobalCss_layout = {
    areaId: 'head',
    sortOrder: 5
};
//# sourceMappingURL=GlobalCss.js.map
;// ./node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/Layout.js


function AdminLayout() {
    return (react.createElement(react.Fragment, null,
        react.createElement("div", { className: "header" },
            react.createElement(common_Area, { id: "header", noOuter: true })),
        react.createElement("div", { className: "content-wrapper" },
            react.createElement("div", { className: "admin-navigation" },
                react.createElement(common_Area, { id: "adminNavigation", noOuter: true })),
            react.createElement("div", { className: "main-content" },
                react.createElement(common_Area, { id: "content", className: "main-content-inner" }),
                react.createElement("div", { className: "footer flex justify-between" },
                    react.createElement(common_Area, { id: "footerLeft", className: "footer-left" }),
                    react.createElement(common_Area, { id: "footerRight", className: "footer-right" }))))));
}
const Layout_layout = {
    areaId: 'body',
    sortOrder: 10
};
//# sourceMappingURL=Layout.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/Meta.js
/* eslint-disable no-console */

const VALID_HTTP_EQUIV = (/* unused pure expression or super */ null && ([
    'content-type',
    'default-style',
    'refresh',
    'x-ua-compatible',
    'content-security-policy'
]));
const REQUIRED_CONTENT_ATTRIBUTES = (/* unused pure expression or super */ null && ([
    'name',
    'property',
    'itemProp',
    'httpEquiv'
]));
function validateMetaProps(props) {
    const errors = [];
    const hasIdentifier = [
        'name',
        'property',
        'itemProp',
        'httpEquiv',
        'charset'
    ].some((attr) => props[attr] !== undefined);
    if (!hasIdentifier) {
        errors.push('Meta tag must have at least one identifier attribute (name, property, itemProp, httpEquiv, or charset)');
    }
    if (props.charset && props.charset.toLowerCase() !== 'utf-8') {
        errors.push('charset attribute must be "utf-8" for HTML5 documents');
    }
    if (props.itemProp && (props.name || props.httpEquiv || props.charset)) {
        errors.push('itemProp attribute cannot be used with name, http-equiv, or charset attributes');
    }
    const needsContent = REQUIRED_CONTENT_ATTRIBUTES.some((attr) => props[attr] !== undefined);
    if (needsContent && !props.content) {
        errors.push('Meta tag with name, property, itemProp, or httpEquiv must have content attribute');
    }
    if (props.media && props.name !== 'theme-color') {
        errors.push('media attribute is only valid when name="theme-color"');
    }
    if (props.httpEquiv && !VALID_HTTP_EQUIV.includes(props.httpEquiv)) {
        errors.push(`Invalid httpEquiv value: ${props.httpEquiv}. Valid values: ${VALID_HTTP_EQUIV.join(', ')}`);
    }
    const identifierCount = ['name', 'property', 'itemProp'].filter((attr) => props[attr] !== undefined).length;
    if (identifierCount > 1) {
        errors.push('Meta tag cannot have multiple identifier attributes (name, property, itemProp)');
    }
    if (props.itemProp) {
        if (props.itemType && !props.itemType.startsWith('http')) {
            errors.push('itemType should be a valid URL (typically schema.org URL)');
        }
    }
    return {
        isValid: errors.length === 0,
        errors
    };
}
function sanitizeMetaProps(props) {
    const allowedAttributes = [
        'charset',
        'name',
        'content',
        'httpEquiv',
        'property',
        'itemProp',
        'itemType',
        'itemId',
        'lang',
        'scheme',
        'media'
    ];
    return Object.keys(props)
        .filter((key) => allowedAttributes.includes(key) &&
        props[key] !== undefined &&
        props[key] !== null)
        .reduce((obj, key) => {
        obj[key] = String(props[key]).trim();
        return obj;
    }, {});
}
function Meta(props) {
    if (false) // removed by dead control flow
{}
    const sanitizedProps = sanitizeMetaProps(props);
    if (Object.keys(sanitizedProps).length === 0) {
        if (false) // removed by dead control flow
{}
        return null;
    }
    return react.createElement("meta", { ...sanitizedProps });
}
function MetaCharset({ charset = 'utf-8' } = {}) {
    return React.createElement(Meta, { charset: charset });
}
function MetaDescription({ description }) {
    return React.createElement(Meta, { name: "description", content: description });
}
function MetaKeywords({ keywords }) {
    const keywordString = Array.isArray(keywords)
        ? keywords.join(', ')
        : keywords;
    return React.createElement(Meta, { name: "keywords", content: keywordString });
}
function MetaAuthor({ author }) {
    return React.createElement(Meta, { name: "author", content: author });
}
function MetaThemeColor({ color, media }) {
    return React.createElement(Meta, { name: "theme-color", content: color, media: media });
}
function MetaViewport({ width = 'device-width', initialScale = 1, maximumScale, userScalable = true }) {
    const parts = [`width=${width}`, `initial-scale=${initialScale}`];
    if (maximumScale !== undefined) {
        parts.push(`maximum-scale=${maximumScale}`);
    }
    if (!userScalable) {
        parts.push('user-scalable=no');
    }
    return React.createElement(Meta, { name: "viewport", content: parts.join(', ') });
}
function MetaHttpEquiv({ httpEquiv, content }) {
    return React.createElement(Meta, { httpEquiv: httpEquiv, content: content });
}
function MetaOpenGraph({ type, title, description, image, url, siteName }) {
    return (React.createElement(React.Fragment, null,
        type && React.createElement(Meta, { property: "og:type", content: type }),
        title && React.createElement(Meta, { property: "og:title", content: title }),
        description && React.createElement(Meta, { property: "og:description", content: description }),
        image && React.createElement(Meta, { property: "og:image", content: image }),
        url && React.createElement(Meta, { property: "og:url", content: url }),
        siteName && React.createElement(Meta, { property: "og:site_name", content: siteName })));
}
function MetaTwitterCard({ card = 'summary', site, creator, title, description, image }) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Meta, { name: "twitter:card", content: card }),
        site && React.createElement(Meta, { name: "twitter:site", content: site }),
        creator && React.createElement(Meta, { name: "twitter:creator", content: creator }),
        title && React.createElement(Meta, { name: "twitter:title", content: title }),
        description && React.createElement(Meta, { name: "twitter:description", content: description }),
        image && React.createElement(Meta, { name: "twitter:image", content: image })));
}
function MetaRobots({ index = true, follow = true, noarchive = false, nosnippet = false }) {
    const directives = [
        index ? 'index' : 'noindex',
        follow ? 'follow' : 'nofollow'
    ];
    if (noarchive)
        directives.push('noarchive');
    if (nosnippet)
        directives.push('nosnippet');
    return React.createElement(Meta, { name: "robots", content: directives.join(', ') });
}
//# sourceMappingURL=Meta.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/Title.js
/* eslint-disable no-console */

/**
 * Validates title content for SEO and accessibility best practices
 */
const validateTitle = (title, maxLength) => {
    if (false) // removed by dead control flow
{}
};
/**
 * Formats the complete title string with optional prefix/suffix
 */
const formatTitle = (title, prefix, suffix, separator = ' - ', maxLength) => {
    const parts = [];
    if (prefix)
        parts.push(prefix);
    parts.push(title);
    if (suffix)
        parts.push(suffix);
    let formattedTitle = parts.join(separator);
    // Truncate if needed
    if (maxLength && formattedTitle.length > maxLength) {
        // Try to truncate at word boundaries
        const truncated = formattedTitle.substring(0, maxLength - 3);
        const lastSpace = truncated.lastIndexOf(' ');
        if (lastSpace > formattedTitle.length * 0.7) {
            formattedTitle = truncated.substring(0, lastSpace) + '...';
        }
        else {
            formattedTitle = truncated + '...';
        }
    }
    return formattedTitle;
};
/**
 * Title component that renders an HTML <title> element with SEO and accessibility best practices.
 *
 * The title element is crucial for:
 * - SEO: Search engines use it as the clickable headline in search results
 * - Accessibility: Screen readers announce the page title when users navigate to the page
 * - User Experience: Displayed in browser tabs and bookmarks
 *
 * SEO Best Practices:
 * - Keep titles between 30-60 characters (55-60 optimal for Google)
 * - Make each page title unique within your site
 * - Put important keywords first
 * - Avoid keyword stuffing
 * - Use descriptive, readable titles that entice clicks
 *
 * @example
 * // Basic usage
 * <Title title="About Us" />
 *
 * @example
 * // With site branding
 * <Title
 *   title="Product Details"
 *   suffix="EverShop"
 *   separator=" | "
 * />
 *
 * @example
 * // E-commerce product page
 * <Title
 *   title="iPhone 14 Pro Max - 256GB Space Black"
 *   suffix="TechStore"
 *   maxLength={60}
 * />
 *
 * @example
 * // Blog post
 * <Title
 *   title="10 Tips for Better React Performance"
 *   suffix="Developer Blog"
 * />
 *
 * @example
 * // Error page
 * <Title
 *   title="Page Not Found (404)"
 *   suffix="EverShop"
 * />
 */
function Title({ title, prefix, suffix, separator = ' - ', maxLength, ...otherProps }) {
    // Format the complete title
    const formattedTitle = formatTitle(title, prefix, suffix, separator, maxLength);
    // Validate in development
    validateTitle(formattedTitle, maxLength);
    return react.createElement("title", { ...otherProps }, formattedTitle);
}
/**
 * Convenience component for product page titles
 */
function ProductTitle({ productName, category, brand, siteName, separator = ' - ', maxLength = 60, ...props }) {
    const titleParts = [productName];
    if (category)
        titleParts.push(category);
    if (brand)
        titleParts.push(brand);
    const title = titleParts.join(' ');
    return (React.createElement(Title, { title: title, suffix: siteName, separator: separator, maxLength: maxLength, ...props }));
}
/**
 * Convenience component for category/collection page titles
 */
function CategoryTitle({ categoryName, itemCount, siteName, separator = ' - ', maxLength = 60, ...props }) {
    let title = categoryName;
    if (itemCount !== undefined) {
        title += ` (${itemCount} items)`;
    }
    return (React.createElement(Title, { title: title, suffix: siteName, separator: separator, maxLength: maxLength, ...props }));
}
/**
 * Convenience component for error page titles
 */
function ErrorTitle({ errorCode, errorMessage, siteName, separator = ' - ', ...props }) {
    const title = errorMessage
        ? `${errorMessage} (${errorCode})`
        : `Error ${errorCode}`;
    return (React.createElement(Title, { title: title, suffix: siteName, separator: separator, ...props }));
}
/**
 * Convenience component for search result page titles
 */
function SearchTitle({ query, resultCount, siteName, separator = ' - ', maxLength = 60, ...props }) {
    let title = `Search: ${query}`;
    if (resultCount !== undefined) {
        title += ` (${resultCount} results)`;
    }
    return (React.createElement(Title, { title: title, suffix: siteName, separator: separator, maxLength: maxLength, ...props }));
}
//# sourceMappingURL=Title.js.map
;// ./node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/Meta.js



function SeoMeta({ pageInfo: { title, description } }) {
    return (react.createElement(react.Fragment, null,
        react.createElement(Title, { title: title }),
        react.createElement(Meta, { name: "description", content: description })));
}
const Meta_layout = {
    areaId: 'head',
    sortOrder: 5
};
const Meta_query = (/* unused pure expression or super */ null && (`
  query query {
    pageInfo {
      title
      description
    }
  }
`));
//# sourceMappingURL=Meta.js.map
;// ./node_modules/@evershop/evershop/dist/components/admin/NavigationItem.js


function NavigationItem({ Icon, url, title }) {
    const [isActive, setIsActive] = react.useState(false);
    react.useEffect(() => {
        const currentUrl = window.location.href;
        const baseUrl = window.location.origin;
        const check = currentUrl.split(baseUrl + url);
        if (check.length === 2 && url.indexOf('products/new') === -1) {
            // TODO: Fix me
            if (url.split('/').length === 2) {
                if (check[1] === '' || !/^\/[a-zA-Z1-9]/.test(check[1])) {
                    setIsActive(true);
                }
            }
            else {
                setIsActive(true);
            }
        }
    }, []);
    return (react.createElement("li", { className: isActive ? 'active nav-item' : 'nav-item' },
        react.createElement("a", { href: url, className: "flex justify-left" },
            react.createElement("i", { className: "menu-icon" },
                react.createElement(Icon, null)),
            title)));
}
//# sourceMappingURL=NavigationItem.js.map
;// ./node_modules/@evershop/evershop/dist/components/admin/NavigationItemGroup.js




function NavigationItemGroup({ id, name, items = [], Icon = null, url = null }) {
    return (react.createElement("li", { className: "root-nav-item nav-item" },
        react.createElement("div", { className: "flex justify-between items-center" },
            react.createElement("div", { className: "root-label flex justify-between items-center" },
                Icon && (react.createElement("span", null,
                    react.createElement(Icon, null))),
                !url && react.createElement("span", null, name),
                url && react.createElement("a", { href: url }, name))),
        react.createElement("ul", { className: "item-group" },
            react.createElement(common_Area, { id: id, noOuter: true, coreComponents: items.map((item) => ({
                    component: {
                        default: () => (react.createElement(NavigationItem, { Icon: item.Icon, url: item.url, title: item.title }))
                    }
                })) }))));
}
NavigationItemGroup.defaultProps = {
    items: [],
    Icon: null,
    url: null
};
//# sourceMappingURL=NavigationItemGroup.js.map
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/ArchiveBoxIcon.js
var ArchiveBoxIcon = __webpack_require__(34383);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/HashtagIcon.js
var HashtagIcon = __webpack_require__(40404);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/LinkIcon.js
var LinkIcon = __webpack_require__(50368);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/TagIcon.js
var TagIcon = __webpack_require__(86944);
;// ./node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js







function CatalogMenuGroup({ productGrid, categoryGrid, attributeGrid, collectionGrid }) {
    return (react.createElement(NavigationItemGroup, { id: "catalogMenuGroup", name: "Catalog", items: [
            {
                Icon: ArchiveBoxIcon/* default */.A,
                url: productGrid,
                title: 'Products'
            },
            {
                Icon: LinkIcon/* default */.A,
                url: categoryGrid,
                title: 'Categories'
            },
            {
                Icon: TagIcon/* default */.A,
                url: collectionGrid,
                title: 'Collections'
            },
            {
                Icon: HashtagIcon/* default */.A,
                url: attributeGrid,
                title: 'Attributes'
            }
        ] }));
}
CatalogMenuGroup.propTypes = {
    attributeGrid: (prop_types_default()).string.isRequired,
    categoryGrid: (prop_types_default()).string.isRequired,
    collectionGrid: (prop_types_default()).string.isRequired,
    productGrid: (prop_types_default()).string.isRequired
};
const CatalogMenuGroup_layout = {
    areaId: 'adminMenu',
    sortOrder: 20
};
const CatalogMenuGroup_query = (/* unused pure expression or super */ null && (`
  query Query {
    productGrid: url(routeId:"productGrid")
    categoryGrid: url(routeId:"categoryGrid")
    attributeGrid: url(routeId:"attributeGrid")
    collectionGrid: url(routeId:"collectionGrid")
  }
`));
//# sourceMappingURL=CatalogMenuGroup.js.map
;// ./node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js




function NewProductQuickLink({ productNew }) {
    return (react.createElement(NavigationItem, { Icon: ArchiveBoxIcon/* default */.A, title: "New Product", url: productNew }));
}
NewProductQuickLink.propTypes = {
    productNew: (prop_types_default()).string.isRequired
};
const NewProductQuickLink_layout = {
    areaId: 'quickLinks',
    sortOrder: 20
};
const NewProductQuickLink_query = (/* unused pure expression or super */ null && (`
  query Query {
    productNew: url(routeId:"productNew")
  }
`));
//# sourceMappingURL=NewProductQuickLink.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/form/Tooltip.js

function Tooltip({ content, position = 'top', className = '' }) {
    const [isVisible, setIsVisible] = (0,react.useState)(false);
    const positionClasses = {
        top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
    };
    const arrowClasses = {
        top: 'top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800',
        bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-800',
        left: 'left-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-800',
        right: 'right-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-gray-800'
    };
    return (react.createElement("div", { className: `relative inline-flex ${className}` },
        react.createElement("button", { type: "button", className: "inline-flex items-center justify-center w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 transition-colors duration-200", onMouseEnter: () => setIsVisible(true), onMouseLeave: () => setIsVisible(false), onFocus: () => setIsVisible(true), onBlur: () => setIsVisible(false), tabIndex: -1 },
            react.createElement("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20" },
                react.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" }))),
        isVisible && (react.createElement("div", { className: `absolute z-50 px-3 py-2 text-sm font-normal text-white bg-gray-800 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${positionClasses[position]} opacity-100 scale-100`, style: { minWidth: '200px', maxWidth: '300px' } },
            content,
            react.createElement("div", { className: `absolute w-0 h-0 ${arrowClasses[position]}` })))));
}
//# sourceMappingURL=Tooltip.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/form/utils/getNestedError.js
/**
 * Helper function to get nested error from react-hook-form errors object
 * Handles both simple field names and nested array field names using dot notation (e.g., "attributes.0.value")
 * Also supports legacy bracket notation for backward compatibility
 */
const getNestedError = (name, errors, error) => {
    var _a;
    if (error)
        return error;
    if (!name.includes('.') && !name.includes('[')) {
        return (_a = errors[name]) === null || _a === void 0 ? void 0 : _a.message;
    }
    let parts;
    if (name.includes('[')) {
        parts = name.split(/[\[\]]+/).filter(Boolean);
    }
    else {
        parts = name.split('.');
    }
    let current = errors;
    for (const part of parts) {
        if (current === null || current === undefined)
            return undefined;
        const index = parseInt(part);
        if (!isNaN(index)) {
            current = current[index];
        }
        else {
            current = current[part];
        }
    }
    return current === null || current === void 0 ? void 0 : current.message;
};
//# sourceMappingURL=getNestedError.js.map
;// ./node_modules/@evershop/evershop/dist/lib/locale/translate/_.js
function _(text, values) {
    // Check if the data is null, undefined or empty object
    if (!values || Object.keys(values).length === 0) {
        return text;
    }
    const template = `${text}`;
    return template.replace(/\${(.*?)}/g, (match, key) => values[key.trim()] !== undefined ? values[key.trim()] : match);
}
//# sourceMappingURL=_.js.map
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(49785);
;// ./node_modules/@evershop/evershop/dist/components/common/form/InputField.js





function InputField({ name, label, error, helperText, required, validation, wrapperClassName, className, type = 'text', prefixIcon, suffixIcon, ...props }) {
    const { register, formState: { errors } } = (0,index_esm/* useFormContext */.xW)();
    const fieldError = getNestedError(name, errors, error);
    const fieldId = `field-${name}`;
    const validationRules = {
        ...validation,
        ...(required &&
            !(validation === null || validation === void 0 ? void 0 : validation.required) && {
            required: _('${field} is required', { field: label || name })
        })
    };
    const hasIcons = prefixIcon || suffixIcon;
    const inputClassName = `${fieldError !== undefined ? 'error' : ''} ${className || ''} ${hasIcons ? '!pr-3' : ''} ${prefixIcon ? '!pl-10' : ''} ${suffixIcon ? '!pr-10' : ''}`.trim();
    const renderInput = () => (react.createElement("input", { id: fieldId, type: type, ...register(name, validationRules), className: inputClassName, "aria-invalid": fieldError !== undefined ? 'true' : 'false', "aria-describedby": fieldError !== undefined ? `${fieldId}-error` : undefined, ...props }));
    return (react.createElement("div", { className: `form-field ${wrapperClassName || ''}`.trim() },
        label && (react.createElement("label", { htmlFor: fieldId },
            label,
            required && react.createElement("span", { className: "required-indicator" }, "*"),
            helperText && react.createElement(Tooltip, { content: helperText, position: "top" }))),
        hasIcons ? (react.createElement("div", { className: `input__wrapper relative flex group items-center`.trim() },
            prefixIcon && (react.createElement("div", { className: "prefix absolute left-3 z-10 flex items-center justify-center" }, prefixIcon)),
            renderInput(),
            suffixIcon && (react.createElement("div", { className: "suffix absolute right-3 z-10 flex items-center justify-center" }, suffixIcon)))) : (renderInput()),
        fieldError && (react.createElement("p", { id: `${fieldId}-error`, className: "field-error" }, fieldError))));
}
//# sourceMappingURL=InputField.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/form/SelectField.js





function SelectField({ name, label, error, helperText, required, validation, options, placeholder, wrapperClassName, className, defaultValue, multiple = false, ...props }) {
    const { register, formState: { errors } } = (0,index_esm/* useFormContext */.xW)();
    const fieldError = getNestedError(name, errors, error);
    const fieldId = `field-${name}`;
    const hasDefaultValue = defaultValue !== undefined && defaultValue !== null && defaultValue !== '';
    const validationRules = {
        ...validation,
        ...(required &&
            !(validation === null || validation === void 0 ? void 0 : validation.required) && {
            required: {
                value: true,
                message: _('${field} is required', { field: label || name })
            },
            validate: {
                ...validation === null || validation === void 0 ? void 0 : validation.validate,
                notEmpty: (value) => {
                    if (required &&
                        (value === '' || value === null || value === undefined)) {
                        return _('${field} is required', { field: label || name });
                    }
                    return true;
                }
            }
        })
    };
    return (react.createElement("div", { className: `form-field ${wrapperClassName} ${fieldError ? 'error' : ''}` },
        label && (react.createElement("label", { htmlFor: fieldId },
            label,
            required && react.createElement("span", { className: "required-indicator" }, "*"),
            helperText && react.createElement(Tooltip, { content: helperText, position: "top" }))),
        react.createElement("select", { id: fieldId, ...register(name, validationRules), className: className, defaultValue: hasDefaultValue ? defaultValue : multiple ? [] : '', "aria-invalid": fieldError !== undefined ? 'true' : 'false', "aria-describedby": fieldError !== undefined
                ? `${fieldId}-error`
                : helperText
                    ? `${fieldId}-helper`
                    : undefined, multiple: multiple, ...props },
            placeholder && (react.createElement("option", { value: "", disabled: true }, placeholder)),
            options.map((option) => (react.createElement("option", { key: option.value, value: option.value, disabled: option.disabled }, option.label)))),
        fieldError && (react.createElement("p", { id: `${fieldId}-error`, className: "field-error" }, fieldError))));
}
//# sourceMappingURL=SelectField.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/form/TextareaField.js





function TextareaField({ name, label, error, helperText, wrapperClassName, required, validation, className, rows = 4, ...props }) {
    const { register, formState: { errors } } = (0,index_esm/* useFormContext */.xW)();
    const fieldError = getNestedError(name, errors, error);
    const fieldId = `field-${name}`;
    const validationRules = {
        ...validation,
        ...(required &&
            !(validation === null || validation === void 0 ? void 0 : validation.required) && {
            required: _('${field} is required', { field: label || name })
        })
    };
    return (react.createElement("div", { className: `form-field ${wrapperClassName}` },
        label && (react.createElement("label", { htmlFor: fieldId },
            label,
            required && react.createElement("span", { className: "required-indicator" }, "*"),
            helperText && react.createElement(Tooltip, { content: helperText, position: "top" }))),
        react.createElement("textarea", { id: fieldId, rows: rows, ...register(name, validationRules), className: `${fieldError !== undefined ? 'error' : ''} ${className || ''}`, "aria-invalid": fieldError !== undefined ? 'true' : 'false', "aria-describedby": fieldError !== undefined ? `${fieldId}-error` : undefined, ...props }),
        fieldError && (react.createElement("p", { id: `${fieldId}-error`, className: "field-error" }, fieldError))));
}
//# sourceMappingURL=TextareaField.js.map
;// ./node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Attributes.js







const getGroup = (groups = [], groupId) => groups.find((group) => group.groupId === groupId) || groups[0];
const getAttributeOptions = (groups, attributeId) => {
    var _a;
    const attribute = (_a = groups
        .find((group) => group.attributes.items.find((attr) => attr.attribute_id === attributeId))) === null || _a === void 0 ? void 0 : _a.attributes.items.find((attr) => attr.attribute_id === attributeId);
    return attribute ? attribute.options : [];
};
const getAttributeSelectedValues = (attributeIndex, attributeId, attributeType) => {
    var _a, _b;
    switch (attributeType) {
        case 'text':
        case 'textarea':
        case 'date':
        case 'datetime':
            return (((_a = attributeIndex.find((idx) => idx.attributeId === attributeId)) === null || _a === void 0 ? void 0 : _a.optionText) || '');
        case 'select':
            return (((_b = attributeIndex
                .find((idx) => idx.attributeId === attributeId)) === null || _b === void 0 ? void 0 : _b.optionId.toString()) || '');
        case 'multiselect':
            return attributeIndex
                .filter((idx) => idx.attributeId === attributeId)
                .map((idx) => idx.optionId.toString());
        default:
            return '';
    }
};
function Attributes({ product, groups: { items } }) {
    var _a;
    const { unregister, watch } = (0,index_esm/* useFormContext */.xW)();
    const { fields, replace } = (0,index_esm/* useFieldArray */.jz)({
        name: 'attributes'
    });
    const attributeIndex = (product === null || product === void 0 ? void 0 : product.attributeIndex) || [];
    const currentGroup = watch('group_id', ((_a = getGroup(items, product === null || product === void 0 ? void 0 : product.groupId)) === null || _a === void 0 ? void 0 : _a.groupId) || undefined);
    (0,react.useEffect)(() => {
        var _a;
        if (currentGroup) {
            const attributes = ((_a = getGroup(items, currentGroup)) === null || _a === void 0 ? void 0 : _a.attributes.items) || [];
            const newFields = attributes.map((attribute) => ({
                attribute_code: attribute.attribute_code,
                attribute_name: attribute.attribute_name,
                type: attribute.type,
                attribute_id: attribute.attribute_id,
                value: getAttributeSelectedValues(attributeIndex, attribute.attribute_id, attribute.type),
                is_required: attribute.is_required
            }));
            replace(newFields);
        }
    }, [currentGroup, items, replace, unregister]);
    return (react.createElement(Card, null,
        react.createElement(Card.Session, { title: "Attribute group" },
            react.createElement("div", null,
                (product === null || product === void 0 ? void 0 : product.variantGroupId) && (react.createElement("div", null,
                    react.createElement(InputField, { type: "hidden", defaultValue: product === null || product === void 0 ? void 0 : product.groupId, name: "group_id" }),
                    react.createElement("div", { className: "border rounded border-divider p-2" },
                        react.createElement("span", null, getGroup(items, product === null || product === void 0 ? void 0 : product.groupId).groupName)),
                    react.createElement("div", { className: "italic text-textSubdued" }, "Can not change the attribute group of a product that is already in a variant group."))),
                !(product === null || product === void 0 ? void 0 : product.variantGroupId) && (react.createElement(SelectField, { name: "group_id", label: "Attribute group", options: items.map((group) => ({
                        value: group.groupId,
                        label: group.groupName
                    })), defaultValue: product === null || product === void 0 ? void 0 : product.groupId, required: true })))),
        react.createElement(Card.Session, { title: "Attributes" },
            react.createElement("table", { className: "table table-auto" },
                react.createElement("tbody", null, fields.map((attribute, index) => {
                    const validation = attribute.is_required === 1
                        ? {
                            required: `${attribute.attribute_name} is required`
                        }
                        : {};
                    let Field = null;
                    switch (attribute.type) {
                        case 'text':
                            Field = (react.createElement(InputField, { name: `attributes.${index}.value`, required: attribute.is_required === 1, validation: validation }));
                            break;
                        case 'textarea':
                            Field = (react.createElement(TextareaField, { name: `attributes.${index}.value`, required: attribute.is_required === 1, validation: validation }));
                            break;
                        case 'select':
                            Field = (react.createElement(SelectField, { name: `attributes.${index}.value`, options: getAttributeOptions(items, attribute.attribute_id), placeholder: "Select an option", validation: validation }));
                            break;
                        case 'multiselect':
                            Field = (react.createElement(SelectField, { name: `attributes.${index}.value`, options: getAttributeOptions(items, attribute.attribute_id), placeholder: "Select options", required: attribute.is_required === 1, validation: validation, multiple: true }));
                            break;
                        default:
                            Field = (react.createElement(InputField, { name: `attributes.${index}.value`, required: attribute.is_required === 1, validation: validation, placeholder: _('Enter value for ${attribute}', {
                                    attribute: attribute.attribute_name
                                }) }));
                            break;
                    }
                    return (react.createElement("tr", { key: attribute.id },
                        react.createElement("td", null,
                            react.createElement("span", null, attribute.attribute_name),
                            attribute.is_required === 1 && (react.createElement("span", { className: "required-indicator" }, "*"))),
                        react.createElement("td", null,
                            react.createElement(InputField, { type: "hidden", value: attribute.attribute_code, name: `attributes.${index}.attribute_code` }),
                            Field)));
                }))))));
}
const Attributes_layout = {
    areaId: 'rightSide',
    sortOrder: 30
};
const Attributes_query = (/* unused pure expression or super */ null && (`
  query Query ($filters: [FilterInput!]) {
    product(id: getContextValue("productId", null)) {
      groupId
      variantGroupId
      attributeIndex {
        attributeId
        optionId
        optionText
      }
    },
    groups: attributeGroups(filters: $filters) {
      items {
        groupId: attributeGroupId
        groupName
        attributes {
          items {
            attribute_id: attributeId
            attribute_name: attributeName
            attribute_code: attributeCode
            type
            is_required: isRequired
            options {
              value: attributeOptionId
              label: optionText
            }
          }
        }
      }
    }
  }
`));
const variables = (/* unused pure expression or super */ null && (`
{
  filters: [{ key: "limit", operation: 'eq', value: 1000 }]
}`));
//# sourceMappingURL=Attributes.js.map
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ChevronLeftIcon.js
var ChevronLeftIcon = __webpack_require__(85575);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js
var ChevronRightIcon = __webpack_require__(66304);
;// ./node_modules/@evershop/evershop/dist/components/common/SimplePagination.js



function SimplePagination({ total, count, page, hasNext, setPage }) {
    return (react.createElement("div", { className: "simple__pagination flex gap-2 items-center" },
        react.createElement("div", null,
            react.createElement("span", null,
                count,
                " of ",
                total)),
        react.createElement("div", { className: "flex gap-2" },
            page > 1 && (react.createElement("a", { className: "hover:text-interactive border rounded p-[5px] border-divider", href: "#", onClick: (e) => {
                    e.preventDefault();
                    setPage(page - 1);
                } },
                react.createElement(ChevronLeftIcon/* default */.A, { width: 15, height: 15 }))),
            page === 1 && (react.createElement("span", { className: "border rounded p-[5px] border-divider text-divider" },
                react.createElement(ChevronLeftIcon/* default */.A, { width: 15, height: 15 }))),
            hasNext && (react.createElement("a", { className: "hover:text-interactive border rounded p-[5px] border-divider", href: "#", onClick: (e) => {
                    e.preventDefault();
                    setPage(page + 1);
                } },
                react.createElement(ChevronRightIcon/* default */.A, { width: 15, height: 15 }))),
            !hasNext && (react.createElement("span", { className: "border rounded p-[5px] border-divider text-divider" },
                react.createElement(ChevronRightIcon/* default */.A, { width: 15, height: 15 }))))));
}
//# sourceMappingURL=SimplePagination.js.map
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CheckIcon.js
var CheckIcon = __webpack_require__(72933);
;// ./node_modules/@evershop/evershop/dist/components/admin/CategorySelector.js





const SearchQuery = `
  query Query ($filters: [FilterInput!]) {
    categories(filters: $filters) {
      items {
        categoryId
        uuid
        name
        path {
          name
        }
      }
      total
    }
  }
`;
const CategoryListSkeleton = () => {
    const skeletonItems = Array(5).fill(0);
    return (react.createElement("div", { className: "category-list-skeleton" }, skeletonItems.map((_, index) => (react.createElement("div", { key: index, className: "category-skeleton-item border-b flex justify-between items-center" },
        react.createElement("div", { className: "flex items-center" },
            react.createElement("div", null,
                react.createElement("div", { className: "skeleton-title h-5 w-30 bg-gray-200 rounded skeleton-pulse mb-2" }),
                react.createElement("div", { className: "skeleton-id h-4 w-20 bg-gray-200 rounded skeleton-pulse" }))),
        react.createElement("div", { className: "select-button" },
            react.createElement("div", { className: "skeleton-button h-6 w-12 bg-gray-200 rounded skeleton-pulse" })))))));
};
const isCategorySelected = (category, selectedCategories) => {
    return selectedCategories.some((selected) => ((selected === null || selected === void 0 ? void 0 : selected.categoryId) && selected.categoryId === category.categoryId) ||
        ((selected === null || selected === void 0 ? void 0 : selected.uuid) && selected.uuid === category.uuid));
};
const CategorySelector = ({ onSelect, onUnSelect, selectedCategories }) => {
    var _a, _b;
    const [internalSelectedCategories, setInternalSelectedCategories] = react.useState(selectedCategories || []);
    const [loading, setLoading] = react.useState(false);
    const limit = 10;
    const [inputValue, setInputValue] = react.useState('');
    const [page, setPage] = react.useState(1);
    const [result, reexecuteQuery] = (0,urql_es/* useQuery */.IT)({
        query: SearchQuery,
        variables: {
            filters: inputValue
                ? [
                    { key: 'name', operation: 'like', value: inputValue },
                    { key: 'page', operation: 'eq', value: page.toString() },
                    { key: 'limit', operation: 'eq', value: limit.toString() }
                ]
                : [
                    { key: 'limit', operation: 'eq', value: limit.toString() },
                    { key: 'page', operation: 'eq', value: page.toString() }
                ]
        },
        pause: true
    });
    react.useEffect(() => {
        reexecuteQuery({ requestPolicy: 'network-only' });
    }, [page]);
    react.useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            if (inputValue !== '') {
                reexecuteQuery({ requestPolicy: 'network-only' });
            }
        }, 1500);
        return () => clearTimeout(timer);
    }, [inputValue]);
    const { data, fetching, error } = result;
    if (error) {
        return (react.createElement("p", { className: "text-critical" },
            "There was an error fetching categories.",
            error.message));
    }
    return (react.createElement("div", null,
        react.createElement("div", null,
            react.createElement("div", { className: "p-2" },
                react.createElement("div", { className: "form-field" },
                    react.createElement("input", { type: "text", value: inputValue || '', placeholder: "Search categories", onChange: (e) => {
                            setInputValue(e.target.value);
                            setLoading(true);
                        } }))),
            (fetching || loading) && react.createElement(CategoryListSkeleton, null),
            !fetching && data && (react.createElement("div", { className: "divide-y" },
                data.categories.items.length === 0 && (react.createElement("div", { className: "p-2 border border-divider rounded flex justify-center items-center" }, inputValue ? (react.createElement("p", null,
                    "No categories found for query \"",
                    inputValue,
                    "\u201D")) : (react.createElement("p", null, "You have no categories to display")))),
                data.categories.items.map((cat) => (react.createElement("div", { key: cat.uuid, className: "grid grid-cols-8 gap-5 py-2 border-divider items-center" },
                    react.createElement("div", { className: "col-span-5" },
                        react.createElement("h3", null, cat.path.map((item, index) => (react.createElement("span", { key: item.name, className: "text-gray-500" },
                            item.name,
                            index < cat.path.length - 1 && ' > '))))),
                    react.createElement("div", { className: "col-span-3 text-right" },
                        !isCategorySelected(cat, internalSelectedCategories) && (react.createElement("button", { type: "button", className: "button secondary", onClick: async (e) => {
                                e.preventDefault();
                                setInternalSelectedCategories((prev) => [
                                    ...prev,
                                    {
                                        categoryId: cat.categoryId,
                                        uuid: cat.uuid,
                                        name: cat.name
                                    }
                                ]);
                                onSelect(cat.categoryId, cat.uuid, cat.name);
                            } }, "Select")),
                        isCategorySelected(cat, internalSelectedCategories) && (react.createElement("a", { className: "button primary", href: "#", onClick: (e) => {
                                e.preventDefault();
                                setInternalSelectedCategories((prev) => prev.filter((c) => c.categoryId !== cat.categoryId &&
                                    c.uuid !== cat.uuid));
                                onUnSelect(cat.categoryId, cat.uuid, cat.name);
                            } },
                            react.createElement(CheckIcon/* default */.A, { className: "w-5 h-5" })))))))))),
        react.createElement("div", { className: "flex justify-between gap-5" },
            react.createElement(SimplePagination, { total: (data === null || data === void 0 ? void 0 : data.categories.total) || 0, count: ((_b = (_a = data === null || data === void 0 ? void 0 : data.categories) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.length) || 0, page: page, hasNext: limit * page < (data === null || data === void 0 ? void 0 : data.categories.total), setPage: setPage }))));
};

//# sourceMappingURL=CategorySelector.js.map
;// ./node_modules/@evershop/evershop/dist/components/admin/Spinner.js


function Spinner({ width, height }) {
    return (react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { margin: 'auto' }, width: width, height: height, display: "block", preserveAspectRatio: "xMidYMid", viewBox: "0 0 100 100" },
        react.createElement("g", { transform: "translate(50 50) scale(.7)" },
            react.createElement("circle", { r: "50", fill: "#215d38" }),
            react.createElement("circle", { cy: "-28", r: "15", fill: "#14a651" },
                react.createElement("animateTransform", { attributeName: "transform", dur: "1s", keyTimes: "0;1", repeatCount: "indefinite", type: "rotate", values: "0 0 0;360 0 0" })))));
}
Spinner.propTypes = {
    width: prop_types.number,
    height: prop_types.number
};
Spinner.defaultProps = {
    width: 60,
    height: 60
};
/* harmony default export */ const admin_Spinner = (Spinner);
//# sourceMappingURL=Spinner.js.map
;// ./node_modules/@evershop/evershop/dist/components/admin/FileBrowser.js





const GetApisQuery = `
  query Query ($filters: [FilterInput!]) {
    browserApi: url(routeId: "fileBrowser", params: [{key: "0", value: ""}])
    deleteApi: url(routeId: "fileDelete", params: [{key: "0", value: ""}])
    uploadApi: url(routeId: "imageUpload", params: [{key: "0", value: ""}])
    folderCreateApi: url(routeId: "folderCreate")
  }
`;
const File = ({ file, select }) => {
    const className = file.isSelected === true ? 'selected' : '';
    return (react.createElement("div", { className: `col image-item ${className}` },
        react.createElement("div", { className: "inner" },
            react.createElement("a", { href: "#", onClick: (e) => {
                    e.preventDefault();
                    select(file);
                } },
                react.createElement("img", { src: file.url, alt: "" })),
            file.isSelected === true && (react.createElement("div", { className: "select fill-current text-primary" },
                react.createElement("svg", { style: { width: '2rem' }, xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                    react.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })))))));
};
const FileBrowser = ({ onInsert, isMultiple, close }) => {
    const [error, setError] = react.useState('');
    const [loading, setLoading] = react.useState(false);
    const [folders, setFolders] = react.useState([]);
    const [files, setFiles] = react.useState([]);
    const [currentPath, setCurrentPath] = react.useState([{ name: '', index: 0 }]);
    const newFolderRefInput = react.useRef(null);
    const browserApiRef = react.useRef('');
    const deleteApiRef = react.useRef('');
    const uploadApiRef = react.useRef('');
    const folderCreateApiRef = react.useRef('');
    const onSelectFolder = (e, f) => {
        e.preventDefault();
        setCurrentPath(currentPath.concat({ name: f, index: currentPath.length + 1 }));
    };
    const onSelectFolderFromBreadcrumb = (e, index) => {
        e.preventDefault();
        const newPath = [];
        currentPath.forEach((f) => {
            if (f.index <= index)
                newPath.push(f);
        });
        setCurrentPath(newPath);
    };
    const onSelectFile = (f) => {
        if (isMultiple === false) {
            setFiles(files.map((file) => {
                if (f.name === file.name) {
                    file.isSelected = !file.isSelected;
                }
                else {
                    file.isSelected = false;
                }
                return file;
            }));
        }
        else {
            setFiles(files.map((file) => {
                if (f.name === file.name) {
                    file.isSelected = true;
                }
                else {
                    file.isSelected = false;
                }
                return file;
            }));
        }
    };
    const closeFileBrowser = (e) => {
        e.preventDefault();
        close();
    };
    const createFolder = (e, folder) => {
        e.preventDefault();
        if (!folder || !folder.trim()) {
            setError('Invalid folder name');
            return;
        }
        const path = currentPath.map((f) => f.name);
        path.push(folder.trim());
        setLoading(true);
        fetch(folderCreateApiRef.current, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ path: path.join('/') }),
            credentials: 'same-origin'
        })
            .then((res) => res.json())
            .then((response) => {
            if (!response.error) {
                // Get the first level folder, incase of recursive folder creation
                const recursiveFolders = folder.split('/');
                setFolders([...new Set(folders.concat(recursiveFolders[0]))]);
            }
            else {
                setError(response.error.message);
            }
        })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    };
    const deleteFile = () => {
        let file;
        files.forEach((f) => {
            if (f.isSelected === true) {
                file = f;
            }
        });
        if (!file) {
            setError('No file selected');
        }
        else {
            const path = currentPath.map((f) => f.name);
            path.push(file.name);
            setLoading(true);
            fetch(deleteApiRef.current + path.join('/'), {
                method: 'DELETE'
            })
                .then((res) => res.json())
                .then((response) => {
                if (!response.error) {
                    setCurrentPath(currentPath.map((f) => f));
                }
                else {
                    setError(response.error.message);
                }
            })
                .catch((err) => setError(err.message))
                .finally(() => setLoading(false));
        }
    };
    const insertFile = () => {
        let file;
        files.forEach((f) => {
            if (f.isSelected === true) {
                file = f;
            }
        });
        if (!file) {
            setError('No file selected');
        }
        else {
            onInsert(file.url);
        }
    };
    const onUpload = (e) => {
        e.persist();
        const formData = new FormData();
        for (let i = 0; i < e.target.files.length; i += 1)
            formData.append('images', e.target.files[i]);
        const path = [];
        currentPath.forEach((f) => {
            path.push(f.name);
        });
        setLoading(true);
        fetch(uploadApiRef.current + path.join('/'), {
            method: 'POST',
            body: formData
        })
            .then((res) => res.json())
            .then((response) => {
            if (!response.error) {
                setCurrentPath(currentPath.map((f) => f));
            }
            else {
                setError(response.error.message);
            }
        })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    };
    // Create a function to fetch files and folders to avoid code duplication
    const [apiReady, setApiReady] = react.useState(false);
    const fetchFilesAndFolders = react.useCallback(() => {
        if (!browserApiRef.current) {
            return;
        }
        const path = currentPath.map((f) => f.name);
        setLoading(true);
        fetch(browserApiRef.current + path.join('/'), {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((response) => {
            if (!response.error) {
                setFolders(response.data.folders);
                setFiles(response.data.files);
            }
            else {
                setError(response.error.message);
            }
        })
            .catch((e) => setError(e.message))
            .finally(() => setLoading(false));
    }, [currentPath]);
    // Track when the browserApiRef becomes available
    react.useEffect(() => {
        if (browserApiRef.current && browserApiRef.current !== '' && !apiReady) {
            setApiReady(true);
        }
    }, [browserApiRef.current, apiReady]);
    // Fetch data when either the path changes or the API becomes ready
    react.useEffect(() => {
        if (apiReady) {
            fetchFilesAndFolders();
        }
    }, [apiReady, currentPath, fetchFilesAndFolders]);
    const [result] = (0,urql_es/* useQuery */.IT)({
        query: GetApisQuery
    });
    const { data, fetching, error: err } = result;
    if (err) {
        return (react.createElement("p", { className: "text-critical" },
            "There was an error fetching file browser APIs.",
            err.message));
    }
    if (fetching) {
        return (react.createElement("div", { className: "fixed top-0 left-0 bottom-0 right-0 flex justify-center" },
            react.createElement(admin_Spinner, { width: 30, height: 30 })));
    }
    else {
        browserApiRef.current = data.browserApi;
        deleteApiRef.current = data.deleteApi;
        uploadApiRef.current = data.uploadApi;
        folderCreateApiRef.current = data.folderCreateApi;
        return (react.createElement("div", { className: "file-browser" },
            loading === true && (react.createElement("div", { className: "fixed top-0 left-0 bottom-0 right-0 flex justify-center" },
                react.createElement(admin_Spinner, { width: 30, height: 30 }))),
            react.createElement("div", { className: "content" },
                react.createElement("div", { className: "flex justify-end" },
                    react.createElement("a", { href: "#", onClick: (e) => closeFileBrowser(e), className: "text-interactive fill-current" },
                        react.createElement("svg", { style: { width: '2rem' }, xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                            react.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" })))),
                react.createElement("div", null,
                    react.createElement("div", { className: "grid grid-cols-4 gap-5" },
                        react.createElement("div", { className: "col-span-1" },
                            react.createElement("div", { className: "current-path mb-10" },
                                react.createElement("div", { className: "flex" },
                                    react.createElement("div", { className: "pr-2" }, "You are here:"),
                                    react.createElement("div", null,
                                        react.createElement("a", { href: "#", onClick: (e) => onSelectFolderFromBreadcrumb(e, 0), className: "text-interactive hover:underline" }, "Root")),
                                    currentPath.map((f, index) => (react.createElement("div", { key: index },
                                        react.createElement("span", null, "/"),
                                        react.createElement("a", { className: "text-interactive hover:underline", href: "#", onClick: (e) => onSelectFolderFromBreadcrumb(e, f.index) }, f.name)))))),
                            react.createElement("ul", { className: "mt-4 mb-4" },
                                folders.map((f, i) => (react.createElement("li", { key: i, className: "text-interactive fill-current flex list-group-item" },
                                    react.createElement("svg", { style: { width: '2rem', height: '2rem' }, xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                                        react.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" })),
                                    react.createElement("a", { className: "pl-2 hover:underline", href: "#", onClick: (e) => onSelectFolder(e, f) }, f)))),
                                folders.length === 0 && (react.createElement("li", { className: "list-group-item" },
                                    react.createElement("span", null, "There is no sub folder.")))),
                            react.createElement("div", { className: " justify-between" },
                                react.createElement("div", { className: "form-field mb-0" },
                                    react.createElement("input", { type: "text", placeholder: "New folder", ref: newFolderRefInput })),
                                react.createElement("div", { className: "mt-2" },
                                    react.createElement("a", { href: "#", onClick: (e) => { var _a; return createFolder(e, (_a = newFolderRefInput.current) === null || _a === void 0 ? void 0 : _a.value); }, className: "text-interactive hover:underline" }, "Create")))),
                        react.createElement("div", { className: "col-span-3" },
                            react.createElement("div", { className: "error text-critical mb-5" }, error),
                            react.createElement("div", { className: "tool-bar grid grid-cols-3 gap-2 mb-5" },
                                react.createElement(common_Button, { variant: "danger", outline: true, title: "Delete image", onAction: () => deleteFile() }),
                                react.createElement(common_Button, { variant: "primary", title: "Insert image", onAction: () => insertFile() }),
                                react.createElement(common_Button, { title: "Upload image", variant: "secondary", onAction: () => {
                                        document.getElementById('upload-image').click();
                                    } }),
                                react.createElement("label", { className: "self-center", id: "upload-image-label", htmlFor: "upload-image" },
                                    react.createElement("a", { className: "invisible" },
                                        react.createElement("input", { id: "upload-image", type: "file", multiple: true, onChange: onUpload })))),
                            files.length === 0 && react.createElement("div", null, "There is no file to display."),
                            react.createElement("div", { className: "grid grid-cols-9 gap-2" }, files.map((f) => (react.createElement(File, { file: f, select: onSelectFile, key: f.name }))))))))));
    }
};

//# sourceMappingURL=FileBrowser.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/form/editor/GetColumnClasses.js
const getColumnClasses = (size) => {
    switch (size) {
        case 1:
            return 'md:col-span-1';
        case 2:
            return 'md:col-span-2';
        case 3:
            return 'md:col-span-3';
        default:
            return 'md:col-span-1';
    }
};

//# sourceMappingURL=GetColumnClasses.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/form/editor/GetRowClasses.js
const getRowClasses = (size) => {
    switch (size) {
        case 1:
            return 'md:grid-cols-1';
        case 2:
            return 'md:grid-cols-2';
        case 3:
            return 'md:grid-cols-3';
        case 4:
            return 'md:grid-cols-4';
        case 5:
            return 'md:grid-cols-5';
        default:
            return 'md:grid-cols-1';
    }
};

//# sourceMappingURL=GetRowClasses.js.map
// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-browser/v4.js + 3 modules
var v4 = __webpack_require__(33829);
;// ./node_modules/@evershop/evershop/dist/components/common/form/editor/RowTemplates.js




function RowTemplates({ addRow }) {
    const templates = {
        1: () => (react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", "aria-hidden": "true", focusable: "false", fill: "#949494" },
            react.createElement("path", { d: "M0 10a2 2 0 0 1 2-2h44a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10Z" }))),
        '1:1': () => (react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", "aria-hidden": "true", focusable: "false", fill: "#949494" },
            react.createElement("path", { d: "M0 10a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10Zm25 0a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H27a2 2 0 0 1-2-2V10Z" }))),
        '1:2': () => (react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", "aria-hidden": "true", focusable: "false", fill: "#949494" },
            react.createElement("path", { d: "M0 10a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10Zm17 0a2 2 0 0 1 2-2h27a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H19a2 2 0 0 1-2-2V10Z" }))),
        '2:1': () => (react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", "aria-hidden": "true", focusable: "false", fill: "#949494" },
            react.createElement("path", { d: "M0 10a2 2 0 0 1 2-2h27a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10Zm33 0a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H35a2 2 0 0 1-2-2V10Z" }))),
        '2:3': () => (react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", "aria-hidden": "true", focusable: "false", fill: "#949494" },
            react.createElement("rect", { x: "0", y: "8", width: "18.4", height: "32", rx: "2", ry: "2" }),
            react.createElement("rect", { x: "21.6", y: "8", width: "24", height: "32", rx: "2", ry: "2" }))),
        '3:2': () => (react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", "aria-hidden": "true", focusable: "false", fill: "#949494" },
            react.createElement("rect", { x: "0", y: "8", width: "24", height: "32", rx: "2", ry: "2" }),
            react.createElement("rect", { x: "27.2", y: "8", width: "18.4", height: "32", rx: "2", ry: "2" }))),
        '1:1:1': () => (react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", "aria-hidden": "true", focusable: "false", fill: "#949494" },
            react.createElement("path", { d: "M0 10a2 2 0 0 1 2-2h10.531c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H2a2 2 0 0 1-2-2V10Zm16.5 0c0-1.105.864-2 1.969-2H29.53c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H18.47c-1.105 0-1.969-.895-1.969-2V10Zm17 0c0-1.105.864-2 1.969-2H46a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H35.469c-1.105 0-1.969-.895-1.969-2V10Z" }))),
        '1:2:1': () => (react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", "aria-hidden": "true", focusable: "false", fill: "#949494" },
            react.createElement("path", { d: "M0 10a2 2 0 0 1 2-2h7.531c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H2a2 2 0 0 1-2-2V10Zm13.5 0c0-1.105.864-2 1.969-2H32.53c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H15.47c-1.105 0-1.969-.895-1.969-2V10Zm23 0c0-1.105.864-2 1.969-2H46a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2h-7.531c-1.105 0-1.969-.895-1.969-2V10Z" })))
    };
    return (react.createElement("div", { className: "row-templates flex justify-center gap-7 border border-divider px-3" }, Object.keys(templates).map((key) => (react.createElement("a", { key: key, href: "#", onClick: (e) => {
            e.preventDefault();
            const split = key.split(':').map((val) => parseInt(val, 10));
            const sum = split.reduce((acc, val) => acc + val, 0);
            const rowClassName = getRowClasses(sum);
            const columns = split.map((size) => {
                const columnClassName = getColumnClasses(size);
                return {
                    size,
                    className: columnClassName,
                    id: `c__${(0,v4/* default */.A)()}`
                };
            });
            addRow({
                id: `r__${(0,v4/* default */.A)()}`,
                editSetting: true,
                columns,
                size: sum,
                className: rowClassName
            });
        } }, templates[key]())))));
}

//# sourceMappingURL=RowTemplates.js.map
// EXTERNAL MODULE: ./node_modules/@dnd-kit/core/dist/core.esm.js + 1 modules
var core_esm = __webpack_require__(43375);
// EXTERNAL MODULE: ./node_modules/@dnd-kit/sortable/dist/sortable.esm.js
var sortable_esm = __webpack_require__(43627);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/XCircleIcon.js
var XCircleIcon = __webpack_require__(89197);
;// ./node_modules/@evershop/evershop/dist/components/common/form/Editor.js











async function loadEditorJS() {
    const { default: EditorJS } = await __webpack_require__.e(/* import() */ 9601).then(__webpack_require__.bind(__webpack_require__, 49601));
    return EditorJS;
}
async function loadEditorJSImage() {
    const { default: ImageTool } = await __webpack_require__.e(/* import() */ 7276).then(__webpack_require__.bind(__webpack_require__, 37276));
    return ImageTool;
}
async function loadEditorJSHeader() {
    const { default: Header } = await __webpack_require__.e(/* import() */ 9149).then(__webpack_require__.bind(__webpack_require__, 99149));
    return Header;
}
async function loadEditorJSList() {
    const { default: List } = await __webpack_require__.e(/* import() */ 9461).then(__webpack_require__.bind(__webpack_require__, 29461));
    return List;
}
async function loadEditorJSQuote() {
    const { default: Quote } = await __webpack_require__.e(/* import() */ 4057).then(__webpack_require__.bind(__webpack_require__, 34057));
    return Quote;
}
async function loadEditorJSRaw() {
    const { default: RawTool } = await __webpack_require__.e(/* import() */ 6845).then(__webpack_require__.bind(__webpack_require__, 56845));
    return RawTool;
}
const SortableRow = ({ row, removeRow, children }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0,sortable_esm/* useSortable */.gl)({
        id: row.id
    });
    const style = {
        transform: transform ? `translateY(${transform.y}px)` : undefined,
        transition,
        opacity: isDragging ? 0.5 : 1,
        position: 'relative',
        zIndex: isDragging ? 1 : 0
    };
    return (react.createElement("div", { className: "border row__container mt-5", id: row.id, ref: setNodeRef, style: style },
        react.createElement("div", { className: "config p-3 flex justify-between bg-[#cccccc] items-center" },
            react.createElement("div", { className: "drag__icon cursor-move", ...attributes, ...listeners },
                react.createElement("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "#949494", width: 20, height: 20 },
                    react.createElement("g", null,
                        react.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
                        react.createElement("path", { fillRule: "nonzero", d: "M14 6h2v2h5a1 1 0 0 1 1 1v7.5L16 13l.036 8.062 2.223-2.15L20.041 22H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zm8 11.338V21a1 1 0 0 1-.048.307l-1.96-3.394L22 17.338zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z" })))),
            react.createElement("div", null,
                react.createElement("a", { href: "#", onClick: (e) => {
                        e.preventDefault();
                        removeRow(row.id);
                    } },
                    react.createElement(XCircleIcon/* default */.A, { color: "#d72c0d", width: 20, height: 20 })))),
        children));
};
const Editor = ({ name, value = [], label }) => {
    const [openFileBrowser, setOpenFileBrowser] = react.useState(false);
    const [fileBrowser, setFileBrowser] = react.useState(null);
    const { register, setValue } = (0,index_esm/* useFormContext */.xW)();
    const [rows, setRows] = react.useState(value
        ? value.map((row) => {
            const rowId = `r__${(0,v4/* default */.A)()}`;
            return {
                ...row,
                className: getRowClasses(row.size),
                id: row.id || rowId,
                columns: row.columns.map((column) => {
                    const colId = `c__${(0,v4/* default */.A)()}`;
                    return {
                        ...column,
                        className: getColumnClasses(column.size),
                        id: column.id || colId
                    };
                })
            };
        })
        : []);
    const editors = react.useRef({});
    const sensors = (0,core_esm/* useSensors */.FR)((0,core_esm/* useSensor */.MS)(core_esm/* PointerSensor */.AN, {
        activationConstraint: {
            distance: 8
        }
    }), (0,core_esm/* useSensor */.MS)(core_esm/* KeyboardSensor */.uN, {
        coordinateGetter: sortable_esm/* sortableKeyboardCoordinates */.JR
    }));
    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            setRows((items) => {
                const oldIndex = items.findIndex((row) => row.id === active.id);
                const newIndex = items.findIndex((row) => row.id === over.id);
                if (oldIndex !== -1 && newIndex !== -1) {
                    return (0,sortable_esm/* arrayMove */.be)(items, oldIndex, newIndex);
                }
                return items;
            });
        }
    };
    react.useEffect(() => {
        const initEditors = async () => {
            const EditorJS = await loadEditorJS();
            const ImageTool = await loadEditorJSImage();
            const Header = await loadEditorJSHeader();
            const List = await loadEditorJSList();
            const Quote = await loadEditorJSQuote();
            const RawTool = await loadEditorJSRaw();
            setValue(name, rows);
            rows.forEach((row) => {
                row.columns.forEach((column) => {
                    if (!editors.current[column.id]) {
                        editors.current[column.id] = {};
                        editors.current[column.id].instance = new EditorJS({
                            holder: column.id,
                            placeholder: 'Type / to see the available blocks',
                            minHeight: 0,
                            tools: {
                                header: Header,
                                list: List,
                                raw: RawTool,
                                quote: Quote,
                                image: {
                                    class: ImageTool,
                                    config: {
                                        onSelectFile: (onUpload, onError) => {
                                            setFileBrowser({
                                                onUpload: (fileUrl) => {
                                                    onUpload({
                                                        success: 1,
                                                        file: {
                                                            url: fileUrl
                                                        }
                                                    });
                                                },
                                                onError
                                            });
                                            setOpenFileBrowser(true);
                                        }
                                    }
                                }
                            },
                            data: column.data,
                            onChange: (api) => {
                                api.saver.save().then((outputData) => {
                                    // Save outputData to the column and trigger re-render
                                    setRows((prevRows) => {
                                        const newRows = [...prevRows];
                                        const rowIdx = newRows.findIndex((r) => r.id === row.id);
                                        const columnIdx = newRows[rowIdx].columns.findIndex((c) => c.id === column.id);
                                        newRows[rowIdx].columns[columnIdx].data = outputData;
                                        setValue(name, newRows);
                                        return newRows;
                                    });
                                });
                            }
                        });
                    }
                });
            });
        };
        initEditors();
    }, [rows.length]);
    const removeRow = (rowId) => {
        setRows(rows.filter((i) => i.id !== rowId));
    };
    const addRow = (row) => {
        setRows(rows.concat(row));
    };
    return (react.createElement("div", { className: "editor form-field-container" },
        react.createElement("label", { htmlFor: "description mt-4" }, label),
        react.createElement("div", { className: "prose prose-xl max-w-none" },
            react.createElement(core_esm/* DndContext */.Mp, { sensors: sensors, collisionDetection: core_esm/* closestCenter */.fp, onDragEnd: handleDragEnd },
                react.createElement(sortable_esm/* SortableContext */.gB, { items: rows.map((row) => row.id), strategy: sortable_esm/* verticalListSortingStrategy */._G },
                    react.createElement("div", { id: "rows" }, rows.map((row) => (
                    // Grid template columns based on the number of columns in the row
                    react.createElement(SortableRow, { key: row.id, row: row, removeRow: removeRow },
                        react.createElement("div", { className: `row grid p-5 divide-x divide-dashed ${row.className}`, style: {
                                minHeight: '30px'
                            } }, row.columns.map((column) => (react.createElement("div", { className: `column p-3 ${column.className}`, key: column.id },
                            react.createElement("div", { id: column.id }))))))))))),
            react.createElement("div", { className: "flex justify-center" },
                react.createElement("div", { className: "flex justify-center flex-col mt-5" },
                    react.createElement(RowTemplates, { addRow: addRow })))),
        react.createElement("input", { type: "hidden", ...register(name) }),
        openFileBrowser && (react.createElement(FileBrowser, { onInsert: (url) => {
                fileBrowser && fileBrowser.onUpload(url);
                setOpenFileBrowser(false);
            }, close: () => setOpenFileBrowser(false), isMultiple: false }))));
};
//# sourceMappingURL=Editor.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/form/NumberField.js





function NumberField({ name, label, placeholder, className = '', wrapperClassName, required = false, disabled = false, min, max, step, allowDecimals = true, unit, unitPosition = 'right', defaultValue, error, helperText, validation, onChange, prefixIcon, suffixIcon, ...props }) {
    const { register, formState: { errors } } = (0,index_esm/* useFormContext */.xW)();
    const fieldError = getNestedError(name, errors, error);
    const fieldId = `field-${name}`;
    const validationRules = {
        setValueAs: (value) => {
            // Handle empty or null values
            if (value === '' || value === null || value === undefined) {
                return null;
            }
            // Convert string to number
            const numValue = allowDecimals ? parseFloat(value) : parseInt(value, 10);
            // Return null if conversion resulted in NaN
            return isNaN(numValue) ? null : numValue;
        }
    };
    if (defaultValue !== undefined && !isNaN(defaultValue)) {
        validationRules.value = defaultValue;
    }
    if (validation) {
        Object.assign(validationRules, validation);
    }
    if (required && !validationRules.required) {
        validationRules.required = _('${field} is required', {
            field: label || 'This field'
        });
    }
    if (min !== undefined && !validationRules.min) {
        validationRules.min = {
            value: min,
            message: _('Value must be at least ${min}', { min: min.toString() })
        };
    }
    if (max !== undefined && !validationRules.max) {
        validationRules.max = {
            value: max,
            message: _('Value must be at most ${max}', { max: max.toString() })
        };
    }
    if (!allowDecimals && !(validation === null || validation === void 0 ? void 0 : validation.validate)) {
        validationRules.validate = (value) => {
            if (value === null || value === undefined || value === '')
                return true;
            return (Number.isInteger(Number(value)) || _('Value must be a whole number'));
        };
    }
    else if (!allowDecimals &&
        (validation === null || validation === void 0 ? void 0 : validation.validate) &&
        typeof validation.validate === 'object') {
        validationRules.validate = {
            ...validation.validate,
            isInteger: (value) => {
                if (value === null || value === undefined || value === '')
                    return true;
                return (Number.isInteger(Number(value)) || _('Value must be a whole number'));
            }
        };
    }
    const handleChange = (e) => {
        const inputValue = e.target.value;
        let numValue = null;
        if (inputValue !== '') {
            if (allowDecimals) {
                numValue = parseFloat(inputValue);
            }
            else {
                numValue = parseInt(inputValue, 10);
            }
        }
        if (onChange) {
            onChange(numValue);
        }
    };
    const inputStep = step !== undefined ? step : allowDecimals ? 'any' : '1';
    const hasIcons = prefixIcon || suffixIcon;
    const baseInputClassName = `${fieldError ? 'error' : ''} ${unit ? 'has-unit' : ''} ${className || ''}`;
    const iconInputClassName = `${fieldError !== undefined ? 'error' : ''} ${className || ''} ${hasIcons ? '!pr-3' : ''} ${prefixIcon ? '!pl-10' : ''} ${suffixIcon ? '!pr-10' : ''}`.trim();
    const renderInput = (useIconStyles = false) => (react.createElement("input", { id: fieldId, type: "number", placeholder: placeholder, disabled: disabled, min: min, max: max, step: inputStep, className: useIconStyles ? iconInputClassName : baseInputClassName, "aria-invalid": fieldError ? 'true' : 'false', "aria-describedby": fieldError ? `${fieldId}-error` : undefined, ...register(name, validationRules), onChange: (e) => {
            register(name).onChange(e);
            handleChange(e);
        }, ...props }));
    return (react.createElement("div", { className: `form-field ${wrapperClassName || ''}`.trim() },
        label && (react.createElement("label", { htmlFor: fieldId },
            label,
            required && react.createElement("span", { className: "required-indicator" }, "*"),
            helperText && react.createElement(Tooltip, { content: helperText, position: "top" }))),
        hasIcons ? (react.createElement("div", { className: `input__wrapper relative flex group items-center`.trim() },
            prefixIcon && (react.createElement("div", { className: "prefix absolute left-3 z-10 flex items-center justify-center" }, prefixIcon)),
            renderInput(true),
            suffixIcon && (react.createElement("div", { className: "suffix absolute right-3 z-10 flex items-center justify-center" }, suffixIcon)))) : unit ? (react.createElement("div", { className: "number-field-container" },
            unitPosition === 'left' && (react.createElement("span", { className: "number-unit" }, unit)),
            renderInput(),
            unitPosition === 'right' && (react.createElement("span", { className: "number-unit" }, unit)))) : (renderInput()),
        fieldError && (react.createElement("p", { id: `${fieldId}-error`, className: "field-error" }, fieldError))));
}
//# sourceMappingURL=NumberField.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/modal/Modal.js


const Modal = ({ isOpen, onClose, title, children, className, closeOnEscape = true, closeOnBackdropClick = true, ...restProps }) => {
    const [isRendered, setIsRendered] = (0,react.useState)(isOpen);
    (0,react.useEffect)(() => {
        if (isOpen) {
            setIsRendered(true);
        }
    }, [isOpen]);
    const handleTransitionEnd = () => {
        if (!isOpen) {
            setIsRendered(false);
        }
    };
    const handleModalKeyDown = (0,react.useCallback)((e) => {
        if (closeOnEscape && e.key === 'Escape') {
            onClose();
        }
    }, [closeOnEscape, onClose]);
    const handleBackdropClick = (0,react.useCallback)((e) => {
        if (closeOnBackdropClick && e.target === e.currentTarget) {
            onClose();
        }
    }, [closeOnBackdropClick, onClose]);
    (0,react.useEffect)(() => {
        if (isRendered) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isRendered]);
    (0,react.useEffect)(() => {
        if (!isRendered)
            return;
        document.addEventListener('keydown', handleModalKeyDown);
        return () => {
            document.removeEventListener('keydown', handleModalKeyDown);
        };
    }, [isRendered, handleModalKeyDown]);
    if (!isRendered) {
        return null;
    }
    return (react.createElement(react.Fragment, null,
        react.createElement("div", { onClick: handleBackdropClick, role: "presentation", className: `fixed inset-0 bg-black bg-opacity-50 z-1001 transition-opacity duration-300 z-30 ${isOpen ? 'opacity-100' : 'opacity-0'}` }),
        react.createElement("div", { role: "dialog", "aria-modal": "true", onTransitionEnd: handleTransitionEnd, className: `fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg z-50 w-full max-w-2xl max-h-[80vh] overflow-auto overscroll-contain transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${className || ''}`, ...restProps },
            react.createElement(Card, { title: title },
                react.createElement(Card.Session, null, children)))));
};
//# sourceMappingURL=Modal.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/modal/useModal.js

function useModal({ initialOpen = false, onAfterOpen, onAfterClose } = {}) {
    const [isOpen, setIsOpen] = (0,react.useState)(initialOpen);
    const open = (0,react.useCallback)(() => {
        setIsOpen(true);
        if (onAfterOpen)
            onAfterOpen();
    }, [onAfterOpen]);
    const close = (0,react.useCallback)((e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setIsOpen(false);
        if (onAfterClose)
            onAfterClose();
    }, [onAfterClose]);
    const toggle = (0,react.useCallback)((e) => {
        if (isOpen) {
            close(e);
        }
        else {
            open();
        }
    }, [isOpen, open, close]);
    return {
        isOpen,
        open,
        close,
        toggle
    };
}
//# sourceMappingURL=useModal.js.map
;// ./node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/General.js














const SKUPriceWeight = ({ sku, price, weight, setting }) => {
    return (react.createElement("div", { className: "grid grid-cols-3 gap-2 mt-4" },
        react.createElement(InputField, { name: "sku", label: "SKU", placeholder: "Enter SKU", defaultValue: sku, required: true, helperText: _('SKU must be unique') }),
        react.createElement(NumberField, { name: "price", placeholder: "Enter price", label: `Price`, defaultValue: price === null || price === void 0 ? void 0 : price.value, unit: setting.storeCurrency, min: 0, required: true }),
        react.createElement(NumberField, { name: "weight", placeholder: "Enter weight", label: `Weight`, defaultValue: weight === null || weight === void 0 ? void 0 : weight.value, unit: setting.weightUnit, required: true, validation: { min: 1 }, helperText: _('Weight must be a positive number') })));
};
const CategoryQuery = `
  query Query ($id: Int!) {
    category(id: $id) {
      categoryId
      name
      path {
        name
      }
    }
  }
`;
const ProductCategory = ({ categoryId, onChange, onUnassign }) => {
    const { register } = (0,index_esm/* useFormContext */.xW)();
    const [result] = (0,urql_es/* useQuery */.IT)({
        query: CategoryQuery,
        variables: {
            id: categoryId
        }
    });
    const { data, fetching, error } = result;
    if (error) {
        return (react.createElement("p", { className: "text-critical" },
            "There was an error fetching categories.",
            error.message));
    }
    if (fetching) {
        return react.createElement("span", null, "Loading...");
    }
    return (react.createElement("div", null,
        data.category.path.map((item, index) => (react.createElement("span", { key: item.name, className: "text-gray-500" },
            item.name,
            index < data.category.path.length - 1 && ' > '))),
        react.createElement("span", { className: "text-interactive pl-5" },
            react.createElement("a", { href: "#", onClick: (e) => {
                    e.preventDefault();
                    onChange();
                } }, "Change"),
            react.createElement("a", { href: "#", onClick: (e) => {
                    e.preventDefault();
                    onUnassign();
                }, className: "text-critical ml-5" }, "Unassign")),
        react.createElement("input", { type: "hidden", ...register('category_id'), value: categoryId })));
};
const CategorySelect = ({ product }) => {
    const [category, setCategory] = react.useState(product ? product.category : null);
    const modal = useModal();
    const onSelect = (categoryId) => {
        setCategory({ categoryId });
        modal.close();
    };
    return (react.createElement("div", { className: "mt-4 relative" },
        react.createElement("div", { className: "mb-2" }, "Category"),
        category && (react.createElement("div", { className: "border rounded border-[#c9cccf] mb-2 p-2" },
            react.createElement(ProductCategory, { categoryId: category.categoryId, onChange: () => modal.open(), onUnassign: () => setCategory(null) }))),
        !category && (react.createElement("a", { href: "#", onClick: (e) => {
                e.preventDefault();
                modal.open();
            }, className: "text-interactive" }, "Select category")),
        react.createElement(Modal, { title: "Select Category", isOpen: modal.isOpen, onClose: modal.close },
            react.createElement(CategorySelector, { onSelect: onSelect, onUnSelect: () => { }, selectedCategories: category ? [category] : [] }))));
};
function General({ product, setting, productTaxClasses: { items: taxClasses } }) {
    return (react.createElement(Card, { title: "General" },
        react.createElement(Card.Session, null,
            react.createElement(common_Area, { id: "productEditGeneral", coreComponents: [
                    {
                        component: {
                            default: (react.createElement(InputField, { name: "name", placeholder: "Enter product name", label: "Product Name", defaultValue: product === null || product === void 0 ? void 0 : product.name, required: true, helperText: _('Product name is required') }))
                        },
                        sortOrder: 10,
                        id: 'name'
                    },
                    {
                        component: {
                            default: (react.createElement(SKUPriceWeight, { sku: (product === null || product === void 0 ? void 0 : product.sku) || '', price: (product === null || product === void 0 ? void 0 : product.price.regular) || {
                                    value: undefined
                                }, weight: (product === null || product === void 0 ? void 0 : product.weight) || { value: undefined }, setting: setting }))
                        },
                        sortOrder: 20,
                        id: 'SKUPriceWeight'
                    },
                    {
                        component: {
                            default: react.createElement(CategorySelect, { product: product })
                        },
                        sortOrder: 22,
                        id: 'category'
                    },
                    {
                        component: {
                            default: (react.createElement(SelectField, { name: "tax_class", label: "Tax Class", options: taxClasses.map((taxClass) => ({
                                    value: taxClass.value,
                                    label: taxClass.text
                                })), defaultValue: (product === null || product === void 0 ? void 0 : product.taxClass) || '', required: true, validation: { required: true } }))
                        },
                        sortOrder: 25,
                        id: 'tax_class'
                    },
                    {
                        component: {
                            default: (react.createElement(Editor, { name: "description", label: "Description", value: product === null || product === void 0 ? void 0 : product.description }))
                        },
                        sortOrder: 30,
                        id: 'description'
                    }
                ] }))));
}
const General_layout = {
    areaId: 'leftSide',
    sortOrder: 10
};
const General_query = (/* unused pure expression or super */ null && (`
  query Query {
    product(id: getContextValue("productId", null)) {
      productId
      uuid
      name
      description
      sku
      taxClass
      price {
        regular {
          value
          currency
        }
      }
      weight {
        value
        unit
      }
      category {
        categoryId
        path {
          name
        }
      }
    }
    setting {
      weightUnit
      storeCurrency
    }
    productTaxClasses: taxClasses {
      items {
        value: taxClassId
        text: name
      }
    }
  }
`));
//# sourceMappingURL=General.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/form/RadioGroupField.js





function RadioGroupField({ name, options, label, error, wrapperClassName, helperText, className = '', direction = 'vertical', required = false, disabled = false, validation, defaultValue, ...props }) {
    const { control, formState: { errors } } = (0,index_esm/* useFormContext */.xW)();
    const fieldError = getNestedError(name, errors, error);
    const fieldId = `field-${name}`;
    const validationRules = {
        ...validation,
        ...(required &&
            !(validation === null || validation === void 0 ? void 0 : validation.required) && {
            required: _('${field} is required', { field: label || name })
        })
    };
    const containerClass = direction === 'horizontal' ? 'radio-group horizontal' : 'radio-group';
    return (react.createElement("div", { className: `form-field ${wrapperClassName} ${fieldError ? 'error' : ''}` },
        label && (react.createElement("fieldset", null,
            react.createElement("legend", null,
                label,
                required && react.createElement("span", { className: "required-indicator" }, "*"),
                helperText && react.createElement(Tooltip, { content: helperText, position: "top" })))),
        react.createElement(index_esm/* Controller */.xI, { name: name, control: control, rules: validationRules, defaultValue: defaultValue, render: ({ field }) => (react.createElement("div", { className: containerClass }, options.map((option) => (react.createElement("div", { key: option.value, className: "radio-item" },
                react.createElement("input", { type: "radio", id: `${fieldId}-${option.value}`, value: option.value, disabled: disabled || option.disabled, checked: field.value === option.value, onChange: () => field.onChange(option.value), onBlur: field.onBlur, className: className, "aria-invalid": fieldError !== undefined ? 'true' : 'false', "aria-describedby": fieldError !== undefined ? `${fieldId}-error` : undefined, ...props }),
                react.createElement("label", { htmlFor: `${fieldId}-${option.value}`, className: option.disabled ? 'disabled' : '' }, option.label)))))) }),
        fieldError && (react.createElement("p", { id: `${fieldId}-error`, className: "field-error" }, fieldError))));
}
//# sourceMappingURL=RadioGroupField.js.map
;// ./node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Inventory.js




function Inventory({ product }) {
    const inventory = (product === null || product === void 0 ? void 0 : product.inventory) || {
        qty: undefined,
        stockAvailability: undefined,
        manageStock: undefined
    };
    return (react.createElement(Card, { title: "Inventory", subdued: true },
        react.createElement(Card.Session, null,
            react.createElement(RadioGroupField, { name: "manage_stock", label: "Manage Stock", options: [
                    { value: 1, label: 'Yes' },
                    { value: 0, label: 'No' }
                ], defaultValue: inventory.manageStock === 0 ? 0 : 1, required: true })),
        react.createElement(Card.Session, null,
            react.createElement(RadioGroupField, { name: "stock_availability", label: "Stock Availability", options: [
                    { value: 1, label: 'In Stock' },
                    { value: 0, label: 'Out of Stock' }
                ], defaultValue: inventory.stockAvailability === 0 ? 0 : 1, required: true })),
        react.createElement(Card.Session, null,
            react.createElement(NumberField, { name: "qty", defaultValue: inventory.qty, placeholder: "Quantity", label: "Quantity", required: true }))));
}
const Inventory_layout = {
    areaId: 'rightSide',
    sortOrder: 15
};
const Inventory_query = (/* unused pure expression or super */ null && (`
  query Query {
    product(id: getContextValue("productId", null)) {
      inventory {
        qty
        stockAvailability
        manageStock
      }
    }
  }
`));
//# sourceMappingURL=Inventory.js.map
// EXTERNAL MODULE: ./node_modules/uniqid/index.js
var uniqid = __webpack_require__(9797);
var uniqid_default = /*#__PURE__*/__webpack_require__.n(uniqid);
;// ./node_modules/@evershop/evershop/dist/lib/util/get.js
/**
 * Get the value base on the path
 *
 * @param   {object}  obj           The Data object
 * @param   {string}  path          The path of the property "a.b.c"
 * @param   {any}  defaultValue     The default value in case the path is not existed
 *
 * @return  {any}                   The value
 */
function get(obj, path, defaultValue) {
    const pathSplit = path.split('.');
    let current = obj;
    while (pathSplit.length) {
        if (typeof current !== 'object' || current === null) {
            return defaultValue;
        }
        const key = pathSplit.shift();
        if (!(key in current)) {
            return defaultValue;
        }
        current = current[key];
    }
    return current === undefined || current === null
        ? defaultValue
        : current;
}
//# sourceMappingURL=get.js.map
;// ./node_modules/@evershop/evershop/dist/components/admin/ImageUploaderSkeleton.js

const ImageUploaderSkeleton = ({ itemCount = 5 }) => {
    const items = Array(itemCount).fill(0);
    if (itemCount === 1) {
        return (react.createElement("div", { className: "flex justify-center" },
            react.createElement("div", { className: "relative border border-dashed border-gray-300 rounded flex items-center justify-center bg-gray-50 animate-pulse", style: { aspectRatio: '1/1', width: '300px', height: '300px' } },
                react.createElement("div", { className: "absolute top-2 right-2" },
                    react.createElement("div", { className: "w-4 h-4 rounded-full bg-gray-200" })),
                react.createElement("svg", { style: { width: '30px', height: '30px' }, xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "#e5e7eb" },
                    react.createElement("path", { fillRule: "evenodd", d: "M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z", clipRule: "evenodd" })))));
    }
    return (react.createElement("div", { className: "grid grid-cols-4 gap-2" },
        react.createElement("div", { className: "col-span-2 row-span-2 relative border border-dashed border-gray-300 rounded flex items-center justify-center bg-gray-50 animate-pulse", style: { aspectRatio: '1/1', minHeight: '200px' } },
            react.createElement("svg", { style: { width: '30px', height: '30px' }, xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "#e5e7eb" },
                react.createElement("path", { fillRule: "evenodd", d: "M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z", clipRule: "evenodd" }))),
        items.slice(1, itemCount).map((_, index) => (react.createElement("div", { key: index, className: "relative border border-dashed border-gray-300 rounded flex items-center justify-center bg-gray-50 animate-pulse", style: { aspectRatio: '1/1', minHeight: '100px' } },
            react.createElement("svg", { style: { width: '30px', height: '30px' }, xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "#e5e7eb" },
                react.createElement("path", { fillRule: "evenodd", d: "M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z", clipRule: "evenodd" }))))),
        react.createElement("div", { className: "border border-dashed border-gray-300 rounded flex items-center justify-center bg-gray-50", style: { aspectRatio: '1/1', minHeight: '100px' } },
            react.createElement("svg", { style: { width: '30px', height: '30px' }, xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "#e5e7eb" },
                react.createElement("path", { fillRule: "evenodd", d: "M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z", clipRule: "evenodd" })))));
};
/* harmony default export */ const admin_ImageUploaderSkeleton = ({ ImageUploaderSkeleton });
//# sourceMappingURL=ImageUploaderSkeleton.js.map
// EXTERNAL MODULE: ./node_modules/@dnd-kit/utilities/dist/utilities.esm.js
var utilities_esm = __webpack_require__(74979);
;// ./node_modules/@evershop/evershop/dist/components/admin/ImageUploader.js











const Upload = ({ imageUploadUrl, targetPath, onUpload, isSingleMode }) => {
    const [uploading, setUploading] = react.useState(false);
    const onChange = (e) => {
        setUploading(true);
        e.persist();
        const formData = new FormData();
        for (let i = 0; i < e.target.files.length; i += 1) {
            formData.append('images', e.target.files[i]);
        }
        formData.append('targetPath', targetPath || '');
        fetch(imageUploadUrl + (targetPath || ''), {
            method: 'POST',
            body: formData,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((response) => {
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new TypeError('Something wrong. Please try again');
            }
            return response.json();
        })
            .then(async (response) => {
            if (!response.error) {
                await onUpload(get(response, 'data.files', []).map((i) => ({
                    uuid: uniqid(),
                    url: i.url,
                    path: i.path
                })));
            }
            else {
                react_toastify_esm/* toast */.oR.error(get(response, 'error.message', 'Failed!'));
            }
        })
            .catch((error) => {
            react_toastify_esm/* toast */.oR.error(error.message);
        })
            .finally(() => {
            e.target.value = null;
            setUploading(false);
        });
    };
    const id = uniqid();
    return (react.createElement("div", { className: "uploader grid-item" },
        react.createElement("div", { className: "uploader-icon" },
            react.createElement("label", { htmlFor: id }, uploading ? (react.createElement(admin_Spinner, { width: isSingleMode ? 40 : 25, height: isSingleMode ? 40 : 25 })) : (react.createElement("svg", { style: {
                    width: isSingleMode ? '30px' : '30px',
                    height: isSingleMode ? '30px' : '30px'
                }, xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor" },
                react.createElement("path", { fillRule: "evenodd", d: "M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z", clipRule: "evenodd" }))))),
        react.createElement("div", { className: "invisible" },
            react.createElement("input", { id: id, type: "file", multiple: true, onChange: onChange }))));
};
const ImageUploader_Image = ({ image, allowDelete, onDelete, isFirst, isSingleMode }) => {
    const [deleting, setDeleting] = react.useState(false);
    // Use ref to track if component is mounted
    const isMounted = react.useRef(true);
    // Set up effect for cleanup
    react.useEffect(() => {
        return () => {
            // When component unmounts, set ref to false
            isMounted.current = false;
        };
    }, []);
    // Assign classes based on mode
    const classes = isSingleMode
        ? 'image'
        : `image grid-item ${isFirst ? 'first-item' : ''}`;
    return (react.createElement("div", { className: classes, id: image.uuid },
        react.createElement("div", { className: "img" },
            react.createElement("img", { src: image.url, alt: "" })),
        allowDelete && (react.createElement("span", { role: "button", tabIndex: 0, className: `remove cursor-pointer text-critical fill-current ${isSingleMode ? 'single-mode-remove' : ''}`, onClick: async () => {
                setDeleting(true);
                await onDelete(image);
                // Only update state if component is still mounted
                if (isMounted.current) {
                    setDeleting(false);
                }
            }, onKeyDown: () => { } },
            react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: isSingleMode ? '20' : '16', height: isSingleMode ? '20' : '16', viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-trash-2" },
                react.createElement("polyline", { points: "3 6 5 6 21 6" }),
                react.createElement("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
                react.createElement("line", { x1: "10", y1: "11", x2: "10", y2: "17" }),
                react.createElement("line", { x1: "14", y1: "11", x2: "14", y2: "17" })))),
        deleting && (react.createElement("div", { className: "remove" },
            react.createElement(admin_Spinner, { width: 15, height: 15 })))));
};
const SortableImage = (props) => {
    const { attributes, listeners, setNodeRef, transform, transition } = (0,sortable_esm/* useSortable */.gl)({
        id: props.image.uuid
    });
    const style = {
        transform: utilities_esm/* CSS */.Ks.Transform.toString(transform),
        transition
    };
    return (react.createElement("div", { ref: setNodeRef, style: style, className: `grid-item ${props.isFirst ? 'first-item' : ''}`, ...attributes, ...listeners },
        react.createElement(ImageUploader_Image, { ...props })));
};
const GetUploadApiQuery = `
  query Query ($filters: [FilterInput!]) {
    imageUploadUrl: url(routeId: "imageUpload", params: [{key: "0", value: ""}])
  }
`;
const Images = ({ allowDelete = true, currentImages, imageUploadUrl, onDelete, onUpload, targetPath, isMultiple, allowSwap, onSortEnd }) => {
    const sensors = (0,core_esm/* useSensors */.FR)((0,core_esm/* useSensor */.MS)(core_esm/* PointerSensor */.AN, {
        activationConstraint: {
            distance: 8
        }
    }), (0,core_esm/* useSensor */.MS)(core_esm/* KeyboardSensor */.uN, {
        coordinateGetter: sortable_esm/* sortableKeyboardCoordinates */.JR
    }));
    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== (over === null || over === void 0 ? void 0 : over.id) && onSortEnd && currentImages) {
            const oldIndex = currentImages.findIndex((img) => img.uuid === active.id);
            const newIndex = currentImages.findIndex((img) => img.uuid === (over === null || over === void 0 ? void 0 : over.id));
            if (oldIndex !== -1 && newIndex !== -1) {
                onSortEnd(oldIndex, newIndex);
            }
        }
    };
    if (!isMultiple) {
        const hasImage = currentImages && currentImages.length > 0;
        return (react.createElement("div", { className: `single-image-container ${!hasImage ? 'no-image' : ''}` },
            hasImage ? (react.createElement(ImageUploader_Image, { key: currentImages[0].uuid, image: currentImages[0], onDelete: onDelete, allowDelete: allowDelete, isSingleMode: true })) : null,
            react.createElement(Upload, { imageUploadUrl: imageUploadUrl, targetPath: targetPath, onUpload: onUpload, isSingleMode: true })));
    }
    else if (allowSwap && currentImages && currentImages.length > 1) {
        return (react.createElement(core_esm/* DndContext */.Mp, { sensors: sensors, collisionDetection: core_esm/* closestCenter */.fp, onDragEnd: handleDragEnd },
            react.createElement(sortable_esm/* SortableContext */.gB, { items: currentImages.map((img) => img.uuid) }, currentImages.map((image, index) => (react.createElement(SortableImage, { key: image.uuid, image: image, onDelete: onDelete, allowDelete: allowDelete, isFirst: index === 0 })))),
            react.createElement(Upload, { imageUploadUrl: imageUploadUrl, targetPath: targetPath, onUpload: onUpload })));
    }
    // Multi-image mode without drag and drop
    return (react.createElement(react.Fragment, null,
        (currentImages || []).map((image, index) => (react.createElement(ImageUploader_Image, { key: image.uuid, image: image, onDelete: onDelete, allowDelete: allowDelete, isFirst: index === 0 }))),
        react.createElement(Upload, { imageUploadUrl: imageUploadUrl, targetPath: targetPath, onUpload: onUpload })));
};
function ImageUploader({ currentImages = [], isMultiple = true, allowDelete = true, onDelete, onUpload, allowSwap = true, targetPath, onSortEnd }) {
    const [images, setImages] = react.useState(currentImages.map((image) => ({
        uuid: image.uuid,
        url: image.url,
        path: image.path
    })));
    const handleSortEnd = (oldIndex, newIndex) => {
        setImages((items) => {
            return (0,sortable_esm/* arrayMove */.be)(items, oldIndex, newIndex);
        });
        if (onSortEnd) {
            onSortEnd(oldIndex, newIndex);
        }
    };
    const addImage = (imageArray) => {
        if (!isMultiple) {
            // For single image mode, replace the current image
            setImages(imageArray);
        }
        else {
            setImages(images.concat(imageArray));
        }
    };
    const removeImage = (imageUuid) => {
        setImages(images.filter((i) => i.uuid !== imageUuid));
    };
    const onDeleteFn = async (image) => {
        if (onDelete) {
            await onDelete(image);
        }
        removeImage(image.uuid);
    };
    const onUploadFn = async (imageArray) => {
        if (onUpload) {
            await onUpload(imageArray);
        }
        addImage(imageArray);
    };
    const [result] = (0,urql_es/* useQuery */.IT)({
        query: GetUploadApiQuery
    });
    const { data, fetching, error } = result;
    if (error) {
        return react.createElement("p", { className: "text-critical" },
            "There was an error:",
            error.message);
    }
    else if (fetching) {
        return react.createElement(ImageUploaderSkeleton, { itemCount: isMultiple ? 5 : 1 });
    }
    else {
        return (react.createElement("div", { className: "image-uploader-manager" },
            react.createElement("div", { id: 'image-uploader-wrapper', className: isMultiple ? 'image-list' : '' },
                react.createElement(Images, { currentImages: images, addImage: addImage, imageUploadUrl: data.imageUploadUrl, targetPath: targetPath, onDelete: onDeleteFn, onUpload: onUploadFn, allowDelete: allowDelete, allowSwap: allowSwap && isMultiple, onSortEnd: handleSortEnd, isMultiple: isMultiple }))));
    }
}
//# sourceMappingURL=ImageUploader.js.map
;// ./node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Media.js




function Media({ product }) {
    const control = (0,index_esm/* useFormContext */.xW)().control;
    const { fields, append, remove, replace } = (0,index_esm/* useFieldArray */.jz)({
        name: 'images',
        control
    });
    (0,react.useEffect)(() => {
        const images = (product === null || product === void 0 ? void 0 : product.image)
            ? [product.image].concat((product === null || product === void 0 ? void 0 : product.gallery) || [])
            : [];
        replace(images);
    }, []);
    return (react.createElement(Card, { title: "Media" },
        react.createElement(Card.Session, null,
            react.createElement(ImageUploader, { currentImages: (product === null || product === void 0 ? void 0 : product.image) ? [product.image].concat((product === null || product === void 0 ? void 0 : product.gallery) || []) : [], allowDelete: true, allowSwap: true, onDelete: (image) => {
                    const index = fields.findIndex((img) => img.uuid === image.uuid);
                    if (index !== -1) {
                        remove(index);
                    }
                }, onUpload: (images) => {
                    append(images);
                }, onSortEnd: (oldIndex, newIndex) => {
                    const newImages = [...fields];
                    const [movedImage] = newImages.splice(oldIndex, 1);
                    newImages.splice(newIndex, 0, movedImage);
                    replace(newImages);
                }, targetPath: `catalog/${Math.floor(Math.random() * (9999 - 1000)) + 1000}/${Math.floor(Math.random() * (9999 - 1000)) + 1000}` }))));
}
const Media_layout = {
    areaId: 'leftSide',
    sortOrder: 15
};
const Media_query = (/* unused pure expression or super */ null && (`
  query Query {
    product(id: getContextValue("productId", null)) {
      image {
        uuid
        path
        url
      }
      gallery {
        uuid
        path
        url
      }
    }
  }
`));
//# sourceMappingURL=Media.js.map
;// ./node_modules/@evershop/evershop/dist/components/admin/PageHeading.js



function BackIcon({ backUrl }) {
    if (!backUrl)
        return null;
    return (react.createElement("a", { href: backUrl, className: "breadcrum-icon border block border-border rounded mr-2" },
        react.createElement("span", { className: "flex items-center justify-center" },
            react.createElement("svg", { className: "text-icon", viewBox: "0 0 20 20", focusable: "false", "aria-hidden": "true" },
                react.createElement("path", { d: "M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2z" })))));
}
BackIcon.defaultProps = {
    backUrl: undefined
};
function Heading({ heading }) {
    return (react.createElement("div", { className: "self-center" },
        react.createElement("h1", { className: "page-heading-title" }, heading)));
}
function PageHeading({ backUrl, heading }) {
    if (!heading) {
        return null;
    }
    return (react.createElement("div", { className: "page-heading flex justify-between items-center" },
        react.createElement("div", { className: "flex justify-start space-x-2 items-center" },
            react.createElement(common_Area, { id: "pageHeadingLeft", noOuter: true, coreComponents: [
                    {
                        component: { default: BackIcon },
                        props: {
                            backUrl
                        },
                        sortOrder: 0,
                        id: 'breadcrumb'
                    },
                    {
                        component: { default: Heading },
                        props: {
                            heading
                        },
                        sortOrder: 0,
                        id: 'heading'
                    }
                ] })),
        react.createElement("div", { className: "flex justify-end space-x-2 items-center" },
            react.createElement(common_Area, { id: "pageHeadingRight", noOuter: true, coreComponents: [] }))));
}
PageHeading.defaultProps = {
    backUrl: undefined
};

//# sourceMappingURL=PageHeading.js.map
;// ./node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/PageHeading.js


function ProductEditPageHeading({ backUrl, product }) {
    return (react.createElement(PageHeading, { backUrl: backUrl, heading: product ? `Editing ${product.name}` : 'Create a new product' }));
}
const PageHeading_layout = {
    areaId: 'content',
    sortOrder: 5
};
const PageHeading_query = (/* unused pure expression or super */ null && (`
  query Query {
    product(id: getContextValue("productId", null)) {
      name
    }
    backUrl: url(routeId: "productGrid")
  }
`));
//# sourceMappingURL=PageHeading.js.map
;// ./node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Seo.js





function SEO({ product }) {
    const fields = [
        {
            component: {
                default: (react.createElement(InputField, { name: "url_key", label: "URL Key", placeholder: "Enter URL Key", required: true, defaultValue: product === null || product === void 0 ? void 0 : product.urlKey, validation: {
                        required: 'URL Key is required',
                        pattern: {
                            value: /^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/,
                            message: 'URL Key must be lowercase and can only contain letters, numbers, and hyphens'
                        }
                    } }))
            },
            sortOrder: 0
        },
        {
            component: {
                default: (react.createElement(InputField, { name: "meta_title", label: "Meta Title", placeholder: "Enter Meta Title", required: true, defaultValue: product === null || product === void 0 ? void 0 : product.metaTitle, validation: {
                        required: 'Meta Title is required'
                    } }))
            },
            sortOrder: 10
        },
        {
            component: {
                default: (react.createElement(InputField, { type: "hidden", name: "meta_keywords", defaultValue: product === null || product === void 0 ? void 0 : product.metaKeywords }))
            },
            sortOrder: 20
        },
        {
            component: {
                default: (react.createElement(TextareaField, { name: "meta_description", label: "Meta Description", placeholder: "Enter Meta Description", defaultValue: product === null || product === void 0 ? void 0 : product.metaDescription }))
            },
            sortOrder: 30
        }
    ];
    return (react.createElement(Card, { title: "Search engine optimize" },
        react.createElement(Card.Session, null,
            react.createElement(common_Area, { id: "productEditSeo", coreComponents: fields }))));
}
const Seo_layout = {
    areaId: 'leftSide',
    sortOrder: 60
};
const Seo_query = (/* unused pure expression or super */ null && (`
  query Query {
    product(id: getContextValue('productId', null)) {
      urlKey
      metaTitle
      metaKeywords
      metaDescription
    }
  }
`));
//# sourceMappingURL=Seo.js.map
;// ./node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Status.js



function Status({ product }) {
    return (react.createElement(Card, { title: "Product status", subdued: true },
        react.createElement(Card.Session, null,
            react.createElement(RadioGroupField, { name: "status", label: "Status", options: [
                    { value: 0, label: 'Disabled' },
                    { value: 1, label: 'Enabled' }
                ], defaultValue: (product === null || product === void 0 ? void 0 : product.status) === 0 ? 0 : 1, required: true, helperText: "Disabled products will not be visible in the store and cannot be purchased." })),
        react.createElement(Card.Session, null,
            react.createElement(RadioGroupField, { name: "visibility", label: "Visibility", options: [
                    { value: 0, label: 'Not visible individually' },
                    { value: 1, label: 'Catalog, Search' }
                ], defaultValue: (product === null || product === void 0 ? void 0 : product.visibility) === 0 ? 0 : 1, required: true, helperText: "Visibility determines where the product appears in the store. It does not affect the saleability of the product." }))));
}
const Status_layout = {
    areaId: 'rightSide',
    sortOrder: 10
};
const Status_query = (/* unused pure expression or super */ null && (`
  query Query {
    product(id: getContextValue("productId", null)) {
      status
      visibility
      category {
        value: categoryId
        label: name
      }
    }
  }
`));
//# sourceMappingURL=Status.js.map
;// ./node_modules/@evershop/evershop/dist/components/admin/FormButtons.js



const FormButtons = ({ cancelUrl, formId }) => {
    const { formState: { isSubmitting } } = (0,index_esm/* useFormContext */.xW)();
    return (react.createElement("div", { className: "form-submit-button flex border-t border-divider mt-4 pt-4 justify-between" },
        react.createElement(common_Button, { title: "Cancel", variant: "danger", outline: true, onAction: () => {
                window.location.href = cancelUrl;
            } }),
        react.createElement(common_Button, { title: "Save", onAction: () => {
                document.getElementById(formId).dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
            }, isLoading: isSubmitting })));
};

//# sourceMappingURL=FormButtons.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/form/Form.js





function Form({ form: externalForm, action, method = 'POST', formOptions, onSubmit, onSuccess, onError, successMessage = _('Saved successfully!'), errorMessage = _('Something went wrong! Please try again.'), submitBtn = true, submitBtnText = _('Save'), loading = false, children, className, noValidate = true, ...props }) {
    const theForm = externalForm ||
        (0,index_esm/* useForm */.mN)({
            shouldUnregister: true,
            ...formOptions
        });
    const { handleSubmit, formState: { isSubmitting } } = theForm;
    const defaultSubmit = async (data) => {
        if (!action) {
            return;
        }
        try {
            const response = await fetch(action, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (result.error) {
                if (onError) {
                    onError(result.error, data);
                }
                else {
                    react_toastify_esm/* toast */.oR.error(result.error.message || errorMessage);
                }
            }
            else if (onSuccess) {
                onSuccess(result, data);
            }
            else {
                react_toastify_esm/* toast */.oR.success(successMessage);
            }
        }
        catch (error) {
            if (onError) {
                onError(errorMessage || (error instanceof Error ? error.message : ''), data);
            }
            else {
                react_toastify_esm/* toast */.oR.error(errorMessage || (error instanceof Error ? error.message : ''));
            }
        }
    };
    const handleFormSubmit = onSubmit || defaultSubmit;
    return (react.createElement(index_esm/* FormProvider */.Op, { ...theForm },
        react.createElement("form", { onSubmit: handleSubmit(handleFormSubmit), className: className, noValidate: noValidate, ...props },
            react.createElement("fieldset", { disabled: loading }, children),
            submitBtn && (react.createElement("div", { className: "mt-4" },
                react.createElement(common_Button, { title: submitBtnText, type: "submit", onAction: () => {
                        handleSubmit(handleFormSubmit);
                    }, isLoading: isSubmitting || loading }))))));
}


//# sourceMappingURL=Form.js.map
;// ./node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productNew/ProductNewForm.js






function ProductNewForm({ action, gridUrl }) {
    const form = (0,index_esm/* useForm */.mN)({
        shouldUnregister: true
    });
    const submit = async (data) => {
        try {
            const images = (data.images || []).map((image) => image.url);
            data.images = images;
            const response = await fetch(action, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...data, action: undefined, method: undefined })
            });
            const result = await response.json();
            if (result.error) {
                react_toastify_esm/* toast */.oR.error(result.error.message);
            }
            else {
                react_toastify_esm/* toast */.oR.success('Product created successfully');
                const editUrl = result.data.links.find((link) => link.rel === 'edit').href;
                setTimeout(() => {
                    window.location.href = editUrl;
                }, 1500);
            }
        }
        catch (error) {
            react_toastify_esm/* toast */.oR.error(error.message);
        }
    };
    return (react.createElement(Form, { id: "productNewForm", method: "POST", action: action, form: form, onSubmit: submit, submitBtn: false },
        react.createElement("div", { className: "grid grid-cols-3 gap-x-5 grid-flow-row " },
            react.createElement("div", { className: "col-span-2 grid grid-cols-1 gap-5 auto-rows-max" },
                react.createElement(common_Area, { id: "leftSide", noOuter: true })),
            react.createElement("div", { className: "col-span-1 grid grid-cols-1 gap-5 auto-rows-max" },
                react.createElement(common_Area, { id: "rightSide", noOuter: true }))),
        react.createElement(FormButtons, { formId: "productNewForm", cancelUrl: gridUrl })));
}
const ProductNewForm_layout = {
    areaId: 'content',
    sortOrder: 10
};
const ProductNewForm_query = (/* unused pure expression or super */ null && (`
  query Query {
    action: url(routeId: "createProduct"),
    gridUrl: url(routeId: "productGrid")
  }
`));
//# sourceMappingURL=ProductNewForm.js.map
;// ./node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/all/ShippingSettingMenu.js



function ShippingSettingMenu({ shippingSettingUrl }) {
    return (react.createElement(Card.Session, { title: react.createElement("a", { href: shippingSettingUrl }, "Shipping Setting") },
        react.createElement("div", null, "Where you ship, shipping methods and delivery fee")));
}
ShippingSettingMenu.propTypes = {
    shippingSettingUrl: (prop_types_default()).string.isRequired
};
const ShippingSettingMenu_layout = {
    areaId: 'settingPageMenu',
    sortOrder: 15
};
const ShippingSettingMenu_query = (/* unused pure expression or super */ null && (`
  query Query {
    shippingSettingUrl: url(routeId: "shippingSetting")
  }
`));
//# sourceMappingURL=ShippingSettingMenu.js.map
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/DocumentIcon.js
var DocumentIcon = __webpack_require__(4101);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/PuzzlePieceIcon.js
var PuzzlePieceIcon = __webpack_require__(69750);
;// ./node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CmsMenuGroup.js





function CmsMenuGroup({ cmsPageGrid, widgetGrid }) {
    return (react.createElement(NavigationItemGroup, { id: "cmsMenuGroup", name: "CMS", items: [
            {
                Icon: DocumentIcon/* default */.A,
                url: cmsPageGrid,
                title: 'Pages'
            },
            {
                Icon: PuzzlePieceIcon/* default */.A,
                url: widgetGrid,
                title: 'Widgets'
            }
        ] }));
}
CmsMenuGroup.propTypes = {
    cmsPageGrid: (prop_types_default()).string.isRequired,
    widgetGrid: (prop_types_default()).string.isRequired
};
const CmsMenuGroup_layout = {
    areaId: 'adminMenu',
    sortOrder: 60
};
const CmsMenuGroup_query = (/* unused pure expression or super */ null && (`
  query Query {
    cmsPageGrid: url(routeId:"cmsPageGrid")
    widgetGrid: url(routeId:"widgetGrid")
  }
`));
//# sourceMappingURL=CmsMenuGroup.js.map
;// ./node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CopyRight.js


function CopyRight({ themeConfig: { copyRight } }) {
    return (react.createElement("div", { className: "copyright" },
        react.createElement("span", null, copyRight)));
}
CopyRight.propTypes = {
    themeConfig: prop_types_default().shape({
        copyRight: (prop_types_default()).string.isRequired
    })
};
CopyRight.defaultProps = {
    themeConfig: {
        copyRight: '© 2025 Evershop. All Rights Reserved.'
    }
};
const CopyRight_layout = {
    areaId: 'footerLeft',
    sortOrder: 10
};
const CopyRight_query = (/* unused pure expression or super */ null && (`
  query query {
    themeConfig {
      copyRight
    }
  }
`));
//# sourceMappingURL=CopyRight.js.map
;// ./node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Logo.js

function Logo({ dashboardUrl }) {
    return (react.createElement("div", { className: "logo w-9 h-auto flex items-center" },
        react.createElement("a", { href: dashboardUrl, className: "flex items-end" },
            react.createElement("svg", { width: "256", height: "282", viewBox: "0 0 256 282", fill: "none", className: "w-8 h-auto", xmlns: "http://www.w3.org/2000/svg" },
                react.createElement("path", { d: "M63.6632 35.0703L0.336842 70.1406L0.134737 140.668L0 211.26L63.7305 246.459C98.7621 265.799 127.663 281.658 128 281.658C128.337 281.658 145.785 272.117 166.872 260.513C187.891 248.844 216.589 233.05 230.602 225.314L256 211.26V196.174V181.024L254.518 181.798C253.642 182.249 224.943 198.044 190.72 216.997C156.429 235.951 128.067 251.294 127.663 251.229C127.192 251.101 104.556 238.723 77.2716 223.637L27.6211 196.239V140.797V85.3549L50.0547 72.9771C62.3158 66.2081 84.8168 53.8303 99.9747 45.4496C115.065 37.0688 127.731 30.2353 128 30.2353C128.269 30.2353 145.853 39.8409 167.074 51.574L228.918 85.3549L238.672 79.8626L256 70.1406L228.918 55.3775C207.495 43.2577 128.472 -0.0643921 127.798 9.15527e-05C127.394 9.15527e-05 98.4926 15.7946 63.6632 35.0703Z", fill: "#008060" }),
                react.createElement("path", { d: "M192.674 105.146C158.046 124.293 129.213 140.152 128.606 140.281C127.933 140.475 111.023 131.449 88.9937 119.329L50.5263 98.055V113.334L50.5937 128.548L87.9832 149.178C108.531 160.524 126.046 170.065 126.922 170.387C128.269 170.839 137.701 165.875 191.731 136.026C226.493 116.751 255.192 100.827 255.528 100.569C255.798 100.311 255.933 93.4133 255.865 85.226L255.663 70.334L192.674 105.146Z", fill: "#008060" }),
                react.createElement("path", { d: "M248.926 129.451C245.221 131.449 216.657 147.244 185.398 164.521C154.139 181.798 128.337 195.917 128 195.917C127.663 195.917 110.215 186.375 89.1284 174.771L50.8632 153.626L50.6611 168.453C50.5263 179.8 50.7284 183.474 51.3347 184.055C52.6147 185.15 127.192 226.216 128 226.216C128.674 226.216 254.451 156.914 255.528 156.011C255.798 155.753 255.933 148.855 255.865 140.603L255.663 125.712L248.926 129.451Z", fill: "#008060" })))));
}
const Logo_layout = {
    areaId: 'header',
    sortOrder: 10
};
const Logo_query = (/* unused pure expression or super */ null && (`
  query query {
    dashboardUrl: url(routeId:"dashboard")
  }
`));
//# sourceMappingURL=Logo.js.map
;// ./node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Navigation.js



function AdminNavigation() {
    return (react.createElement("div", { className: "admin-nav-container" },
        react.createElement("div", { className: "admin-nav" },
            react.createElement("ul", { className: "list-unstyled" },
                react.createElement(common_Area, { id: "adminMenu", noOuter: true })))));
}
const Navigation_layout = {
    areaId: 'adminNavigation',
    sortOrder: 10
};
//# sourceMappingURL=Navigation.js.map
;// ./node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Notification.js





function Notification() {
    const notify = (type, message) => {
        switch (type) {
            case 'success':
                react_toastify_esm/* toast */.oR.success(message);
                break;
            case 'error':
                react_toastify_esm/* toast */.oR.error(message);
                break;
            case 'info':
                react_toastify_esm/* toast */.oR.info(message);
                break;
            case 'warning':
                react_toastify_esm/* toast */.oR.warning(message);
                break;
            default:
                (0,react_toastify_esm/* toast */.oR)(message);
        }
    };
    const context = useAppState();
    react.useEffect(() => {
        get(context, 'notifications', []).forEach((n) => notify(n.type, n.message));
    }, []);
    return (react.createElement("div", null,
        react.createElement(react_toastify_esm/* ToastContainer */.N9, { hideProgressBar: true, autoClose: false })));
}
const Notification_layout = {
    areaId: 'body',
    sortOrder: 10
};
//# sourceMappingURL=Notification.js.map
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/HomeIcon.js
var HomeIcon = __webpack_require__(43603);
;// ./node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/QuickLinks.js




function QuickLinks({ dashboard }) {
    return (react.createElement(NavigationItemGroup, { id: "quickLinks", name: "Quick links", items: [
            {
                Icon: HomeIcon/* default */.A,
                url: dashboard,
                title: 'Dashboard'
            }
        ] }));
}
QuickLinks.propTypes = {
    dashboard: (prop_types_default()).string.isRequired
};
const QuickLinks_layout = {
    areaId: 'adminMenu',
    sortOrder: 10
};
const QuickLinks_query = (/* unused pure expression or super */ null && (`
  query Query {
    dashboard: url(routeId: "dashboard")
  }
`));
//# sourceMappingURL=QuickLinks.js.map
;// ./node_modules/@evershop/evershop/dist/components/admin/Dot.js


function Dot({ size = '1rem', variant = 'primary' }) {
    const dotVariant = [
        'default',
        'success',
        'info',
        'attention',
        'critical',
        'warning',
        'new'
    ].includes(variant)
        ? `${variant}`
        : 'default';
    return (react.createElement("span", { className: `${dotVariant} dot`, style: { width: size, height: size } }));
}
//# sourceMappingURL=Dot.js.map
;// ./node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/search/NoResult.js


function NoResult({ keyword = '', resourseLinks = [] }) {
    return (react.createElement("div", { className: "no-result items-center text-center" },
        react.createElement("h3", null,
            "No results for \"",
            keyword,
            "\""),
        react.createElement("div", null, "TRY OTHER RESOURCES"),
        react.createElement("div", { className: "grid grid-cols-2 mt-2" }, resourseLinks.map((link, index) => (react.createElement("div", { key: index, className: "flex space-x-2 justify-center items-center" },
            react.createElement(Dot, { variant: "info" }),
            react.createElement("a", { href: link.url, className: "text-divider hover:underline" }, link.name)))))));
}
//# sourceMappingURL=NoResult.js.map
;// ./node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/search/Results.js


function Results({ keyword, results = {} }) {
    const { customers = [], products = [], orders = [] } = results;
    return (react.createElement("div", { className: "results" },
        react.createElement("h3", null,
            "Results for \"",
            keyword,
            "\""),
        react.createElement("div", { className: "item-list" },
            products.items.length > 0 && (react.createElement("div", { className: "item-category flex flex-col space-x-2" },
                react.createElement("div", { className: "result-category" }, "Products"),
                products.items.map((product, index) => (react.createElement("a", { href: product.url, key: index },
                    react.createElement("div", { className: "font-bold" }, product.name),
                    react.createElement("div", null,
                        "#",
                        product.sku)))))),
            customers.items.length > 0 && (react.createElement("div", { className: "item-category flex flex-col space-x-2" },
                react.createElement("div", { className: "result-category" }, "Customers"),
                customers.items.map((customer, index) => (react.createElement("a", { href: customer.url, key: index },
                    react.createElement("div", { className: "font-bold" }, customer.fullName),
                    react.createElement("div", null, customer.email)))))),
            orders.items.length > 0 && (react.createElement("div", { className: "item-category flex flex-col space-x-2" },
                react.createElement("div", { className: "result-category" }, "Orders"),
                orders.items.map((order, index) => (react.createElement("a", { href: order.url, key: index },
                    react.createElement("div", { className: "font-bold" },
                        "#",
                        order.orderNumber),
                    react.createElement("div", null, order.email)))))))));
}
Results.propTypes = {
    keyword: prop_types.string,
    results: prop_types.arrayOf(prop_types.shape({
        items: prop_types.arrayOf(prop_types.shape({
            url: prop_types.string,
            name: prop_types.string,
            description: prop_types.string
        }))
    }))
};
Results.defaultProps = {
    keyword: undefined,
    results: []
};
//# sourceMappingURL=Results.js.map
;// ./node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/SearchBox.js






const useClickOutside = (ref, callback) => {
    const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };
    react.useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
};
const SearchBox_SearchQuery = `
  query Query ($filters: [FilterInput]) {
    customers(filters: $filters) {
      items {
        customerId
        uuid
        fullName
        email
        url: editUrl
      }
    }
    products(filters: $filters) {
      items {
        productId
        uuid
        sku
        name
        url: editUrl
      }
    }
    orders(filters: $filters) {
      items {
        orderId
        uuid
        orderNumber
        url: editUrl
      }
    }
  }
`;
function SearchBox({ resourceLinks }) {
    const [keyword, setKeyword] = react.useState('');
    const [showResult, setShowResult] = (0,react.useState)(false);
    const [loading, setLoading] = (0,react.useState)(false);
    const InputRef = (0,react.useRef)(null);
    const clickRef = react.useRef(null);
    const onClickOutside = () => {
        if (InputRef.current !== document.activeElement) {
            setShowResult(false);
        }
    };
    useClickOutside(clickRef, onClickOutside);
    const [result, reexecuteQuery] = (0,urql_es/* useQuery */.IT)({
        query: SearchBox_SearchQuery,
        variables: {
            filters: keyword
                ? [{ key: 'keyword', operation: 'eq', value: keyword }]
                : []
        },
        pause: true
    });
    const { data, fetching } = result;
    react.useEffect(() => {
        setLoading(true);
        if (keyword) {
            setShowResult(true);
        }
        else {
            setShowResult(false);
        }
        const timer = setTimeout(() => {
            if (keyword) {
                reexecuteQuery({ requestPolicy: 'network-only' });
                setLoading(false);
            }
        }, 1500);
        return () => clearTimeout(timer);
    }, [keyword]);
    return (react.createElement("div", { className: "search-box max-w-lg" },
        react.createElement("div", { className: "form-field flex items-center justify-start relative mb-0" },
            react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { width: '1rem', height: '1rem' }, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", className: "absolute left-2 pointer-events-none" },
                react.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" })),
            react.createElement("input", { type: "text", placeholder: "Search", className: "!pl-7 bg-gray-50 focus:bg-white", ref: InputRef, onChange: (e) => setKeyword(e.target.value) })),
        showResult && (react.createElement("div", { className: "search-result", ref: clickRef },
            (loading || fetching) && (react.createElement("div", { className: "p-2 flex justify-center items-center" },
                react.createElement(admin_Spinner, { width: 25, height: 25 }))),
            !keyword && (react.createElement("div", { className: "text-center" },
                react.createElement("span", null, "Search for products, order and other resources"))),
            (data === null || data === void 0 ? void 0 : data.products.items.length) === 0 &&
                (data === null || data === void 0 ? void 0 : data.customers.items.length) === 0 &&
                (data === null || data === void 0 ? void 0 : data.orders.items.length) === 0 &&
                keyword &&
                !loading && (react.createElement(NoResult, { keyword: keyword, resourseLinks: resourceLinks })),
            data &&
                !loading &&
                !fetching &&
                ((data === null || data === void 0 ? void 0 : data.products.items.length) > 0 ||
                    (data === null || data === void 0 ? void 0 : data.customers.items.length) > 0 ||
                    (data === null || data === void 0 ? void 0 : data.orders.items.length) > 0) && (react.createElement(Results, { keyword: keyword, results: data }))))));
}
const SearchBox_layout = {
    areaId: 'header',
    sortOrder: 20
};
//# sourceMappingURL=SearchBox.js.map
;// ./node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Version.js


function Version({ version }) {
    return (react.createElement("div", { className: "version" },
        react.createElement("span", null,
            "Version ",
            version)));
}
Version.propTypes = {
    version: (prop_types_default()).string.isRequired
};
const Version_layout = {
    areaId: 'footerLeft',
    sortOrder: 20
};
const Version_query = (/* unused pure expression or super */ null && (`
  query query {
    version
  }
`));
//# sourceMappingURL=Version.js.map
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/UsersIcon.js
var UsersIcon = __webpack_require__(86392);
;// ./node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js




function CustomerMenuGroup({ customerGrid }) {
    return (react.createElement(NavigationItemGroup, { id: "customerMenuGroup", name: "Customer", items: [
            {
                Icon: UsersIcon/* default */.A,
                url: customerGrid,
                title: 'Customers'
            }
        ] }));
}
CustomerMenuGroup.propTypes = {
    customerGrid: (prop_types_default()).string.isRequired
};
const CustomerMenuGroup_layout = {
    areaId: 'adminMenu',
    sortOrder: 40
};
const CustomerMenuGroup_query = (/* unused pure expression or super */ null && (`
  query Query {
    customerGrid: url(routeId:"customerGrid")
  }
`));
//# sourceMappingURL=CustomerMenuGroup.js.map
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/CubeIcon.js
var CubeIcon = __webpack_require__(1333);
;// ./node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js




function OmsMenuGroup({ orderGrid }) {
    return (react.createElement(NavigationItemGroup, { id: "omsMenuGroup", name: "Sale", items: [
            {
                Icon: CubeIcon/* default */.A,
                url: orderGrid,
                title: 'Orders'
            }
        ] }));
}
OmsMenuGroup.propTypes = {
    orderGrid: (prop_types_default()).string.isRequired
};
const OmsMenuGroup_layout = {
    areaId: 'adminMenu',
    sortOrder: 30
};
const OmsMenuGroup_query = (/* unused pure expression or super */ null && (`
  query Query {
    orderGrid: url(routeId:"orderGrid")
  }
`));
//# sourceMappingURL=OmsMenuGroup.js.map
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/GiftIcon.js
var GiftIcon = __webpack_require__(24350);
;// ./node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js



function CouponMenuGroup_CatalogMenuGroup({ couponGrid }) {
    return (react.createElement(NavigationItemGroup, { id: "couponMenuGroup", name: "Promotion", items: [
            {
                Icon: GiftIcon/* default */.A,
                url: couponGrid,
                title: 'Coupons'
            }
        ] }));
}
const CouponMenuGroup_layout = {
    areaId: 'adminMenu',
    sortOrder: 50
};
const CouponMenuGroup_query = (/* unused pure expression or super */ null && (`
  query Query {
    couponGrid: url(routeId:"couponGrid")
  }
`));
//# sourceMappingURL=CouponMenuGroup.js.map
;// ./node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js



function NewCouponQuickLink_NewProductQuickLink({ couponNew }) {
    return react.createElement(NavigationItem, { Icon: GiftIcon/* default */.A, title: "New Coupon", url: couponNew });
}
const NewCouponQuickLink_layout = {
    areaId: 'quickLinks',
    sortOrder: 30
};
const NewCouponQuickLink_query = (/* unused pure expression or super */ null && (`
  query Query {
    couponNew: url(routeId:"couponNew")
  }
`));
//# sourceMappingURL=NewCouponQuickLink.js.map
;// ./node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js


function PaymentSettingMenu({ paymentSettingUrl }) {
    return (react.createElement(Card.Session, { title: react.createElement("a", { href: paymentSettingUrl }, "Payment Setting") },
        react.createElement("div", null, "Configure the available payment methods")));
}
const PaymentSettingMenu_layout = {
    areaId: 'settingPageMenu',
    sortOrder: 10
};
const PaymentSettingMenu_query = (/* unused pure expression or super */ null && (`
  query Query {
    paymentSettingUrl: url(routeId: "paymentSetting")
  }
`));
//# sourceMappingURL=PaymentSettingMenu.js.map
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/CogIcon.js
var CogIcon = __webpack_require__(35351);
;// ./node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js



function SettingMenuGroup_CmsMenuGroup({ storeSetting }) {
    return (react.createElement(NavigationItemGroup, { id: "settingMenuGroup", name: "Setting", Icon: () => react.createElement(CogIcon/* default */.A, { width: 15, height: 15 }), url: storeSetting }));
}
const SettingMenuGroup_layout = {
    areaId: 'adminMenu',
    sortOrder: 500
};
const SettingMenuGroup_query = (/* unused pure expression or super */ null && (`
  query Query {
    storeSetting: url(routeId:"storeSetting")
  }
`));
//# sourceMappingURL=SettingMenuGroup.js.map
;// ./node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js


function StoreSettingMenu({ storeSettingUrl }) {
    return (react.createElement(Card.Session, { title: react.createElement("a", { href: storeSettingUrl }, "Store Setting") },
        react.createElement("div", null, "Configure your store information")));
}
const StoreSettingMenu_layout = {
    areaId: 'settingPageMenu',
    sortOrder: 5
};
const StoreSettingMenu_query = (/* unused pure expression or super */ null && (`
  query Query {
    storeSettingUrl: url(routeId: "storeSetting")
  }
`));
//# sourceMappingURL=StoreSettingMenu.js.map
;// ./node_modules/@evershop/evershop/dist/modules/tax/pages/admin/all/TaxSettingMenu.js


function TaxSettingMenu({ taxSettingUrl }) {
    return (react.createElement(Card.Session, { title: react.createElement("a", { href: taxSettingUrl }, "Tax Setting") },
        react.createElement("div", null, "Configure tax classes and tax rates")));
}
const TaxSettingMenu_layout = {
    areaId: 'settingPageMenu',
    sortOrder: 20
};
const TaxSettingMenu_query = (/* unused pure expression or super */ null && (`
  query Query {
    taxSettingUrl: url(routeId: "taxSetting")
  }
`));
//# sourceMappingURL=TaxSettingMenu.js.map
;// ./node_modules/@evershop/evershop/dist/modules/catalog/components/CollectionProductsSetting.js






const CollectionProductsSetting_SearchQuery = `
  query Query ($filters: [FilterInput!]) {
    collections(filters: $filters) {
      items {
        collectionId
        uuid
        code
        name
      }
      total
    }
  }
`;
function CollectionProductsSetting({ collectionProductsWidget: { collection, count, countPerRow } }) {
    const limit = 10;
    const [inputValue, setInputValue] = react.useState(null);
    const [selectedCollection, setSelectedCollection] = react.useState(collection);
    const [page, setPage] = react.useState(1);
    const { register, setValue } = (0,index_esm/* useFormContext */.xW)();
    const [result, reexecuteQuery] = (0,urql_es/* useQuery */.IT)({
        query: CollectionProductsSetting_SearchQuery,
        variables: {
            filters: inputValue
                ? [
                    { key: 'name', operation: 'like', value: inputValue },
                    { key: 'page', operation: 'eq', value: page.toString() },
                    { key: 'limit', operation: 'eq', value: limit.toString() }
                ]
                : [
                    { key: 'limit', operation: 'eq', value: limit.toString() },
                    { key: 'page', operation: 'eq', value: page.toString() }
                ]
        },
        pause: true
    });
    react.useEffect(() => {
        reexecuteQuery({ requestPolicy: 'network-only' });
    }, []);
    react.useEffect(() => {
        const timer = setTimeout(() => {
            if (inputValue !== null) {
                reexecuteQuery({ requestPolicy: 'network-only' });
            }
        }, 1500);
        return () => clearTimeout(timer);
    }, [inputValue]);
    react.useEffect(() => {
        reexecuteQuery({ requestPolicy: 'network-only' });
    }, [page]);
    const { data, fetching, error } = result;
    if (error) {
        return (react.createElement("p", { className: "text-red-500" },
            "There was an error fetching collections.",
            error.message));
    }
    return (react.createElement("div", null,
        react.createElement(Card.Session, { title: "Select a collection" },
            react.createElement("div", null,
                react.createElement("div", { className: "" },
                    react.createElement("div", { className: "form-field" },
                        react.createElement("input", { type: "text", value: inputValue || '', placeholder: "Search collections", onChange: (e) => setInputValue(e.target.value) })),
                    react.createElement("input", { type: "hidden", ...register('settings[collection]'), defaultValue: selectedCollection })),
                fetching && (react.createElement("div", { className: "p-2 border border-divider rounded flex justify-center items-center" },
                    react.createElement(admin_Spinner, { width: 25, height: 25 }))),
                !fetching && data && (react.createElement("div", { className: "divide-y" },
                    data.collections.items.length === 0 && (react.createElement("div", { className: "p-2 border border-divider rounded flex justify-center items-center" }, inputValue ? (react.createElement("p", null,
                        "No collections found for query \"",
                        inputValue,
                        "\u201D")) : (react.createElement("p", null, "You have no collections to display")))),
                    data.collections.items.map((collection) => (react.createElement("div", { key: collection.uuid, className: "grid grid-cols-8 gap-5 py-3 border-divider items-center" },
                        react.createElement("div", { className: "col-span-6" },
                            react.createElement("h3", null, collection.name)),
                        react.createElement("div", { className: "col-span-2 flex items-center justify-end" },
                            react.createElement("input", { type: "radio", checked: collection.code === selectedCollection, onChange: (e) => {
                                    if (e.target.checked) {
                                        setSelectedCollection(collection.code);
                                        setValue('settings[collection]', collection.code, {
                                            shouldDirty: true
                                        });
                                    }
                                }, className: "ml-2 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" }))))))))),
        react.createElement(Card.Session, { title: "Settings" },
            react.createElement("div", { className: "mt-3" },
                react.createElement(NumberField, { name: "settings[count]", label: "Total products", defaultValue: count, required: true, validation: { min: 1, required: 'Count is required' }, min: 1, placeholder: "Number of products" }),
                react.createElement("div", { className: "form-field" },
                    react.createElement(NumberField, { name: "settings[countPerRow]", label: "Products per row", min: 1, validation: { min: 1, required: 'Count per row is required' }, required: true, defaultValue: countPerRow, placeholder: "Number of products per row" }))))));
}
/* harmony default export */ const components_CollectionProductsSetting = (CollectionProductsSetting);
const CollectionProductsSetting_query = (/* unused pure expression or super */ null && (`
  query Query($collection: String, $count: Int, $countPerRow: Int) {
    collectionProductsWidget(collection: $collection, count: $count, countPerRow: $countPerRow) {
      collection
      count
      countPerRow
    }
  }
`));
const CollectionProductsSetting_variables = (/* unused pure expression or super */ null && (`{
  collection: getWidgetSetting("collection"),
  count: getWidgetSetting("count"),
  countPerRow: getWidgetSetting("countPerRow")
}`));
//# sourceMappingURL=CollectionProductsSetting.js.map
;// ./node_modules/@evershop/evershop/dist/modules/cms/components/TextBlockSetting.js




function TextBlockSetting({ textWidget: { text, className } }) {
    const { register, watch, setValue } = (0,index_esm/* useFormContext */.xW)();
    const editorValue = watch('temp_editor_text');
    react.useEffect(() => {
        if (editorValue) {
            setValue('settings.text', JSON.stringify(editorValue));
        }
    }, [editorValue, setValue]);
    return (react.createElement("div", null,
        react.createElement(InputField, { label: "Custom CSS classes", name: "settings.className", defaultValue: className, helperText: "Custom CSS classes for the text block" }),
        react.createElement("input", { type: "hidden", ...register('settings.text'), defaultValue: typeof text === 'string' ? text : JSON.stringify(text) }),
        react.createElement(Editor, { name: "temp_editor_text", label: "Content", value: typeof text === 'string' ? JSON.parse(text) : text })));
}
const TextBlockSetting_query = (/* unused pure expression or super */ null && (`
  query Query($text: String, $className: String) {
    textWidget(text: $text, className: $className) {
      text
      className
    }
  }
`));
const TextBlockSetting_variables = (/* unused pure expression or super */ null && (`{
  text: getWidgetSetting("text"),
  className: getWidgetSetting("className")
}`));
//# sourceMappingURL=TextBlockSetting.js.map
;// ./node_modules/@evershop/evershop/dist/components/common/form/CheckboxField.js





function CheckboxField({ name, label, error, wrapperClassName, helperText, required, validation, options, defaultValue, direction = 'vertical', className, disabled, ...props }) {
    const { control, formState: { errors } } = (0,index_esm/* useFormContext */.xW)();
    const fieldError = getNestedError(name, errors, error);
    const fieldId = `field-${name}`;
    const validationRules = {
        ...validation,
        ...(required &&
            !(validation === null || validation === void 0 ? void 0 : validation.required) && {
            required: _('${field} is required', { field: label || name })
        })
    };
    const containerClass = direction === 'horizontal' ? 'checkbox-group horizontal' : 'checkbox-group';
    if (!options || options.length === 0) {
        return (react.createElement("div", { className: `form-field ${wrapperClassName} ${fieldError ? 'error' : ''}` },
            react.createElement("div", { className: containerClass },
                react.createElement("div", { className: "checkbox-item" },
                    react.createElement(index_esm/* Controller */.xI, { name: name, control: control, rules: validationRules, defaultValue: defaultValue, render: ({ field }) => (react.createElement("input", { type: "checkbox", id: fieldId, checked: !!field.value, onChange: (e) => field.onChange(e.target.checked), onBlur: field.onBlur, disabled: disabled, className: className, "aria-invalid": fieldError !== undefined ? 'true' : 'false', "aria-describedby": fieldError !== undefined
                                ? `${fieldId}-error`
                                : helperText
                                    ? `${fieldId}-helper`
                                    : undefined, ...props })) }),
                    label && (react.createElement("label", { htmlFor: fieldId },
                        label,
                        required && react.createElement("span", { className: "required-indicator" }, "*"),
                        helperText && react.createElement(Tooltip, { content: helperText, position: "top" }))))),
            fieldError && (react.createElement("p", { id: `${fieldId}-error`, className: "field-error" }, fieldError))));
    }
    return (react.createElement("div", { className: `${wrapperClassName} ${fieldError ? 'error' : ''}` },
        label && (react.createElement("fieldset", null,
            react.createElement("legend", null,
                label,
                required && react.createElement("span", { className: "required-indicator" }, "*"),
                helperText && react.createElement(Tooltip, { content: helperText, position: "top" })),
            react.createElement(index_esm/* Controller */.xI, { name: name, control: control, rules: validationRules, defaultValue: defaultValue, render: ({ field }) => (react.createElement("div", { className: containerClass }, options.map((option, index) => {
                    const isChecked = Array.isArray(field.value)
                        ? field.value.includes(option.value)
                        : false;
                    return (react.createElement("div", { key: option.value, className: "checkbox-item" },
                        react.createElement("input", { type: "checkbox", id: `${fieldId}-${index}`, value: option.value, disabled: disabled || option.disabled, checked: isChecked, onChange: (e) => {
                                const currentValues = Array.isArray(field.value)
                                    ? field.value
                                    : [];
                                if (e.target.checked) {
                                    field.onChange([...currentValues, option.value]);
                                }
                                else {
                                    field.onChange(currentValues.filter((val) => val !== option.value));
                                }
                            }, onBlur: field.onBlur, className: className, "aria-invalid": fieldError ? 'true' : 'false', "aria-describedby": fieldError ? `${fieldId}-error` : undefined, ...props }),
                        react.createElement("label", { htmlFor: `${fieldId}-${index}`, className: option.disabled ? 'disabled' : '' }, option.label)));
                }))) }))),
        fieldError && (react.createElement("p", { id: `${fieldId}-error`, className: "field-error" }, fieldError))));
}
//# sourceMappingURL=CheckboxField.js.map
// EXTERNAL MODULE: ./node_modules/react-select/creatable/dist/react-select-creatable.esm.js + 1 modules
var react_select_creatable_esm = __webpack_require__(6373);
;// ./node_modules/@evershop/evershop/dist/modules/cms/components/BasicMenuSetting.js

















const menuQuery = `
  query Query ($filters: [FilterInput]) {
    categories (filters: $filters) {
      items {
        value: uuid,
        label: name
        path {
          name
        }
      }
    }
    cmsPages (filters: $filters) {
      items {
        value: uuid,
        label: name
      }
    }
  }
`;
const SortableMenuItem = ({ item, updateItem, deleteItem, isChild = false }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0,sortable_esm/* useSortable */.gl)({ id: item.id });
    const style = {
        transform: utilities_esm/* CSS */.Ks.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1
    };
    const modal = useModal();
    const [itemInEdit, setItemInEdit] = react.useState(item);
    const addChildren = (i) => {
        updateItem({
            ...item,
            children: [...item.children, i]
        });
    };
    const updateItemFunc = (i) => {
        if (i.id === item.id) {
            updateItem(i);
        }
        else {
            addChildren(i);
        }
        modal.close();
    };
    return (react.createElement("div", { ref: setNodeRef, style: style, className: "flex justify-between py-2 px-2 bg-white border rounded mb-2" },
        react.createElement("div", { className: "flex justify-start gap-3 items-center" },
            react.createElement("button", { type: "button", className: "cursor-move p-1", ...attributes, ...listeners },
                react.createElement("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "#949494", width: 20, height: 20 },
                    react.createElement("g", null,
                        react.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
                        react.createElement("path", { fillRule: "nonzero", d: "M14 6h2v2h5a1 1 0 0 1 1 1v7.5L16 13l.036 8.062 2.223-2.15L20.041 22H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zm8 11.338V21a1 1 0 0 1-.048.307l-1.96-3.394L22 17.338zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z" })))),
            react.createElement("div", null, item.name)),
        react.createElement("div", { className: "flex justify-end gap-3 items-center" },
            react.createElement("button", { type: "button", className: "text-interactive", onClick: () => {
                    setItemInEdit(item);
                    modal.open();
                } }, "Edit"),
            !isChild && (react.createElement("button", { type: "button", className: "text-interactive", onClick: () => {
                    setItemInEdit({
                        id: uniqid_default()(),
                        name: '',
                        url: '',
                        type: 'category',
                        uuid: '',
                        children: []
                    });
                    modal.open();
                } }, "Add child")),
            react.createElement("button", { type: "button", className: "text-critical", onClick: () => deleteItem(item) }, "Delete")),
        react.createElement(Modal, { title: `Edit Menu Item: ${itemInEdit.name}`, onClose: modal.close, isOpen: modal.isOpen },
            react.createElement(MenuSettingPopup, { item: itemInEdit, updateItem: updateItemFunc }))));
};
const MenuSettingPopup = ({ item, updateItem }) => {
    var _a;
    const [currentItem, setCurrentItem] = react.useState(item);
    const [err, setErr] = react.useState(null);
    const [result] = (0,urql_es/* useQuery */.IT)({
        query: menuQuery,
        variables: {
            filters: []
        }
    });
    const { data, fetching, error } = result;
    if (fetching) {
        return (react.createElement("div", { className: "flex justify-center items-center" },
            react.createElement(admin_Spinner, { width: 30, height: 30 })));
    }
    if (error) {
        return (react.createElement("div", { className: "flex justify-center items-center" },
            react.createElement("p", { className: "text-critical" }, error.message)));
    }
    const groupOptions = [
        {
            label: 'Categories',
            options: data.categories.items.map((i) => ({
                ...i,
                label: i.path.map((p) => p.name).join(' > ')
            }))
        },
        {
            label: 'CMS Pages',
            options: data.cmsPages.items
        },
        {
            label: 'Custom',
            options: currentItem.type === 'custom'
                ? [
                    {
                        value: currentItem.uuid,
                        label: currentItem.uuid
                    }
                ]
                : []
        }
    ];
    const handleCreate = (inputValue) => {
        setCurrentItem({
            ...item,
            uuid: inputValue,
            name: inputValue,
            url: inputValue,
            type: 'custom'
        });
    };
    return (react.createElement(Card, { title: "Menu item" },
        react.createElement(Card.Session, null,
            react.createElement("div", { className: "grid grid-flow-row gap-5" },
                react.createElement("div", null,
                    react.createElement("label", { htmlFor: "menuName", className: "block mb-2 font-medium" }, "Name"),
                    react.createElement("input", { id: "menuName", type: "text", value: currentItem.name, onChange: (e) => setCurrentItem({
                            ...currentItem,
                            name: e.target.value
                        }), className: "w-full border border-gray-300 rounded-md p-2" })),
                react.createElement("div", null,
                    react.createElement(react_select_creatable_esm/* default */.A, { isClearable: true, onChange: (newValue) => {
                            setCurrentItem({
                                ...currentItem,
                                uuid: (newValue === null || newValue === void 0 ? void 0 : newValue.value) || '',
                                name: (newValue === null || newValue === void 0 ? void 0 : newValue.label) || '',
                                type: (newValue === null || newValue === void 0 ? void 0 : newValue.__typename) === 'Category' ? 'category' : 'page'
                            });
                        }, onCreateOption: handleCreate, options: groupOptions, value: {
                            value: currentItem.uuid,
                            label: currentItem.type === 'custom'
                                ? currentItem.uuid
                                : ((_a = [
                                    ...groupOptions[0].options,
                                    ...groupOptions[1].options
                                ].find((option) => option.value === currentItem.uuid)) === null || _a === void 0 ? void 0 : _a.label) || ''
                        } })),
                err && react.createElement("div", { className: "text-critical" }, err),
                react.createElement("div", { className: "flex justify-end" },
                    react.createElement(common_Button, { title: "Save", onAction: () => {
                            if (currentItem.uuid === '') {
                                setErr('Please select a menu item');
                                return;
                            }
                            if (currentItem.name === '') {
                                setErr('Please enter a name');
                                return;
                            }
                            updateItem(currentItem);
                        } }))))));
};
function BasicMenuSetting({ basicMenuWidget: { menus, isMain, className } }) {
    const { register, setValue } = (0,index_esm/* useFormContext */.xW)();
    const [items, setItems] = react.useState(menus);
    const modal = useModal();
    const sensors = (0,core_esm/* useSensors */.FR)((0,core_esm/* useSensor */.MS)(core_esm/* PointerSensor */.AN), (0,core_esm/* useSensor */.MS)(core_esm/* KeyboardSensor */.uN, {
        coordinateGetter: sortable_esm/* sortableKeyboardCoordinates */.JR
    }));
    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);
                return (0,sortable_esm/* arrayMove */.be)(items, oldIndex, newIndex);
            });
        }
    };
    const handleChildDragEnd = (event, parentId) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            setItems((items) => {
                return items.map((item) => {
                    if (item.id === parentId) {
                        const oldIndex = item.children.findIndex((child) => child.id === active.id);
                        const newIndex = item.children.findIndex((child) => child.id === over.id);
                        return {
                            ...item,
                            children: (0,sortable_esm/* arrayMove */.be)(item.children, oldIndex, newIndex)
                        };
                    }
                    return item;
                });
            });
        }
    };
    const updateItem = (item) => {
        setItems((prevItems) => {
            const newItems = prevItems.map((prevItem) => {
                if (prevItem.id === item.id) {
                    return item;
                }
                else if (prevItem.children.length > 0) {
                    return {
                        ...prevItem,
                        children: prevItem.children.map((child) => {
                            if (child.id === item.id) {
                                return item;
                            }
                            return child;
                        })
                    };
                }
                return prevItem;
            });
            return newItems;
        });
    };
    const deleteItem = (item) => {
        setItems((prevItems) => {
            const newItems = prevItems.filter((prevItem) => {
                if (prevItem.id === item.id) {
                    return false;
                }
                else if (prevItem.children.length > 0) {
                    prevItem.children = prevItem.children.filter((child) => child.id !== item.id);
                }
                return true;
            });
            return newItems;
        });
    };
    (0,react.useEffect)(() => {
        setValue('settings.menus', items);
    }, [items]);
    return (react.createElement(react.Fragment, null,
        react.createElement(Card.Session, { title: "Menu Items" },
            react.createElement(core_esm/* DndContext */.Mp, { sensors: sensors, collisionDetection: core_esm/* closestCenter */.fp, onDragEnd: handleDragEnd },
                react.createElement(sortable_esm/* SortableContext */.gB, { items: items.map((item) => item.id), strategy: sortable_esm/* verticalListSortingStrategy */._G },
                    react.createElement("div", { className: "space-y-2" }, items.map((menu) => (react.createElement("div", { key: menu.id },
                        react.createElement(SortableMenuItem, { item: menu, updateItem: updateItem, deleteItem: deleteItem }),
                        menu.children && menu.children.length > 0 && (react.createElement("div", { className: "ml-5 mt-2" },
                            react.createElement(core_esm/* DndContext */.Mp, { sensors: sensors, collisionDetection: core_esm/* closestCenter */.fp, onDragEnd: (event) => handleChildDragEnd(event, menu.id) },
                                react.createElement(sortable_esm/* SortableContext */.gB, { items: menu.children.map((child) => child.id), strategy: sortable_esm/* verticalListSortingStrategy */._G },
                                    react.createElement("div", { className: "space-y-1" }, menu.children.map((child) => (react.createElement(SortableMenuItem, { key: child.id, item: child, updateItem: updateItem, deleteItem: deleteItem, isChild: true })))))))))))))),
            react.createElement("input", { type: "hidden", ...register('settings.menus'), value: JSON.stringify(items) }),
            react.createElement("div", { className: "mt-3" },
                react.createElement("button", { type: "button", className: "text-interactive", onClick: () => modal.open() }, "Add menu item")),
            react.createElement(Modal, { title: "Create New Menu Item", onClose: modal.close, isOpen: modal.isOpen },
                react.createElement(MenuSettingPopup, { item: {
                        id: uniqid_default()(),
                        name: '',
                        url: '',
                        type: 'category',
                        uuid: '',
                        children: []
                    }, updateItem: (item) => {
                        setItems((prevItems) => [...prevItems, item]);
                        modal.close();
                    } }))),
        react.createElement(Card.Session, { title: "Setting" },
            react.createElement("div", { className: "space-y-2" },
                react.createElement("div", null,
                    react.createElement(CheckboxField, { label: "Is Main Menu?", name: "settings.isMain", defaultValue: isMain })),
                react.createElement("div", null,
                    react.createElement(InputField, { label: "Custom CSS classes", name: "settings.className", defaultValue: className, helperText: "Custom CSS classes for the menu" }))))));
}
const BasicMenuSetting_query = (/* unused pure expression or super */ null && (`
  query Query($settings: JSON) {
    basicMenuWidget(settings: $settings) {
      menus {
        id
        name
        url
        type
        uuid
        children {
          id
          name
          url
          type
          uuid
        }
      }
      isMain
      className
    }
  }
`));
const BasicMenuSetting_variables = (/* unused pure expression or super */ null && (`{
  settings: getWidgetSetting()
}`));
//# sourceMappingURL=BasicMenuSetting.js.map
;// ./node_modules/@evershop/evershop/dist/modules/cms/components/BannerSetting.js
/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/img-redundant-alt */




function BannerSetting({ bannerWidget: { src, alignment = 'left', width, height, alt, link } }) {
    const { setValue, watch } = (0,index_esm/* useFormContext */.xW)();
    const image = watch('settings.src', src);
    const currentAlignment = watch('settings.alignment', alignment);
    const [openFileBrowser, setOpenFileBrowser] = react.useState(false);
    const [imageDimensions, setImageDimensions] = react.useState({
        width: width || 0,
        height: height || 0
    });
    // Function to get image dimensions
    const getImageDimensions = (imageUrl) => {
        if (!imageUrl)
            return;
        const img = new Image();
        img.onload = () => {
            const newWidth = img.naturalWidth;
            const newHeight = img.naturalHeight;
            setImageDimensions({ width: newWidth, height: newHeight });
            // Update form values
            setValue('settings.width', newWidth);
            setValue('settings.height', newHeight);
        };
        img.src = imageUrl;
    };
    // Get dimensions when image changes
    react.useEffect(() => {
        if (image) {
            getImageDimensions(image);
        }
    }, [image]);
    return (react.createElement("div", { className: `banner-widget` },
        react.createElement("div", { className: "max-h-96" }, openFileBrowser && (react.createElement(FileBrowser, { isMultiple: false, onInsert: (file) => {
                setValue('settings.src', file);
                setOpenFileBrowser(false);
            }, close: () => setOpenFileBrowser(false) }))),
        react.createElement("div", { className: "w-full h-80 border border-gray-300 bg-gray-200 relative overflow-hidden" },
            react.createElement("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZjFmMWYxIj48L3JlY3Q+CiAgPHBhdGggZD0iTTAgMGgyMHYyMEgwVjB6IiBmaWxsPSJub25lIiBzdHJva2U9IiNlNWU1ZTUiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]" }),
            react.createElement("div", { className: `flex h-full w-full ${currentAlignment === 'center'
                    ? 'justify-center'
                    : currentAlignment === 'right'
                        ? 'justify-end'
                        : 'justify-start'} p-4` }, image && (react.createElement("div", { className: `relative h-full flex items-center w-full ${currentAlignment === 'center'
                    ? 'justify-center'
                    : currentAlignment === 'right'
                        ? 'justify-end'
                        : 'justify-start'}` },
                react.createElement("img", { src: image, className: "h-auto max-h-full object-contain shadow-md rounded", style: {
                        maxWidth: '60%' // Consistent size for all alignments
                    }, onLoad: (e) => {
                        // This is a backup in case the useEffect doesn't trigger
                        const img = e.target;
                        if (img.naturalWidth > 0 && img.naturalHeight > 0) {
                            if (imageDimensions.width !== img.naturalWidth ||
                                imageDimensions.height !== img.naturalHeight) {
                                setImageDimensions({
                                    width: img.naturalWidth,
                                    height: img.naturalHeight
                                });
                                setValue('settings.width', img.naturalWidth);
                                setValue('settings.height', img.naturalHeight);
                            }
                        }
                    }, alt: "Banner Image" })))),
            react.createElement("a", { href: "#", onClick: () => setOpenFileBrowser(true), className: "absolute bottom-2 right-2 bg-white p-2 border border-gray-300 shadow-sm hover:bg-gray-50 z-10" }, "Select Image")),
        react.createElement(InputField, { type: "hidden", name: "settings.src", defaultValue: image || '' }),
        react.createElement("div", { className: "mb-4" },
            react.createElement("div", { className: "mb-2" },
                react.createElement("label", null, "Alignment")),
            react.createElement("div", { className: "grid grid-cols-3 gap-2" },
                react.createElement("div", { onClick: () => {
                        setValue('settings.alignment', 'left');
                    }, className: `border p-3 flex justify-center items-center cursor-pointer ${currentAlignment === 'left'
                        ? 'border-blue-500 bg-blue-100'
                        : 'border-gray-300'}` },
                    react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                        react.createElement("line", { x1: "5", y1: "6", x2: "19", y2: "6" }),
                        react.createElement("line", { x1: "5", y1: "12", x2: "12", y2: "12" }),
                        react.createElement("line", { x1: "5", y1: "18", x2: "16", y2: "18" }))),
                react.createElement("div", { onClick: () => {
                        setValue('settings.alignment', 'center');
                    }, className: `border p-3 flex justify-center items-center cursor-pointer ${currentAlignment === 'center'
                        ? 'border-blue-500 bg-blue-100'
                        : 'border-gray-300'}` },
                    react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                        react.createElement("line", { x1: "5", y1: "6", x2: "19", y2: "6" }),
                        react.createElement("line", { x1: "8", y1: "12", x2: "16", y2: "12" }),
                        react.createElement("line", { x1: "6", y1: "18", x2: "18", y2: "18" }))),
                react.createElement("div", { onClick: () => {
                        setValue('settings.alignment', 'right');
                    }, className: `border p-3 flex justify-center items-center cursor-pointer ${currentAlignment === 'right'
                        ? 'border-blue-500 bg-blue-100'
                        : 'border-gray-300'}` },
                    react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                        react.createElement("line", { x1: "5", y1: "6", x2: "19", y2: "6" }),
                        react.createElement("line", { x1: "12", y1: "12", x2: "19", y2: "12" }),
                        react.createElement("line", { x1: "8", y1: "18", x2: "19", y2: "18" })))),
            react.createElement(InputField, { type: "hidden", name: "settings.alignment", defaultValue: alignment })),
        react.createElement(InputField, { type: "hidden", name: "settings.width", defaultValue: width || imageDimensions.width }),
        react.createElement(InputField, { type: "hidden", name: "settings.height", defaultValue: height || imageDimensions.height }),
        react.createElement("div", { className: "mb-4" },
            react.createElement("div", { className: "text-sm text-gray-500" },
                "Image dimensions: ",
                imageDimensions.width,
                " \u00D7 ",
                imageDimensions.height,
                ' ',
                "pixels")),
        react.createElement(InputField, { type: "text", label: "Alt Text", placeholder: 'e.g., "Promotional Banner"', name: "settings.alt", defaultValue: alt }),
        react.createElement(InputField, { type: "text", placeholder: "e.g., https://example.com", label: "Banner Link", name: "settings.link", defaultValue: link || '' })));
}
const BannerSetting_query = (/* unused pure expression or super */ null && (`
  query Query($src: String, $alignment: String, $width: Float, $height: Float, $alt: String) {
    bannerWidget(src: $src, alignment: $alignment, width: $width, height: $height, alt: $alt) {
      src
      alignment
      width
      height
      alt
    }
  }
`));
const BannerSetting_variables = (/* unused pure expression or super */ null && (`{
  src: getWidgetSetting("src"),
  alignment: getWidgetSetting("alignment"),
  width: getWidgetSetting("width"),
  height: getWidgetSetting("height"),
  alt: getWidgetSetting("alt")
}`));
//# sourceMappingURL=BannerSetting.js.map
;// ./node_modules/@evershop/evershop/dist/modules/cms/components/SlideshowSetting.js
/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */





function SlideshowSetting({ slideshowWidget }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    const { slides = [], autoplay = true, autoplaySpeed = 3000, arrows = true, dots = true, fullWidth = true, widthValue = 1920, heightValue = 800, heightType = 'auto' } = slideshowWidget || {};
    const { control, setValue, watch } = (0,index_esm/* useFormContext */.xW)();
    const { fields, append, remove, move } = (0,index_esm/* useFieldArray */.jz)({
        control,
        name: 'settings.slides'
    });
    const currentSlides = watch('settings.slides', slides);
    const currentAutoplay = watch('settings.autoplay', autoplay);
    const currentAutoplaySpeed = watch('settings.autoplaySpeed', autoplaySpeed);
    const currentArrows = watch('settings.arrows', arrows);
    const currentDots = watch('settings.dots', dots);
    const currentFullWidth = watch('settings.fullWidth', fullWidth);
    (0,react.useEffect)(() => {
        // Initialize slides with existing data
        setValue('settings.slides', (currentSlides === null || currentSlides === void 0 ? void 0 : currentSlides.length) ? currentSlides : []);
        // Initialize the autoplay settings
        const handleAutoplay = currentAutoplay === undefined || currentAutoplay === null
            ? autoplay
            : Boolean(currentAutoplay);
        setValue('settings.autoplay', handleAutoplay);
        // Initialize the autoplay speed
        const speed = Number(currentAutoplaySpeed) || Number(autoplaySpeed) || 3000;
        setValue('settings.autoplaySpeed', speed);
        // Initialize the arrows setting
        const handleArrows = currentArrows === undefined || currentArrows === null
            ? arrows
            : Boolean(currentArrows);
        setValue('settings.arrows', handleArrows);
        // Initialize the dots setting
        const handleDots = currentDots === undefined || currentDots === null
            ? dots
            : Boolean(currentDots);
        setValue('settings.dots', handleDots);
        // Initialize the fullWidth setting
        const handleFullWidth = currentFullWidth === undefined || currentFullWidth === null
            ? fullWidth
            : Boolean(currentFullWidth);
        setValue('settings.fullWidth', handleFullWidth);
        // Always use adaptive height for the slideshow
        setValue('settings.heightType', 'auto');
        // Process all slides to detect image dimensions if they don't have them yet
        if (currentSlides === null || currentSlides === void 0 ? void 0 : currentSlides.length) {
            currentSlides.forEach((slide, index) => {
                if (slide.image && (!slide.width || !slide.height)) {
                    getImageDimensions(slide.image, index);
                }
            });
        }
    }, []);
    const [activeSlideIndex, setActiveSlideIndex] = react.useState(null);
    const [openFileBrowser, setOpenFileBrowser] = react.useState(false);
    // Function to get image dimensions
    const getImageDimensions = (imageUrl, slideIndex) => {
        if (!imageUrl)
            return;
        const img = new Image();
        img.onload = () => {
            const width = img.naturalWidth;
            const height = img.naturalHeight;
            // Update the current slides with the new dimensions
            const newSlides = [...currentSlides];
            newSlides[slideIndex] = {
                ...newSlides[slideIndex],
                width,
                height
            };
            setValue('settings.slides', newSlides);
        };
        img.src = imageUrl;
    };
    const handleImageSelect = (image) => {
        if (activeSlideIndex !== null) {
            setValue(`settings.slides.${activeSlideIndex}.image`, image);
            // Detect image dimensions when a new image is selected
            getImageDimensions(image, activeSlideIndex);
            setOpenFileBrowser(false);
        }
    };
    const addSlide = () => {
        const newSlide = {
            id: (0,v4/* default */.A)(),
            image: '',
            width: 0, // Will be automatically set when image is selected
            height: 0, // Will be automatically set when image is selected
            headline: '',
            subText: '',
            buttonText: '',
            buttonLink: '',
            buttonColor: '#3B82F6' // Default blue color
        };
        append(newSlide);
        setTimeout(() => {
            setActiveSlideIndex(fields.length);
        }, 50);
    };
    const moveUp = (index) => {
        if (index > 0) {
            move(index, index - 1);
            setActiveSlideIndex(index - 1);
        }
    };
    const moveDown = (index) => {
        if (index < fields.length - 1) {
            move(index, index + 1);
            setActiveSlideIndex(index + 1);
        }
    };
    return (react.createElement("div", { className: "slideshow-widget" },
        openFileBrowser && (react.createElement("div", { className: "max-h-96" },
            react.createElement(FileBrowser, { isMultiple: false, onInsert: handleImageSelect, close: () => setOpenFileBrowser(false) }))),
        react.createElement("div", { className: "bg-white p-4 rounded shadow-sm mb-4" },
            react.createElement("h2", { className: "text-lg font-medium mb-4" }, "Slideshow Settings"),
            react.createElement("div", { className: "grid grid-cols-2 gap-4" },
                react.createElement("div", { className: "col-span-2 md:col-span-1" },
                    react.createElement("div", { className: "flex items-center mb-4" },
                        react.createElement("input", { type: "checkbox", id: "autoplay", checked: Boolean(currentAutoplay), onChange: (e) => {
                                const isChecked = Boolean(e.target.checked);
                                setValue('settings.autoplay', isChecked);
                            }, className: "mr-2 h-4 w-4" }),
                        react.createElement("label", { htmlFor: "autoplay", className: "text-sm" }, "Autoplay Slides")),
                    Boolean(currentAutoplay) && (react.createElement(InputField, { type: "number", label: "Autoplay Speed (ms)", name: "settings.autoplaySpeed", defaultValue: Number(autoplaySpeed) || 3000, placeholder: "e.g., 3000 for 3 seconds", validation: {
                            min: { value: 1000, message: 'Minimum speed is 1000ms' }
                        } }))),
                react.createElement("div", { className: "col-span-2 md:col-span-1" },
                    react.createElement("div", { className: "flex items-center mb-4" },
                        react.createElement("input", { type: "checkbox", id: "arrows", checked: Boolean(currentArrows), onChange: (e) => {
                                const isChecked = Boolean(e.target.checked);
                                setValue('settings.arrows', isChecked);
                            }, className: "mr-2 h-4 w-4" }),
                        react.createElement("label", { htmlFor: "arrows", className: "text-sm" }, "Show Navigation Arrows"))))),
        react.createElement("div", { className: "mb-4" },
            react.createElement("div", { className: "flex justify-between items-center mb-2" },
                react.createElement("h2", { className: "text-lg font-medium" }, "Slides"),
                react.createElement("button", { type: "button", onClick: addSlide, className: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" }, "Add New Slide")),
            fields.length > 0 ? (react.createElement("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4" }, fields.map((slide, index) => {
                var _a, _b;
                return (react.createElement("div", { key: slide.id, onClick: () => setActiveSlideIndex(index), className: `relative border rounded overflow-hidden cursor-pointer ${activeSlideIndex === index ? 'ring-2 ring-blue-500' : ''}` },
                    react.createElement("div", { className: "aspect-[16/9] bg-gray-100 flex items-center justify-center" }, ((_a = currentSlides[index]) === null || _a === void 0 ? void 0 : _a.image) ? (react.createElement("img", { src: currentSlides[index].image, alt: `Slide ${index + 1}`, className: "w-full h-full object-cover" })) : (react.createElement("div", { className: "text-gray-400" }, "No Image"))),
                    react.createElement("div", { className: "p-2 bg-white border-t" },
                        react.createElement("p", { className: "text-sm font-medium truncate" }, ((_b = currentSlides[index]) === null || _b === void 0 ? void 0 : _b.headline) || `Slide ${index + 1}`),
                        react.createElement("div", { className: "flex mt-2" },
                            react.createElement("button", { type: "button", onClick: (e) => {
                                    e.stopPropagation();
                                    moveUp(index);
                                }, disabled: index === 0, className: `mr-1 p-1 rounded ${index === 0
                                    ? 'text-gray-300'
                                    : 'text-gray-500 hover:bg-gray-100'}` },
                                react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                                    react.createElement("path", { d: "M18 15l-6-6-6 6" }))),
                            react.createElement("button", { type: "button", onClick: (e) => {
                                    e.stopPropagation();
                                    moveDown(index);
                                }, disabled: index === fields.length - 1, className: `mr-1 p-1 rounded ${index === fields.length - 1
                                    ? 'text-gray-300'
                                    : 'text-gray-500 hover:bg-gray-100'}` },
                                react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                                    react.createElement("path", { d: "M6 9l6 6 6-6" }))),
                            react.createElement("button", { type: "button", onClick: (e) => {
                                    e.stopPropagation();
                                    remove(index);
                                    if (activeSlideIndex === index) {
                                        setActiveSlideIndex(null);
                                    }
                                    else if (activeSlideIndex !== null &&
                                        activeSlideIndex > index) {
                                        setActiveSlideIndex(activeSlideIndex - 1);
                                    }
                                }, className: "ml-auto p-1 text-red-500 hover:bg-red-50 rounded" },
                                react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                                    react.createElement("path", { d: "M3 6h18" }),
                                    react.createElement("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
                                    react.createElement("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" })))))));
            }))) : (react.createElement("div", { className: "bg-gray-50 border border-dashed border-gray-300 rounded-lg p-8 text-center mb-4" },
                react.createElement("p", { className: "text-gray-500 mb-4" }, "No slides have been added yet."),
                react.createElement("button", { type: "button", onClick: addSlide, className: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" }, "Add Your First Slide")))),
        activeSlideIndex !== null && fields[activeSlideIndex] && (react.createElement("div", { className: "bg-white p-4 rounded shadow-sm" },
            react.createElement("h3", { className: "text-lg font-medium mb-4" },
                "Edit Slide ",
                activeSlideIndex + 1),
            react.createElement("div", { className: "mb-4 border rounded overflow-hidden" },
                react.createElement("div", { className: "aspect-[16/9] bg-gray-100 relative" },
                    ((_a = currentSlides[activeSlideIndex]) === null || _a === void 0 ? void 0 : _a.image) ? (react.createElement("div", { className: "relative w-full h-full" },
                        react.createElement("img", { src: currentSlides[activeSlideIndex].image, alt: `Slide ${activeSlideIndex + 1}`, className: "w-full h-full object-cover", onLoad: (e) => {
                                var _a, _b;
                                // Additional dimensions detection when the preview image loads
                                const img = e.target;
                                if (img.naturalWidth > 0 && img.naturalHeight > 0) {
                                    if (!((_a = currentSlides[activeSlideIndex]) === null || _a === void 0 ? void 0 : _a.width) ||
                                        !((_b = currentSlides[activeSlideIndex]) === null || _b === void 0 ? void 0 : _b.height)) {
                                        const newSlides = [...currentSlides];
                                        newSlides[activeSlideIndex] = {
                                            ...newSlides[activeSlideIndex],
                                            width: img.naturalWidth,
                                            height: img.naturalHeight
                                        };
                                        setValue('settings.slides', newSlides);
                                    }
                                }
                            } }),
                        react.createElement("div", { className: "absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center p-4 text-center" },
                            ((_b = currentSlides[activeSlideIndex]) === null || _b === void 0 ? void 0 : _b.headline) && (react.createElement("h3", { className: "text-white text-xl md:text-2xl font-bold mb-2" }, currentSlides[activeSlideIndex].headline)),
                            ((_c = currentSlides[activeSlideIndex]) === null || _c === void 0 ? void 0 : _c.subText) && (react.createElement("p", { className: "text-white mb-4" }, currentSlides[activeSlideIndex].subText)),
                            ((_d = currentSlides[activeSlideIndex]) === null || _d === void 0 ? void 0 : _d.buttonText) && (react.createElement("button", { type: "button", className: "px-4 py-2 rounded", style: {
                                    backgroundColor: currentSlides[activeSlideIndex].buttonColor ||
                                        '#3B82F6'
                                } }, currentSlides[activeSlideIndex].buttonText))))) : (react.createElement("div", { className: "w-full h-full flex items-center justify-center" },
                        react.createElement("button", { type: "button", onClick: () => setOpenFileBrowser(true), className: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" }, "Select Image"))),
                    ((_e = currentSlides[activeSlideIndex]) === null || _e === void 0 ? void 0 : _e.image) && (react.createElement("button", { type: "button", onClick: () => setOpenFileBrowser(true), className: "absolute bottom-2 right-2 bg-white p-2 rounded shadow hover:bg-gray-100" }, "Change Image")))),
            react.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" },
                react.createElement("input", { type: "hidden", name: `settings.slides.${activeSlideIndex}.image`, value: (currentSlides && ((_f = currentSlides[activeSlideIndex]) === null || _f === void 0 ? void 0 : _f.image)) || '' }),
                react.createElement("input", { type: "hidden", name: `settings.slides.${activeSlideIndex}.id`, value: (currentSlides && ((_g = currentSlides[activeSlideIndex]) === null || _g === void 0 ? void 0 : _g.id)) ||
                        (0,v4/* default */.A)() }),
                react.createElement("input", { type: "hidden", name: `settings.slides.${activeSlideIndex}.width`, value: ((_h = currentSlides[activeSlideIndex]) === null || _h === void 0 ? void 0 : _h.width) || 0 }),
                react.createElement("input", { type: "hidden", name: `settings.slides.${activeSlideIndex}.height`, value: ((_j = currentSlides[activeSlideIndex]) === null || _j === void 0 ? void 0 : _j.height) || 0 }),
                ((_k = currentSlides[activeSlideIndex]) === null || _k === void 0 ? void 0 : _k.image) && (react.createElement("div", { className: "md:col-span-2 mb-2" },
                    react.createElement("div", { className: "text-sm text-gray-500" }, ((_l = currentSlides[activeSlideIndex]) === null || _l === void 0 ? void 0 : _l.width) &&
                        ((_m = currentSlides[activeSlideIndex]) === null || _m === void 0 ? void 0 : _m.height) ? (react.createElement("p", null,
                        "Image dimensions: ",
                        currentSlides[activeSlideIndex].width,
                        ' ',
                        "\u00D7 ",
                        currentSlides[activeSlideIndex].height,
                        " pixels")) : (react.createElement("p", null, "Detecting image dimensions..."))))),
                react.createElement("div", { className: "md:col-span-2" },
                    react.createElement("label", { className: "block mb-1 text-sm" }, "Headline"),
                    react.createElement("input", { type: "text", className: "w-full p-2 border border-gray-300 rounded", name: `settings.slides.${activeSlideIndex}.headline`, value: ((_o = currentSlides[activeSlideIndex]) === null || _o === void 0 ? void 0 : _o.headline) || '', onChange: (e) => {
                            const newSlides = [...currentSlides];
                            newSlides[activeSlideIndex] = {
                                ...newSlides[activeSlideIndex],
                                headline: e.target.value
                            };
                            setValue('settings.slides', newSlides);
                        }, placeholder: "e.g., New Collection Available" })),
                react.createElement("div", { className: "md:col-span-2" },
                    react.createElement("label", { className: "block mb-1 text-sm" }, "Sub Text"),
                    react.createElement("textarea", { className: "w-full p-2 border border-gray-300 rounded", name: `settings.slides.${activeSlideIndex}.subText`, value: ((_p = currentSlides[activeSlideIndex]) === null || _p === void 0 ? void 0 : _p.subText) || '', onChange: (e) => {
                            const newSlides = [...currentSlides];
                            newSlides[activeSlideIndex] = {
                                ...newSlides[activeSlideIndex],
                                subText: e.target.value
                            };
                            setValue('settings.slides', newSlides);
                        }, placeholder: "e.g., Check out our latest products with special discounts", rows: 3 })),
                react.createElement("div", null,
                    react.createElement("label", { className: "block mb-1 text-sm" }, "Button Text"),
                    react.createElement("input", { type: "text", className: "w-full p-2 border border-gray-300 rounded", name: `settings.slides.${activeSlideIndex}.buttonText`, value: ((_q = currentSlides[activeSlideIndex]) === null || _q === void 0 ? void 0 : _q.buttonText) || '', onChange: (e) => {
                            const newSlides = [...currentSlides];
                            newSlides[activeSlideIndex] = {
                                ...newSlides[activeSlideIndex],
                                buttonText: e.target.value
                            };
                            setValue('settings.slides', newSlides);
                        }, placeholder: "e.g., Shop Now" })),
                react.createElement("div", null,
                    react.createElement("label", { className: "block mb-1 text-sm" }, "Button Link"),
                    react.createElement("input", { type: "text", className: "w-full p-2 border border-gray-300 rounded", name: `settings.slides.${activeSlideIndex}.buttonLink`, value: ((_r = currentSlides[activeSlideIndex]) === null || _r === void 0 ? void 0 : _r.buttonLink) || '', onChange: (e) => {
                            const newSlides = [...currentSlides];
                            newSlides[activeSlideIndex] = {
                                ...newSlides[activeSlideIndex],
                                buttonLink: e.target.value
                            };
                            setValue('settings.slides', newSlides);
                        }, placeholder: "e.g., /category/new-arrivals" })),
                react.createElement("div", null,
                    react.createElement("label", { className: "block mb-1 text-sm" }, "Button Color"),
                    react.createElement("div", { className: "flex items-center" },
                        react.createElement("input", { type: "color", value: ((_s = currentSlides[activeSlideIndex]) === null || _s === void 0 ? void 0 : _s.buttonColor) || '#3B82F6', onChange: (e) => {
                                const newSlides = [...currentSlides];
                                newSlides[activeSlideIndex] = {
                                    ...newSlides[activeSlideIndex],
                                    buttonColor: e.target.value
                                };
                                setValue('settings.slides', newSlides);
                            }, className: "w-10 h-10 rounded mr-2 cursor-pointer" }),
                        react.createElement("input", { type: "text", className: "w-full p-2 border border-gray-300 rounded", value: ((_t = currentSlides[activeSlideIndex]) === null || _t === void 0 ? void 0 : _t.buttonColor) || '#3B82F6', onChange: (e) => {
                                const newSlides = [...currentSlides];
                                newSlides[activeSlideIndex] = {
                                    ...newSlides[activeSlideIndex],
                                    buttonColor: e.target.value
                                };
                                setValue('settings.slides', newSlides);
                            }, placeholder: "#3B82F6" }))))))));
}
const SlideshowSetting_query = (/* unused pure expression or super */ null && (`
  query Query($slides: [SlideInput], $autoplay: Boolean, $autoplaySpeed: Int, $arrows: Boolean, $dots: Boolean) {
    slideshowWidget(
      slides: $slides, 
      autoplay: $autoplay, 
      autoplaySpeed: $autoplaySpeed, 
      arrows: $arrows, 
      dots: $dots,
    ) {
      slides {
        id
        image
        width
        height
        headline
        subText
        buttonText
        buttonLink
        buttonColor
      }
      autoplay
      autoplaySpeed
      arrows
      dots
    }
  }
`));
const fragments = (/* unused pure expression or super */ null && (`
  fragment SlideData on Slide {
    id
    image
    width
    height
    headline
    subText
    buttonText
    buttonLink
    buttonColor
  }
`));
const SlideshowSetting_variables = (/* unused pure expression or super */ null && (`{
  slides: getWidgetSetting("slides"),
  autoplay: getWidgetSetting("autoplay"),
  autoplaySpeed: getWidgetSetting("autoplaySpeed"),
  arrows: getWidgetSetting("arrows"),
  dots: getWidgetSetting("dots"),
}`));
//# sourceMappingURL=SlideshowSetting.js.map
;// ./.evershop/build/admin/productNew/client/entry.js

      
      
      
      
      




































common_Area.defaultProps.components = {
  header: {
    e4be48100db1ffb514ea467a4e1f539a0: {
      id: 'e4be48100db1ffb514ea467a4e1f539a0',
      sortOrder: 50,
      component: { default: AdminUser }
    },
    e4a0cf81159f1e47210f9546b31edca00: {
      id: 'e4a0cf81159f1e47210f9546b31edca00',
      sortOrder: 10,
      component: { default: Logo }
    },
    e97ea2a3341bc73b24f1f2b210cc7fcd0: {
      id: 'e97ea2a3341bc73b24f1f2b210cc7fcd0',
      sortOrder: 20,
      component: { default: SearchBox }
    }
  },
  head: {
    e53bfcc43edd1f27724baa8fa1b0e8690: {
      id: 'e53bfcc43edd1f27724baa8fa1b0e8690',
      sortOrder: 5,
      component: { default: GlobalCss }
    },
    ed73447a6e7f6173a7e116ef6ccb84ea3: {
      id: 'ed73447a6e7f6173a7e116ef6ccb84ea3',
      sortOrder: 5,
      component: { default: SeoMeta }
    }
  },
  body: {
    e3b55b96e45c0eb98453893b53a9ddced: {
      id: 'e3b55b96e45c0eb98453893b53a9ddced',
      sortOrder: 10,
      component: { default: AdminLayout }
    },
    ee7737b226cf3b007fc1e274ffd137822: {
      id: 'ee7737b226cf3b007fc1e274ffd137822',
      sortOrder: 10,
      component: { default: Notification }
    }
  },
  adminMenu: {
    eed51ab6d717ede2067dffeb16c24c385: {
      id: 'eed51ab6d717ede2067dffeb16c24c385',
      sortOrder: 20,
      component: { default: CatalogMenuGroup }
    },
    e15d50f081e0ed522fb38f06eb1475c4d: {
      id: 'e15d50f081e0ed522fb38f06eb1475c4d',
      sortOrder: 60,
      component: { default: CmsMenuGroup }
    },
    e97b2df7bab75bb0fc6a690f8cd228221: {
      id: 'e97b2df7bab75bb0fc6a690f8cd228221',
      sortOrder: 10,
      component: { default: QuickLinks }
    },
    eccde414bc67b1c1ea4f07f7bce4f729e: {
      id: 'eccde414bc67b1c1ea4f07f7bce4f729e',
      sortOrder: 40,
      component: { default: CustomerMenuGroup }
    },
    e1f474153af26f92f05ea1563a755a379: {
      id: 'e1f474153af26f92f05ea1563a755a379',
      sortOrder: 30,
      component: { default: OmsMenuGroup }
    },
    e89b834014769f19484ff05a9c4b21e8d: {
      id: 'e89b834014769f19484ff05a9c4b21e8d',
      sortOrder: 50,
      component: { default: CouponMenuGroup_CatalogMenuGroup }
    },
    efb63de35b236e64b3767bb9cfbcdaa48: {
      id: 'efb63de35b236e64b3767bb9cfbcdaa48',
      sortOrder: 500,
      component: { default: SettingMenuGroup_CmsMenuGroup }
    }
  },
  quickLinks: {
    ee7c7ae3a6a31403ad708538815788ded: {
      id: 'ee7c7ae3a6a31403ad708538815788ded',
      sortOrder: 20,
      component: { default: NewProductQuickLink }
    },
    ea24892d34754e495a40d75768cd1a34f: {
      id: 'ea24892d34754e495a40d75768cd1a34f',
      sortOrder: 30,
      component: { default: NewCouponQuickLink_NewProductQuickLink }
    }
  },
  rightSide: {
    e2adce2c511968deeeb74bb4ef3ab9b90: {
      id: 'e2adce2c511968deeeb74bb4ef3ab9b90',
      sortOrder: 30,
      component: { default: Attributes }
    },
    eecc35362560fef719750fe18ce590cb1: {
      id: 'eecc35362560fef719750fe18ce590cb1',
      sortOrder: 15,
      component: { default: Inventory }
    },
    e43718d8a8fd940c04bd8d852dcc7e315: {
      id: 'e43718d8a8fd940c04bd8d852dcc7e315',
      sortOrder: 10,
      component: { default: Status }
    }
  },
  leftSide: {
    e56ddc62155e30945d92b432dc1b4f5e9: {
      id: 'e56ddc62155e30945d92b432dc1b4f5e9',
      sortOrder: 10,
      component: { default: General }
    },
    e6d43ab41c8bea69a3cc1c447cb3a30f9: {
      id: 'e6d43ab41c8bea69a3cc1c447cb3a30f9',
      sortOrder: 15,
      component: { default: Media }
    },
    e9dc11620368579e7cbf04792ca00b4b0: {
      id: 'e9dc11620368579e7cbf04792ca00b4b0',
      sortOrder: 60,
      component: { default: SEO }
    }
  },
  content: {
    e3f7d2e6d75ca67fd081361fd1ce32588: {
      id: 'e3f7d2e6d75ca67fd081361fd1ce32588',
      sortOrder: 5,
      component: { default: ProductEditPageHeading }
    },
    ef67fa15c654fe1457b282cd9f56af73c: {
      id: 'ef67fa15c654fe1457b282cd9f56af73c',
      sortOrder: 10,
      component: { default: ProductNewForm }
    }
  },
  settingPageMenu: {
    e641dc257c2849b262cbade107935b1e1: {
      id: 'e641dc257c2849b262cbade107935b1e1',
      sortOrder: 15,
      component: { default: ShippingSettingMenu }
    },
    e82d7aa3a197b6edcbad7f9b82800a888: {
      id: 'e82d7aa3a197b6edcbad7f9b82800a888',
      sortOrder: 10,
      component: { default: PaymentSettingMenu }
    },
    eaf2910ea372f061209536e2ec5ea8eeb: {
      id: 'eaf2910ea372f061209536e2ec5ea8eeb',
      sortOrder: 5,
      component: { default: StoreSettingMenu }
    },
    ee3915e2878f103e35efdf3ee6223b9f3: {
      id: 'ee3915e2878f103e35efdf3ee6223b9f3',
      sortOrder: 20,
      component: { default: TaxSettingMenu }
    }
  },
  footerLeft: {
    edc7cc76ef2604ccf3ff4ee3554bb1fb6: {
      id: 'edc7cc76ef2604ccf3ff4ee3554bb1fb6',
      sortOrder: 10,
      component: { default: CopyRight }
    },
    e8c1069946cbc13a9e89bc67a94ebc220: {
      id: 'e8c1069946cbc13a9e89bc67a94ebc220',
      sortOrder: 20,
      component: { default: Version }
    }
  },
  adminNavigation: {
    e50fa6a681d52ead55063b9bb8ed5e596: {
      id: 'e50fa6a681d52ead55063b9bb8ed5e596',
      sortOrder: 10,
      component: { default: AdminNavigation }
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: { default: components_CollectionProductsSetting }
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: { default: TextBlockSetting }
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: { default: BasicMenuSetting }
    },
    banner: {
      id: 'banner',
      sortOrder: 0,
      component: { default: BannerSetting }
    },
    simple_slider: {
      id: 'simple_slider',
      sortOrder: 0,
      component: { default: SlideshowSetting }
    }
  }
} 
react_dom.hydrate(
        react.createElement(HydrateAdmin, null),
        document.getElementById('app')
      );

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === 9601) return "chunks/b9cc6fd1d849dae47d2a.js";
/******/ 			if (chunkId === 7276) return "chunks/78441c2d83427be06696.js";
/******/ 			if (chunkId === 9149) return "chunks/d8e793d4a4cace5246f8.js";
/******/ 			if (chunkId === 9461) return "chunks/e7c889d4b5f4e9116073.js";
/******/ 			if (chunkId === 4057) return "chunks/a44cbdda3aa03df0ed61.js";
/******/ 			if (chunkId === 6845) return "chunks/016a502e48f5941be940.js";
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "evershop_assi02:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	(() => {
/******/ 		__webpack_require__.j = 7834;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/assets/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			7834: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkevershop_assi02"] = self["webpackChunkevershop_assi02"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [7755], () => (__webpack_require__(38625)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
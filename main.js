/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dynamicPage/event-listeners.js":
/*!********************************************!*\
  !*** ./src/dynamicPage/event-listeners.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-box */ \"./src/dynamicPage/project-box.js\");\n/* harmony import */ var _task_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-box */ \"./src/dynamicPage/task-box.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ \"./src/dynamicPage/theme.js\");\n\n\n\n\nfunction startListening() {\n  const addProjectButton = document.querySelector(\"#add-project\");\n  addProjectButton.addEventListener(\"click\", _project_box__WEBPACK_IMPORTED_MODULE_0__.default.show);\n\n  const cancelButton = document.querySelector(\"#cancel-project-box\");\n  cancelButton.addEventListener(\"click\", _project_box__WEBPACK_IMPORTED_MODULE_0__.default.hide);\n\n  const addButton = document.querySelector(\"#add-project-box\");\n  addButton.addEventListener(\"click\", _project_box__WEBPACK_IMPORTED_MODULE_0__.default.addNew);\n\n  const addTaskButton = document.querySelector(\"#add-task\");\n  addTaskButton.addEventListener(\"click\", _task_box__WEBPACK_IMPORTED_MODULE_1__.default.show);\n\n  const cancelTask = document.querySelector(\"#cancel-task-box\");\n  cancelTask.addEventListener(\"click\", _task_box__WEBPACK_IMPORTED_MODULE_1__.default.hide);\n\n  const addTask = document.querySelector(\"#add-task-box\");\n  addTask.addEventListener(\"click\", _task_box__WEBPACK_IMPORTED_MODULE_1__.default.addNew);\n\n  const themeButton = document.querySelector(\"#theme-switcher\");\n  themeButton.addEventListener(\"click\", _theme__WEBPACK_IMPORTED_MODULE_2__.toggleTheme);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startListening);\n\n\n//# sourceURL=webpack://todo-list/./src/dynamicPage/event-listeners.js?");

/***/ }),

/***/ "./src/dynamicPage/project-box.js":
/*!****************************************!*\
  !*** ./src/dynamicPage/project-box.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projectBox = (() => {\n  \n  const show = () => {\n    const box = document.querySelector(\".project-box\");\n    const addProjectButton = document.querySelector(\"#add-project\");\n    \n    addProjectButton.classList.add(\"hidden\");\n    box.classList.remove(\"hidden\");\n  };\n  const hide = () => {\n    const box = document.querySelector(\".project-box\");\n    const addProjectButton = document.querySelector(\"#add-project\");\n    \n    addProjectButton.classList.remove(\"hidden\");\n    box.classList.add(\"hidden\");\n  };\n  const addNew = () => {\n    hide();\n  };\n\n  return { show, hide, addNew };\n})();\n\n//const projectForm = document.querySelector(\"#project-name\");\n//{\n//  console.log(projectForm.value);\n//  projectForm.value = \"\";\n//}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectBox);\n\n\n//# sourceURL=webpack://todo-list/./src/dynamicPage/project-box.js?");

/***/ }),

/***/ "./src/dynamicPage/task-box.js":
/*!*************************************!*\
  !*** ./src/dynamicPage/task-box.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst taskBox = (() => {\n  const show = () => {\n    const box = document.querySelector(\".task-box\");\n    box.classList.remove(\"hidden\");\n    window.addEventListener(\"click\", (event) => {\n      if (event.target == box) hide();\n    });\n  };\n  const hide = () => {\n    const box = document.querySelector(\".task-box\");\n    box.classList.add(\"hidden\");\n  };\n  const addNew = () => {\n    hide();\n  };\n  return { show, hide, addNew };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskBox);\n\n\n//# sourceURL=webpack://todo-list/./src/dynamicPage/task-box.js?");

/***/ }),

/***/ "./src/dynamicPage/theme.js":
/*!**********************************!*\
  !*** ./src/dynamicPage/theme.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadTheme\": () => (/* binding */ loadTheme),\n/* harmony export */   \"toggleTheme\": () => (/* binding */ toggleTheme)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage */ \"./src/storage.js\");\n\n\nfunction loadTheme(targetTheme) {\n  const content = document.querySelector(\"#content\");\n  content.dataset.theme = targetTheme;\n}\n\nfunction toggleTheme() {\n  const content = document.querySelector(\"#content\");\n  let currentTheme = content.dataset.theme;\n  let targetTheme = \"\";\n\n  if (currentTheme === \"light\") {\n    targetTheme = \"dark\";\n  } else {\n    targetTheme = \"light\";\n  }\n  content.dataset.theme = targetTheme;\n  _storage__WEBPACK_IMPORTED_MODULE_0__.default.store(\"theme\", targetTheme);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/dynamicPage/theme.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _staticPage_static_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staticPage/static-page */ \"./src/staticPage/static-page.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _dynamicPage_event_listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamicPage/event-listeners */ \"./src/dynamicPage/event-listeners.js\");\n\n\n\n\nconst content = document.querySelector(\"#content\");\n(0,_staticPage_static_page__WEBPACK_IMPORTED_MODULE_0__.default)(content);\n_storage__WEBPACK_IMPORTED_MODULE_1__.default.initiate();\n(0,_dynamicPage_event_listeners__WEBPACK_IMPORTED_MODULE_2__.default)();\n\n\n/* \nX create logo for page\n- display dynamically task in main tag\nX make page responsive\nX dynamically create page's content\n- properly display elements of the page with CSS\n- add functionality to query tasks\n- add functionality to segregate task by Today/7day/All\n- create animation of striking in CSS/JavaScript\nX create dialog box to add new project\n- create animation to show task modal box to add new task  \n- find a way to \"expand\" tasks for details\nX add function to change theme\nX establish color palette\n*/\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projectController = (() => {\n  const create = (title) => {\n    let lists = [];\n    return {\n      title,\n      lists,\n    };\n  };\n\n  const modify = (projects, index, title) => {\n    projects[index].title = title;\n  };\n\n  const remove = (projects, index) => {\n    projects.splice(index, 1);\n  };\n\n  return {\n    create, \n    modify,\n    remove\n  }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectController);\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/staticPage/dom.js":
/*!*******************************!*\
  !*** ./src/staticPage/dom.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createDOM(tag, ...classes) {\n  const newDOM = document.createElement(tag);\n\n  if (classes.length === 0) return newDOM;\n  else {\n    classes.forEach((string) => newDOM.classList.add(string));\n    return newDOM;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDOM);\n\n//# sourceURL=webpack://todo-list/./src/staticPage/dom.js?");

/***/ }),

/***/ "./src/staticPage/footer.js":
/*!**********************************!*\
  !*** ./src/staticPage/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/staticPage/dom.js\");\n\n\nfunction createFooter() {\n    const footer = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"footer\");\n  \n    const para = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"p\");\n    para.textContent = \"made by \";\n    footer.appendChild(para);\n  \n    const link = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"a\");\n\n    link.textContent = \"alternateved ∆\";\n    link.href = \"https://github.com/alternateved\";\n    link.target = \"_blank\";\n    para.appendChild(link);\n  \n    return footer;\n  }\n\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);\n\n//# sourceURL=webpack://todo-list/./src/staticPage/footer.js?");

/***/ }),

/***/ "./src/staticPage/header.js":
/*!**********************************!*\
  !*** ./src/staticPage/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/staticPage/dom.js\");\n\n\nfunction createHeader() {\n    const header = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"header\");\n  \n    const logoContainer = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"logo\");\n    header.appendChild(logoContainer);\n  \n    const logo = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", \"fas\", \"fa-check-circle\", \"fa-2x\");\n    logoContainer.appendChild(logo);\n  \n    const title = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"h1\");\n    title.textContent = \"same.do\";\n    logoContainer.appendChild(title);\n  \n    const themeSwitcherDiv = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\");\n    themeSwitcherDiv.id = \"theme-switcher\";\n    \n    const themeSwitcher = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", \"fas\", \"fa-adjust\", \"fa-lg\");\n    themeSwitcherDiv.appendChild(themeSwitcher);\n    header.appendChild(themeSwitcherDiv);\n  \n    return header;\n  }\n\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n//# sourceURL=webpack://todo-list/./src/staticPage/header.js?");

/***/ }),

/***/ "./src/staticPage/main.js":
/*!********************************!*\
  !*** ./src/staticPage/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/staticPage/dom.js\");\n\n\nfunction createMain() {\n  const main = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"main\");\n\n  const tasksContainer = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"tasks-container\");\n  main.appendChild(tasksContainer);\n\n  const tasksHeader = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"tasks-header\");\n  tasksContainer.appendChild(tasksHeader);\n\n  const headerTitle = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"tasks-title\");\n  headerTitle.textContent = \"Placeholder\";\n  tasksHeader.appendChild(headerTitle);\n\n  const headerSort = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"tasks-sort\");\n  tasksHeader.appendChild(headerSort);\n\n  const sortIcon = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", \"fas\", \"fa-sort-up\");\n  headerSort.appendChild(sortIcon);\n\n  const sortText = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\");\n  sortText.textContent = \"Due date\";\n  headerSort.appendChild(sortText);\n\n  const tasksDiv = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"tasks\");\n  tasksContainer.appendChild(tasksDiv);\n\n  const addTaskDiv = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\");\n  addTaskDiv.id = \"add-task\";\n  tasksDiv.appendChild(addTaskDiv);\n\n  const addTaskPanel = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"panel\");\n  addTaskDiv.appendChild(addTaskPanel);\n  \n  const addTaskIcon = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", \"fas\", \"fa-plus-circle\");\n  addTaskPanel.appendChild(addTaskIcon);\n\n  const addTaskText = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\");\n  addTaskText.textContent = \"Add task\";\n  addTaskPanel.appendChild(addTaskText);\n\n  return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMain);\n\n\n//# sourceURL=webpack://todo-list/./src/staticPage/main.js?");

/***/ }),

/***/ "./src/staticPage/nav.js":
/*!*******************************!*\
  !*** ./src/staticPage/nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/staticPage/dom.js\");\n\n\nfunction createSearchBar() {\n  const wrapDiv = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"wrap\");\n\n  const searchDiv = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"search\");\n  wrapDiv.appendChild(searchDiv);\n\n  const searchInput = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"input\", \"searchTerm\");\n  searchInput.type = \"text\";\n  searchInput.placeholder = \"Search...\";\n  searchDiv.appendChild(searchInput);\n\n  const searchButton = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"button\", \"searchButton\");\n  searchButton.type = \"submit\";\n  searchDiv.appendChild(searchButton);\n\n  const searchIcon = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", \"fa\", \"fa-search\");\n  searchButton.appendChild(searchIcon);\n\n  return wrapDiv;\n}\n\nfunction createNav() {\n  const nav = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"nav\");\n  const searchBar = createSearchBar();\n  nav.appendChild(searchBar);\n\n  const navigationDiv = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"navigation\");\n  nav.appendChild(navigationDiv);\n\n  const shortcutsContainer = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"list-container\");\n  navigationDiv.appendChild(shortcutsContainer);\n  const shortcutsTitleDiv = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"list-title\");\n  shortcutsContainer.appendChild(shortcutsTitleDiv);\n  const shortcutsTitle = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"h3\");\n  shortcutsTitle.textContent = \"Shortcuts\";\n  shortcutsTitleDiv.appendChild(shortcutsTitle);\n\n  const shortcutsListDiv = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"list-shortcuts\");\n  shortcutsContainer.appendChild(shortcutsListDiv);\n\n  for (let i = 0; i < 3; i++) {\n    const listElement = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"list-element\");\n\n    switch (i) {\n      case 0:\n        {\n          const icon = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", \"fas\", \"fa-calendar-day\");\n          const description = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\");\n          description.textContent = \"Today\";\n          listElement.appendChild(icon);\n          listElement.appendChild(description);\n        }\n        break;\n      case 1:\n        {\n          const icon = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", \"fas\", \"fa-calendar-week\");\n          const description = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\");\n          description.textContent = \"Next 7 Days\";\n          listElement.appendChild(icon);\n          listElement.appendChild(description);\n        }\n        break;\n      case 2:\n        {\n          const icon = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", \"fas\", \"fa-calendar\");\n          const description = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\");\n          description.textContent = \"All tasks\";\n          listElement.appendChild(icon);\n          listElement.appendChild(description);\n        }\n        break;\n    }\n\n    shortcutsListDiv.appendChild(listElement);\n  }\n\n  const projectsContainer = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"list-container\");\n  navigationDiv.appendChild(projectsContainer);\n  const projectsTitleDiv = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"list-title\");\n  projectsContainer.appendChild(projectsTitleDiv);\n  const projectsTitle = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"h3\");\n  projectsTitle.textContent = \"Projects\";\n  projectsTitleDiv.appendChild(projectsTitle);\n\n  const projectsListDiv = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"list-projects\");\n  projectsContainer.appendChild(projectsListDiv);\n\n  const addProjectButtonDiv = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"button-container\");\n  nav.appendChild(addProjectButtonDiv);\n\n  const addProjectButton = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"button\");\n  addProjectButton.id = \"add-project\";\n  addProjectButton.textContent = \"Add project\";\n  addProjectButtonDiv.appendChild(addProjectButton);\n\n  const projectBox = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"project-box\", \"hidden\");\n  nav.appendChild(projectBox);\n\n  const inputProjectName = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"input\");\n  inputProjectName.id = \"project-name\";\n  inputProjectName.type = \"text\";\n  inputProjectName.placeholder = \"Project name\";\n  projectBox.appendChild(inputProjectName);\n\n  const projectBoxButtons = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"project-box-buttons\");\n  projectBox.appendChild(projectBoxButtons);\n\n  const addButton = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"button\");\n  addButton.id = \"add-project-box\"\n  addButton.textContent = \"Add\";\n  projectBoxButtons.appendChild(addButton);\n\n  const cancelButton = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(\"button\");\n  cancelButton.id = \"cancel-project-box\"\n  cancelButton.textContent = \"Cancel\";\n  projectBoxButtons.appendChild(cancelButton);\n\n  return nav;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNav);\n\n\n//# sourceURL=webpack://todo-list/./src/staticPage/nav.js?");

/***/ }),

/***/ "./src/staticPage/static-page.js":
/*!***************************************!*\
  !*** ./src/staticPage/static-page.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/staticPage/header.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ \"./src/staticPage/nav.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ \"./src/staticPage/main.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./src/staticPage/footer.js\");\n/* harmony import */ var _task_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-modal */ \"./src/staticPage/task-modal.js\");\n\n\n\n\n\n\nfunction renderStaticPage(content) {\n  content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__.default)());\n  content.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_1__.default)());\n  content.appendChild((0,_main__WEBPACK_IMPORTED_MODULE_2__.default)());\n  content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_3__.default)());\n  content.appendChild((0,_task_modal__WEBPACK_IMPORTED_MODULE_4__.default)());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderStaticPage);\n\n//# sourceURL=webpack://todo-list/./src/staticPage/static-page.js?");

/***/ }),

/***/ "./src/staticPage/task-modal.js":
/*!**************************************!*\
  !*** ./src/staticPage/task-modal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project */ \"./src/project.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/staticPage/dom.js\");\n\n\n\nfunction createModal() {\n  const modal = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(\"div\", \"task-box\", \"hidden\");\n\n  const taskBoxContainer = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(\"div\", \"task-box-container\");\n  modal.appendChild(taskBoxContainer);\n\n  const title = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(\"h3\", \"task-box-title\");\n  title.textContent = \"New Task\";\n  taskBoxContainer.appendChild(title);\n\n  for (let i = 0; i < 3; i++) {\n    const div = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(\"div\", \"task-box-input\");\n    const label = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(\"label\");\n    div.appendChild(label);\n\n    switch (i) {\n      case 0:\n        {\n          label.textContent = \"Title\";\n          const input = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(\"input\", \"input-element\");\n          input.id = \"task-title\";\n          input.type = \"text\";\n          input.placeholder = \"Task title\";\n          div.appendChild(input);\n        }\n        break;\n      case 1:\n        {\n          label.textContent = \"Description\";\n          const textBox = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(\"textarea\");\n          textBox.id = \"task-description\";\n          textBox.placeholder = \"Full description...\";\n          div.appendChild(textBox);\n        }\n        break;\n      case 2:\n        {\n          label.textContent = \"Due date\";\n          const input = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(\"input\", \"input-element\");\n          input.id = \"task-date\";\n          input.type = \"date\";\n          div.appendChild(input);\n        }\n        break;\n    }\n    taskBoxContainer.appendChild(div);\n  }\n\n  const priorityBox = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(\"div\", \"task-box-options\");\n  taskBoxContainer.appendChild(priorityBox);\n\n  const priorityLabel = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(\"label\");\n  priorityLabel.textContent = \"Priority\";\n  priorityBox.appendChild(priorityLabel);\n\n  const prioritySelect = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(\"select\");\n  prioritySelect.id = \"task-priority\";\n  priorityBox.appendChild(prioritySelect);\n\n  const firstOption = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(\"option\");\n  firstOption.textContent = \"Low\";\n  firstOption.value = \"low\";\n  prioritySelect.appendChild(firstOption);\n  const secondOption = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(\"option\");\n  secondOption.textContent = \"Medium\";\n  secondOption.value = \"medium\";\n  prioritySelect.appendChild(secondOption);\n  const thirdOption = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(\"option\");\n  thirdOption.textContent = \"High\";\n  thirdOption.value = \"high\";\n  prioritySelect.appendChild(thirdOption);\n\n  const projectBox = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(\"div\", \"task-box-options\");\n  taskBoxContainer.appendChild(projectBox);\n\n  const projectLabel = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(\"label\");\n  projectLabel.textContent = \"Project\";\n  projectBox.appendChild(projectLabel);\n\n  const projectSelect = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(\"select\");\n  projectSelect.id = \"task-projects\";\n  projectBox.appendChild(projectSelect);\n\n  const fourthOption = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(\"option\");\n  fourthOption.textContent = \"First project\";\n  fourthOption.value = \"first\";\n  projectSelect.appendChild(fourthOption);\n\n  const buttonsDiv = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(\"div\", \"task-box-buttons\");\n  taskBoxContainer.appendChild(buttonsDiv);\n\n  const addButton = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(\"button\");\n  addButton.id = \"add-task-box\";\n  addButton.textContent = \"Add task\";\n  buttonsDiv.appendChild(addButton);\n\n  const cancelButton = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(\"button\");\n  cancelButton.id = \"cancel-task-box\";\n  cancelButton.textContent = \"Cancel\";\n  buttonsDiv.appendChild(cancelButton);\n\n  return modal;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createModal);\n\n\n//# sourceURL=webpack://todo-list/./src/staticPage/task-modal.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_dynamicPage_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/dynamicPage/theme */ \"./src/dynamicPage/theme.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\nconst storageController = (() => {\n  let projects = [];\n\n  const initiate = () => {\n    let storedProjects = check(\"projects\");\n    let storedTheme = check(\"theme\");\n\n    if (storedTheme !== undefined) {\n      (0,_src_dynamicPage_theme__WEBPACK_IMPORTED_MODULE_0__.loadTheme)(storedTheme);\n    } else {\n      (0,_src_dynamicPage_theme__WEBPACK_IMPORTED_MODULE_0__.loadTheme)(\"light\");\n    }\n    if (storedProjects !== undefined) {\n      projects = storedProjects;\n    } else {\n      projects.push(_project__WEBPACK_IMPORTED_MODULE_1__.default.create(\"First project\"));\n      store(\"projects\", projects);\n    }\n  };\n  // check localStorage for data\n  const check = (string) => {\n    if (localStorage.getItem(string)) {\n      return JSON.parse(localStorage.getItem(string));\n    }\n  };\n  // store data in localStorage\n  const store = (string, variable) => {\n    localStorage.setItem(string, JSON.stringify(variable));\n  };\n\n  const modify = () => {};\n\n  return {\n    initiate,\n    check,\n    store,\n    modify,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storageController);\n\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
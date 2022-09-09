"use strict";
const eventDelegation = (e) => {
    //Elements
    const target = e.target;
    const btnMenu = document.querySelector("#btnMenu");
    const btnFilter = document.querySelector("#btnFilter");
    const btnProfile = document.querySelector("#btnProfile");
    //delegación de eventos
    if (target === (btnMenu === null || btnMenu === void 0 ? void 0 : btnMenu.childNodes[3]) || target === (btnMenu === null || btnMenu === void 0 ? void 0 : btnMenu.childNodes[5]) || target === btnMenu) {
        const menuNav = document.querySelector("#mobile-menu");
        menu(menuNav);
    }
    else if (target === (btnFilter === null || btnFilter === void 0 ? void 0 : btnFilter.childNodes[3]) || target === btnFilter) {
        const filter = document.querySelector("#filterMenu");
        menu(filter);
    }
    else if (target === (btnProfile === null || btnProfile === void 0 ? void 0 : btnProfile.childNodes[3])) {
        const profile = document.querySelector("#menuProfile");
        menu(profile);
    }
    else {
        closeAll();
    }
};
//recibe el elemento a mostrar/ocultar
const menu = (element) => {
    element === null || element === void 0 ? void 0 : element.classList.toggle("hidden");
};
const closeAll = () => {
    const menu = document.querySelector("#mobile-menu");
    const filter = document.querySelector("#filterMenu");
    const profile = document.querySelector("#menuProfile");
    menu === null || menu === void 0 ? void 0 : menu.classList.add("hidden");
    filter === null || filter === void 0 ? void 0 : filter.classList.add("hidden");
    profile === null || profile === void 0 ? void 0 : profile.classList.add("hidden");
};

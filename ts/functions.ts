const eventDelegation = (e: MouseEvent): void => {
    //Elements
    const target: EventTarget | null = e.target;
    const btnMenu: Element | null = document.querySelector("#btnMenu");
    const btnFilter: Element | null = document.querySelector("#btnFilter");
    const btnProfile: Element | null = document.querySelector("#btnProfile");
    //delegación de eventos
    if (target === btnMenu?.childNodes[3] || target === btnMenu?.childNodes[5] || target === btnMenu) {
        changeSvg();
        const menuNav: Element | null = document.querySelector("#mobile-menu");
        menu(menuNav);
    } else if (target === btnFilter?.childNodes[3] || target === btnFilter) {
        const filter: Element | null = document.querySelector("#filterMenu");
        menu(filter);
    } else if (target === btnProfile?.childNodes[3]) {
        const profile: Element | null = document.querySelector("#menuProfile");
        menu(profile);
    } else {
        closeAll();
    }
};

//recibe el elemento a mostrar/ocultar
const menu = (element: Element | null ): void => {
    element?.classList.toggle("hidden");
};
const changeSvg = ():void =>{
    const svgMenu: Element | null = document.querySelector("#svgMenu");
    const svgMenuClose: Element | null = document.querySelector("#svgMenuClose");
    svgMenu?.classList.toggle("hidden");
    svgMenuClose?.classList.toggle("hidden");
}
const closeAll = ():void =>{
    const menu: Element | null = document.querySelector("#mobile-menu");
    const filter: Element | null = document.querySelector("#filterMenu");
    const profile: Element | null = document.querySelector("#menuProfile");
    menu?.classList.add("hidden");
    filter?.classList.add("hidden");
    profile?.classList.add("hidden");
};
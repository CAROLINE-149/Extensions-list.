//store the extension data in an array of objects

const extensions = [
    {
        icon:"icons/devlens.svg",
        name: "DevLens",
        description: "Quickly inspect page layouts and visualize element boundaries.",
        active: true
    },

    {
        icon:"icons/styleSpy.svg",
        name: "StyleSpy",
        escription: "Instantly analyse and copy CSS from any webpage document.",
        active: true
    },

    {
        icon:"icons/speedBoost.svg",
        name: "SpeedBoost",
        description:"Optimizes browser resource usage to accelerate page loading.",
        active: false
    },

    {
        icon:"icons/JSONWizard.svg",
        name: "JSONWizard",
        description: "Formats, validates and prettifies JSON responses in browser.",
        active: true
    },

    {
        icon: "iconsTabMasterPro.svg",
        name: "TabMaster Pro",
        description: "Organizes browser tabs into groups and sessions.",
        active: true
    },

    {
        icon: "icons/ViewportBuddy.svg",
        name: "ViewportBuddy",
        description: "Simulates different screen sizes directly within the browser.",
        active: false
    },

    {
        icon:"icons/MarkupNotes.svg",
        name: "Markup Notes",
        description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
        active: true
    },

    {
        icon:"icons/GridGuides.svg",
        name: "GridGuides",
        description: "Overlays customizable grids and alignment guides on any webpage.",
        active: false
    },

    {
        icon:"icons/PalettePicker.svg",
        name: "Palette Picker",
        description: "Instantly extracts color palettes from any webpage.",
        active: true
    },

    {
        icon:"icons/LinkChecker.svg",
        name: "LinkChecker",
        description: "Scans and highlights broken links on any page.",
        active: true
    },

    {
        icon:"icons/DOMSnapshot.svg",
        name: "DOM Snapshot",
        description: "Capture and export DOM structures quickly.",
        active: false
    },

    {
        icon:"icons/ConsolePlus.svg",
        name: "ConsolePlus",
        description: "Enhanced developer console with advanced filtering and logging.",
        active: true
    },
];

//render the extensions in the grid

function renderExtensions(list){
    const container = document.querySelector(".extensions-grid");
    container.innerHTML = ""; //clear previous content

    list.forEach((ext, index) => {


        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="card-top">
                <img src="${ext.icon}" alt="${ext.name} icon" class="extension-icon">
            
            <div>
                <h4>${ext.name}</h4>
                <p>${ext.description}</p>
            </div>
            </div>
            
            <div class=card-bottom>
            <button class="remove">Remove</button>

            <label class="switch">
                <input type="checkbox" ${ext.active ? "checked" : ""} data-index="${index}">
                <span class="slider"></span>
            </label>
            </div>
            `;

            container.appendChild(card);
    });

    activateSwitches();
    activateRemoveButtons();
}

function activateSwitches(){
    const switches = document.querySelectorAll(".switch input");

    switches.forEach((sw)=>{
        sw.addEventListener("change",function(){
            const index = this.dataset.index;
            extensions[index].activate = this.checked;
        });
    });
}

function activateRemoveButtons(){
    const buttons = document.querySelectorAll(".remove");

    buttons.forEach(btn => {
        btn.addEventListener("click", function(){
            const index = this.dataset.index;
            extensions.splice(index, 1);
            renderExtensions(extensions);
        })
    })
}

document.getElementById("all-button").addEventListener("click", () => {
    renderExtensions(extensions);
});

document.getElementById("active-button").addEventListener("click", () => {
    const activeExtensions = extensions.filter(ext => ext.active);
    renderExtensions(activeExtensions);
});

document.getElementById("inactive-button").addEventListener("click", () => {
    const inactiveExtensions = extensions.filter(ext => !ext.active);
    renderExtensions(inactiveExtensions);
});

//dark/light mode

const themeButton = document.querySelector(".theme-toggle");

themeButton.addEventListener("click", () => {
    
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
    themeButton.textContent = "☀️";
  }
  else{
    themeButton.textContent = "🌙";
  }

});




renderExtensions(extensions);
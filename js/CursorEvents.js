AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" } //we will be assigning a blank variable for keeping track of the thumbnail that we hovered over because the same one will be changed when we do mosueleave on that
  },
  init: function () {
    //calling both events initally
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },

  handlePlacesListState: function () {
    const id = this.el.getAttribute("id"); //getting id of the place we have hovered over
    const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];
    //comparing if the ids belong to any of them
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "#D76B30",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    // Mouse Enter Events
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    // Mouse Leave Events
    this.el.addEventListener("mouseleave", () => {
      const {selectedItemId} = this.data;
      if(selectedItemId){
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if(id == selectedItemId){
          el.setAttribute("material", {
            color: "#0077cc",
            opacity: 1
          });
        }
      }
    });
  },
});

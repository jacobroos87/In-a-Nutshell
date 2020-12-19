describe("Form submission test", () => {
    $('#contact-form').on('submit', function () {
        return false;
    });
    it("Should trigger the modal", () => {

        $("#contact-form").trigger("submit");
        expect($(".modal-body h4").html()).toBe("Your form submission was a SUCCESS!!")
    })
})

describe("Nut selector function tests", () => {
    it("Should make a call to the FDC api", () => {
        $(".nut-click-icon").trigger("click");
        
    expect($("#nut-data, #joke-generator, #contact-form-section").show().fadeIn()).toBeTruthy();
    })
})
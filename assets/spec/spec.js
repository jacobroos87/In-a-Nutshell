describe("Form submission test", () => {
    $('#contact-form').on('submit', function () {
        return false;
    });
    it("Should trigger the modal once the form is submitted", () => {

        $("#contact-form").trigger("submit");
        expect($(".modal-body h4").html()).toBe("Your form submission was a SUCCESS!!")
    })
})

describe("fdcApi call test", () => {
    it("Should call the fdcApi", () => {
        const nutChosen = "170571";
        const dataPromise = fdcApiCall(nutChosen);
        const expectedDescription = "Nuts, cashew nuts, dry roasted, without salt added"
        return dataPromise.then((response) => {
            expect(response.description).toBe(expectedDescription);
        })
    })
})

describe("Nut selector function tests", () => {
    it("Should show the lower sections", () => {
        $(".nut-click-icon").trigger("click");
        
    expect($("#nut-data, #joke-generator, #contact-form-section").show().fadeIn()).toBeTruthy();
    })
})
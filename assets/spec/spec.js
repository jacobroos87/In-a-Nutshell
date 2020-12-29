// Testing the modal response when the contact form is submitted

describe("Form submission test", () => {
    $('#contact-form').on('submit', function () {

// The return prevents the form actually being submitted

        return false;
    });
    it("Should trigger the modal once the form is submitted", () => {

        $("#contact-form").trigger("submit");
        expect($(".modal-body h4").html()).toBe("Your form submission was a SUCCESS!!")
    })
})

// Testing to see if the external FDC API is returning the right result for the given ID
// The API call should be mocked for testing ideally, but this was my alternative method

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

// Testing to see if the different sections become visible on click

describe("Nut selector function tests", () => {
    it("Should show the lower sections", () => {
        $(".nut-click-icon").trigger("click");
        
    expect($("#nut-data, #joke-generator, #contact-form-section").show().fadeIn()).toBeTruthy();
    })
})
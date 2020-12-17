describe("Form submission test", () => {
    
    it("Should trigger the modal", () => {
        var spyEvent;
        spyEvent = spyOn('#mySuccessModal', show());
    $("#contact-form").trigger( "submit" );
       
    expect(show()).toHaveBeenTriggeredOn('#contact-form');
    expect(spyEvent).toHaveBeenTriggered();

    })
})
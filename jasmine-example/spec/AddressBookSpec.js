describe('Adress Book', function(){
  it('should be able to add a contact', function(){
    var addressBook = new AddressBook(),
        thisContact = new Contact();

    addressBook.addContact(thisContact);

    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  if('should be able to delete a contact', function(){
    var addressBook = new AddressBook(),
        thisContact = new Contact();

    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);
  });
});

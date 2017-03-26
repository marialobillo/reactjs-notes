function selectBook(book){
  //selectBook is an ActionCreator, it needs to return an anction
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

let documentReady = () => {
  React.render(
    <h1>Hello React</h1>
    document.getElementById('react')
  );
};

$(documentReady);

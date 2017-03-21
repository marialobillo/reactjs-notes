@Lifts = React.createClass
  getInitialState: ->
    lifts: @props.date
  getDefaultProps: ->
    
  render: ->
    div
      className: 'lifts'
      h2
        className: 'title'
        'Lifts'

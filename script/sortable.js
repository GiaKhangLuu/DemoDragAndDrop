$('ul, li').disableSelection()

$('#sortable').sortable({
    revert: true,
    cursor: 'move',
    opacity: 0.5,
    placeholder: 'ui-state-highlight',
    forcePlaceholderSize: true
})

$('button').click(() => {
    var sortedIDs = $('#sortable').sortable('toArray')
    console.log(sortedIDs)
})
//---- basic-card----//
new Sortable(draggableCard, {
    animation: 150,
    ghostClass: 'blue-background-class'
});
// end basic card //


//----- share-menu list----- //
new Sortable(shareMenuLeft, {
    group: 'shared', 
    animation: 150
});

new Sortable(shareMenuRight, {
    group: 'shared',
    animation: 150
});
// end share-menu list //


//---- clonic menu list---- //
new Sortable(clonicMenuLeft, {
    group: {
        name: 'shared1',
        pull: 'clone', 
        put: false
    },
    animation: 150,
    sort: false 
});

new Sortable(clonicMenuRight, {
    group: {
        name: 'shared1',
        pull: 'clone'
    },
    animation: 150
});
//----- end clonic menu list---- //


//----- handle list---- //
new Sortable(handleList, {
    handle: '.list-handle', // handle's class
    animation: 150
});
//----end handle list---- //

//------- grid box------ //
new Sortable(gridList, {
    swap: true,
    swapClass: 'highlight',
    animation: 150,
});
//---- end grid box----- //

//------ nestable list------ //
$(document).ready(function() {
        var nestedSortables = $(".nested-sortable");

        // Loop through each nested sortable element
        for (var i = 0; i < nestedSortables.length; i++) {
            new Sortable(nestedSortables[i], {
                group: 'nested',
                animation: 150,
                fallbackOnBody: true,
                swapThreshold: 0.65,
                onSort: function (e) {
                    var items = e.to.children;
                    var result = [];
                    for (var i = 0; i < items.length; i++) {
                        result.push($(items[i]).data('id'));
                    }

                    $('#standard_order').val(result);
                }
            });
        }
});
//------- end nestable list----- //

var itemContainers = [].slice.call(document.querySelectorAll('.board-column-content'));
var columnGrids = [];
var boardGrid;


itemContainers.forEach(function (container) {

  //  **------Instantiate column grid.**
  var grid = new Muuri(container, {
    items: '.board-item',
    layoutDuration: 400,
    layoutEasing: 'ease',
    dragEnabled: true,
    dragSort: function () {
      return columnGrids;
    },
    dragSortInterval: 0,
    dragContainer: document.body,
    dragReleaseDuration: 400,
    dragReleaseEasing: 'ease'
  })
      .on('dragStart', function (item) {

        item.getElement().style.width = item.getWidth() + 'px';
        item.getElement().style.height = item.getHeight() + 'px';
      })
      .on('dragReleaseEnd', function (item) {

        item.getElement().style.width = '';
        item.getElement().style.height = '';

        columnGrids.forEach(function (grid) {
          grid.refreshItems();
        });
      })
      .on('layoutStart', function () {

        boardGrid.refreshItems().layout();
      });


  columnGrids.push(grid);

});
boardGrid = new Muuri('.board', {
  layout: {
    horizontal: true,
  },
  layoutDuration: 400,
  layoutEasing: 'ease',
  dragEnabled: true,
  dragSortInterval: 0,
  dragStartPredicate: {
    handle: '.board-column-header'
  },
  dragReleaseDuration: 400,
  dragReleaseEasing: 'ease'
});
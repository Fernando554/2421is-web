var example2Left = document.getElementById('example2-left'),
    example2Center = document.getElementById('example2-center'),  
    example2Right = document.getElementById('example2-right');

new Sortable(example2Left, {
    group: 'shared', // set both lists to same group
    animation: 150
});

new Sortable(example2Center, {
    group: 'shared',
    animation: 150
});

new Sortable(example2Right, {
    group: 'shared',
    animation: 150
});
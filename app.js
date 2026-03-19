  function setView(view) {
    document.getElementById('grid-view').style.display = view === 'grid' ? 'block' : 'none';
    document.getElementById('list-view').style.display = view === 'list' ? 'block' : 'none';
    document.getElementById('btn-grid').classList.toggle('active', view === 'grid');
    document.getElementById('btn-list').classList.toggle('active', view === 'list');
}
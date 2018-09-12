const Main = imports.ui.main;

let activitiesButton, appMenu, id1, id2;

function init() {
}

function hideActivities()
{
	if (activitiesButton != null)
		activitiesButton.container.hide();
}

function showActivities()
{
	if (activitiesButton != null)
		activitiesButton.container.show();
}

function enable() {
	activitiesButton = Main.panel.statusArea['activities'];
	appMenu = Main.panel.statusArea.appMenu.actor;

	if (appMenu != null) {
		if (appMenu.visible)
			hideActivities();

		id1 = appMenu.connect('show', hideActivities);
		id2 = appMenu.connect('hide', showActivities);
	}
}

function disable() {
	if (appMenu != null) {
		appMenu.disconnect(id2);
		appMenu.disconnect(id1);
	}
	showActivities();
}

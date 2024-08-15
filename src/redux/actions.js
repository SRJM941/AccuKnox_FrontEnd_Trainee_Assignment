export const ADD_WIDGET = 'ADD_WIDGET';
export const REMOVE_WIDGET = 'REMOVE_WIDGET';
export const SEARCH_WIDGET = 'SEARCH_WIDGET';
export const TOGGLE_WIDGET_VISIBILITY = 'TOGGLE_WIDGET_VISIBILITY';

export const addWidget = (categoryId, widget) => ({
  type: ADD_WIDGET,
  payload: { categoryId, widget },
});

export const removeWidget = (categoryId, widgetId) => ({
  type: REMOVE_WIDGET,
  payload: { categoryId, widgetId },
});

export const searchWidget = (query) => ({
  type: SEARCH_WIDGET,
  payload: query,
});

export const toggleWidgetVisibility = (categoryId, widgetId) => ({
  type: TOGGLE_WIDGET_VISIBILITY,
  payload: { categoryId, widgetId }
});

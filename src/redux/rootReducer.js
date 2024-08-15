import { ADD_WIDGET, REMOVE_WIDGET, SEARCH_WIDGET, TOGGLE_WIDGET_VISIBILITY  } from './actions';

const initialState = {
  categories: [
    {
      id: 1,
      name: 'CSPM Executive Dashboard',
      widgets: [
        {
          id: 1,
          name: 'Cloud Accounts',
          type: 'PieChart',
          visible: true,
          data: {
            Connected: 2,
            'Not Connected': 2,
          },
        },
        {
          id: 2,
          name: 'Cloud Account Risk Assessment',
          type: 'PieChart',
          visible: true,
          data: {
            Failed: 1989,
            Warning: 681,
            'Not available': 36,
            Passed: 7253,
          },
        },
      ],
    },
    {
      id: 2,
      name: 'Registry Scan',
      widgets: [
        {
          id: 3,
          name: 'Image Risk Assessment',
          type: 'BarChart',
          visible: true,
          data: {
            Critical: 9,
            High: 15,
            Medium: 35,
            Low: 90,
            None: 61,
          },
          total: 210,
        },
        {
          id: 4,
          name: 'Image Security Issues',
          type: 'BarChart',
          visible: true,
          data: {
            Critical: 2,
            High: 2,
            Medium: 0,
            Low: 0,
            None: 0,
          },
          total: 2,
        },
      ],
    },
  ],
  searchQuery: '',
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: [...category.widgets,{ ...action.payload.widget, visible: true }],
              }
            : category
        ),
      };

    case REMOVE_WIDGET:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(
                  (widget) => widget.id !== action.payload.widgetId
                ),
              }
            : category
        ),
      };

    case SEARCH_WIDGET:
      return {
        ...state,
        searchQuery: action.payload,
    };

      case TOGGLE_WIDGET_VISIBILITY:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? {
              ...category,
              widgets: category.widgets.map(widget =>
                widget.id === action.payload.widgetId
                  ? { ...widget, visible: !widget.visible }
                  : widget
              )
            }
            : category
        )
      };

    default:
      return state;
  }
}

export default rootReducer;

const initialState = {
    featured_viewchild: {}
  };
  
  export function reducerViewchild(state = initialState, action) {
    let newState = { ...state };
    switch (action.type) {
      case "GET_VIEWCHILD_NAME":
        return newState;
      case "GET_VIEWCHILD_SUCCESS":
        newState.featured_child = { ...action.data };
        return newState;
        default:
            return newState;
    
    }
  }
  
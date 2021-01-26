const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
  users:[],
  totalCount: 0,
  pageSize: 5,
  currentPage: 1,
  isFetching: false,
  
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.followed === false && el.id === action.userId) el.followed = true;
          return el;
        }),
      };
    case UNFOLLOW:
      return{
        ...state,
        users: state.users.map((el) => {
          if (el.followed === true && el.id === action.userId) el.followed = false;
          return el;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.data
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    default:
      return state;
  }
};

export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (data) => ({type: SET_USERS, data});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

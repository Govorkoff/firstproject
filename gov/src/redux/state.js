const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
  _state: {

    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It my first post', likesCount: 23 },
        { id: 3, message: 'It my two post', likesCount: 23 },
        { id: 4, message: 'It my three post', likesCount: 23 },
        { id: 5, message: 'It my four post', likesCount: 23 },
        { id: 6, message: 'It my five post', likesCount: 23 },
        { id: 7, message: 'It my six post', likesCount: 23 },
        { id: 8, message: 'It my seven post', likesCount: 23 },
      ],
      newPostText: "new",
    },

    dialogsPage: {
      messagesData: [
        { id: 1, message: 'Hello! message 1' },
        { id: 2, message: 'YoYoYo! message 2' },
        { id: 3, message: 'Ok! My name.... message 3' },
        { id: 4, message: 'Youtube the best! message 4' },
        { id: 5, message: 'Viktory! message 5' },
        { id: 6, message: 'Fuck school! message 6' },
      ],
      dialogsData: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Vika' },
        { id: 6, name: 'Valera' },
      ],
    }
  },
  _callSubscriber() {
    console.log('state change')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;     //Обсервер наблюдатель
  },

  // addPost() {
  //   let newPost = {
  //     id: 9,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state)
  // },

  //
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 9,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state)

    }
  }
  //
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const apdateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })


window.state = store;
export default store;





// let renderTree = () => {
//   console.log('state change')
// }

// let state = {

//   profilePage: {
//     posts: [
//       { id: 1, message: 'Hi, how are you?', likesCount: 12 },
//       { id: 2, message: 'It my first post', likesCount: 23 },
//       { id: 3, message: 'It my two post', likesCount: 23 },
//       { id: 4, message: 'It my three post', likesCount: 23 },
//       { id: 5, message: 'It my four post', likesCount: 23 },
//       { id: 6, message: 'It my five post', likesCount: 23 },
//       { id: 7, message: 'It my six post', likesCount: 23 },
//       { id: 8, message: 'It my seven post', likesCount: 23 },
//     ],
//     newPostText: "new",
//   },

//   dialogsPage: {
//     messagesData: [
//       { id: 1, message: 'Hello! message 1' },
//       { id: 2, message: 'YoYoYo! message 2' },
//       { id: 3, message: 'Ok! My name.... message 3' },
//       { id: 4, message: 'Youtube the best! message 4' },
//       { id: 5, message: 'Viktory! message 5' },
//       { id: 6, message: 'Fuck school! message 6' },
//     ],
//     dialogsData: [
//       { id: 1, name: 'Dimych' },
//       { id: 2, name: 'Andrey' },
//       { id: 3, name: 'Sveta' },
//       { id: 4, name: 'Sasha' },
//       { id: 5, name: 'Vika' },
//       { id: 6, name: 'Valera' },
//     ],
//   }
// }

// window.state = state;


// export const addPost = () => {
//   let newPost = {
//     id: 9,
//     message: state.profilePage.newPostText,
//     likesCount: 0
//   };
//   state.profilePage.posts.push(newPost);
//   state.profilePage.newPostText = '';
//   renderTree();
// }

// export const updateNewPostText = (newText) => {
//   state.profilePage.newPostText = newText;
//   renderTree()
// }

// export const subscribe = (observer) => {
//   renderTree = observer;     //Обсервер наблюдатель
// }


// export default state

